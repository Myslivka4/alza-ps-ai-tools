-- Run this in Supabase SQL editor (Dashboard → SQL editor → New query)

create table if not exists tool_interactions (
  id          uuid default gen_random_uuid() primary key,
  tool_id     text not null,
  tool_name   text not null,
  session_id  text,
  opened_at   timestamptz default now()
);

create table if not exists tool_ratings (
  id          uuid default gen_random_uuid() primary key,
  tool_id     text not null,
  tool_name   text not null,
  rating      integer not null check (rating >= 1 and rating <= 5),
  feedback    text,
  session_id  text,
  created_at  timestamptz default now()
);

-- Allow anonymous inserts and selects (no auth required for MVP)
alter table tool_interactions enable row level security;
alter table tool_ratings enable row level security;

create policy "anyone can insert interactions"
  on tool_interactions for insert with check (true);

create policy "anyone can insert ratings"
  on tool_ratings for insert with check (true);

create policy "anyone can read ratings"
  on tool_ratings for select using (true);

-- Useful view for admin: interactions per tool
create or replace view tool_stats as
select
  i.tool_id,
  i.tool_name,
  count(i.id)                                   as open_count,
  count(distinct i.session_id)                  as unique_users,
  round(avg(r.rating)::numeric, 1)              as avg_rating,
  count(r.id)                                   as rating_count
from tool_interactions i
left join tool_ratings r using (tool_id)
group by i.tool_id, i.tool_name
order by open_count desc;

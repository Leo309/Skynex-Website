-- SQL Schema for Contact Form submissions
-- Run this in the Supabase SQL Editor

create table if not exists contact_submissions (
  id uuid default uuid_generate_v4() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  company text,
  subject text not null,
  message text not null,
  created_at timestamptz default now() not null,
  processed boolean default false not null
);

-- Create an index for better performance when filtering
create index if not exists contact_submissions_created_at_idx on contact_submissions(created_at);

-- Set up row level security (RLS) to restrict access
alter table contact_submissions enable row level security;

-- Create a policy that allows only authenticated users to view submissions
create policy "Public can submit contact forms" on contact_submissions for insert to anon with check (true);

-- Create a policy that allows only authenticated users to view submissions 
create policy "Only authenticated users can view contact submissions" on contact_submissions for select using (auth.role() = 'authenticated');

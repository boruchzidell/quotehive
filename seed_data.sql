-- create database sms_quotes

drop table if exists quotes cascade;
drop table if exists logging;

create table quotes (
  id serial primary key,
  quote varchar(2048) not null,
  create_date text default to_char(timezone('America/New_York', current_timestamp(0)), 'YYYY-MM-DD HH12:MI:SS am')
);

create table logging (
  id serial primary key,
  quote_id integer,
  sent_date text default to_char(timezone('America/New_York', current_timestamp(0)), 'YYYY-MM-DD HH12:MI:SS am'),

  foreign key(quote_id) references quotes(id) on delete set null
);

begin;

  insert into
    quotes
      (quote)
    values
      ('Quantity before quality.'),
      ('Step on every stone.'),
      ('Have a bias towards action');

--  insert into logging (quote_id)
--  values (1), (1), (2), (3);

end;

--select * from quotes;
--select * from logging;

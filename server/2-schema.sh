#!/bin/bash
psql -v ON_ERROR_STOP=1 --username "postgres" -d "dance_db" <<-EOSQL

create schema if not exists public;
create table public.venue (
  "id" SERIAL NOT NULL,
  "name" character varying NOT NULL,
  "location" character varying NOT NULL,
  "phone" character varying NOT NULL,
  "email" character varying NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  CONSTRAINT UQ_824a52c2599d374feff4fd67e93 UNIQUE ("name"),
  CONSTRAINT PK_c53deb6d1bcb088f9d459e7dbc0 PRIMARY KEY ("id")
);
create table public.event (
  "id" SERIAL NOT NULL,
  "name" character varying NOT NULL,
  "description" character varying(750) NOT NULL,
  "date" character varying NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "venueId" integer,
  CONSTRAINT PK_30c2f3bbaf6d34a55f8ae6e4614 PRIMARY KEY ("id")
);
ALTER TABLE "event" ADD CONSTRAINT "FK_0a7a72120769940b25f994863c7" FOREIGN KEY ("venueId") REFERENCES "venue"("id") ON DELETE NO ACTION ON UPDATE NO ACTION

EOSQL
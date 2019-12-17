#!/bin/bash
psql -v ON_ERROR_STOP=1 --username "postgres" -d "dance_db" <<-EOSQL
INSERT INTO "venue"("name", "location", "phone", "createdAt") 
VALUES 
  ('Solas','232 E 9th St, New York, NY 10003','212-375-0297','12/16/2019');

INSERT INTO "venue"("name", "location", "phone", "createdAt") 
VALUES 
  ('Las Chicas Locas','268 W 47th St 2nd Fl, New York, NY 10001','917-684-8584','12/16/2019');

INSERT INTO "venue"("name", "location", "phone", "createdAt") 
VALUES 
  ('Pier 45','Hudson River Greenway, New York, NY 10014','212 627-2020','12/16/2019');

INSERT INTO "venue"("name", "location", "phone", "createdAt") 
VALUES 
  ('DanceSport','230 W 39th St, New York, NY 10018','212-307-1111','12/16/2019');



INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Zouk and Kompa','Zouk & Kompa Night Each and Every Friday,Music By: DJ KC, DJ Esalar, DJ Marco, DJ Gino, 10 All Night, Ladies Free Till 1AM.8913 Glenwood Rd Brooklyn NY 11236','11/1/2019','12/16/2019',1);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('YoZouk','YoZouk New York Congress, Sheraton New York Times Square Hotel, West 53rd Street','4/8/2020','12/16/2019',4);
  
INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('NYC Zouk Festival','NYC ZOUK FESTIVAL 2019 FREEDOM EDITION','11/4/2019','12/16/2019',1);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Outdoor Zouk','FREE* Outdoor Zouk Party Back to The Old School Pier 45 Hudson River NYC','10/26/2019','12/16/2019',3);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Brazil Day','Brazilian Day Little Brazil near West 46th Street','8/30/2021','12/16/2019',3);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Kompa Tuesday','KOMPA TUESDAYS!!','10/22/2019','12/16/2019',1);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Zouk & Social','Zouk Class & Social','11/3/2019','12/16/2019',2);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Zouk at DanceSport','DanceSport - Zouk Class & Social @Las Chicas Locas on Nov 10','11/10/2019','12/16/2019',4);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('NYC Zouk Party','NYC Zouk Party @ Solas - FREEZOUKNYC presents NYC ZOUK PARTY with workshops!','11/5/2019','12/16/2019',1);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Zouk NYC Party','Zouk NYC PARTY on East 9th Street','11/12/2019','12/16/2019',1);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Zouk Class and Social dance floor','Zouk Class & Social @Las Chicas Locas','11/19/2019','12/16/2019',4);

INSERT INTO "event"("name", "description", "date", "createdAt","venueId") 
VALUES 
  ('Zouk Party at East Village','Party at a beautiful East Village bar with plenty of room to Zouk it out to the amazing DJ Power!! It actually ends at 1:30am!!!','11/19/2019','12/16/2019',1);




EOSQL
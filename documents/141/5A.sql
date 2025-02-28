/*	 
      Titel des Albums
	  Release Jahr des Albums
      Name des Künstlers des Albums
*/
CREATE VIEW beisistfett AS
select
	a.title as Title,
    a.year as Year,
    p.name as Artist
from albums a
JOIN persons p
	on p.idpersons=a.artist;

select * from beisistfett;

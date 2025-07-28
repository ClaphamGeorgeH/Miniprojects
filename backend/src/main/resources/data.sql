
--Musicplayer

INSERT INTO Band (name, image_location) VALUES ('Lucky Dube', 'images/lucky-dube.jpg');
INSERT INTO Band (name, image_location) VALUES ('Oleg Mazur', 'images/oleg-mazur.jpg');

INSERT INTO Album (name, band_id, realize_date, image_location) VALUES ('Captured Live', 1, DATE '1976-03-01','./assets');
INSERT INTO Album (name, band_id, realize_date, image_location) VALUES ('Free music', 2, DATE '2025-01-01','./assets');

INSERT INTO Song (name, duration, album_id, file_location) VALUES ('One Love',60,1,'assets/music/Lucky-Dube-One-Love.mp3');
INSERT INTO Song (name, duration, album_id, file_location) VALUES ('Movie Trailer',60,2,'assets/music/movie_trailer.mp3');



--Musicplayer

INSERT INTO Band (name, image_location) VALUES ('Lucky Dube', './assets');
INSERT INTO Band (name, image_location) VALUES ('Oleg Mazur', './assets');

INSERT INTO Album (name, band_id, realize_date, image_location) VALUES ('Captured Live', 1, 'March 1976','./assets');
INSERT INTO Album (name, band_id, realize_date, image_location) VALUES ('Free music', 2, 'January 2025','./assets');

INSERT INTO Song (name, duration, band, file_location) VALUES ('One Love',60,'Lucky Dube','assets/music/Lucky-Dube-One-Love.mp3');
INSERT INTO Song (name, duration, band, file_location) VALUES ('Movie Trailer',60,'Oleg Mazur','assets/music/movie_trailer.mp3');


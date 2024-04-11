CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/wife.jpg', 'My Wife', 'My wife and I at the 2019 Marine Corps ball in Las Vegas, Nevada.'),
('images/brother-grad.jpg', 'My Brother and I', 'My brother and I at my Marine Corps graduation in 2016 in San Diego, California.'),
('images/brothers.jpg', 'My Brothers and I', 'A photo of my brothers and I in Stockton, California.'),
('images/bs-bar.jpg', 'Boy Scouts', 'My friends and I in Boy Scouts making a "signal bar" in a California forest.'),
('images/bs-brother.jpg', 'My Brother and I', 'A photo of my brother and I at my Eagle Scout ceremony.'),
('images/dad.jpg', 'My Dad and I', 'A photo of my father and I in Stockton, California.'),
('images/marine-ball.jpg', 'Marine Corps Ball', 'A photo of Aircraft Rescue Fire Fighting Marines at the 2019 Marine Corps ball in Las Vegas, Nevada.'),
('images/marine-fire.jpg', 'Marine Fire Dept', 'A Photo taken at the Marine Corps Air Station Yuma ARFF Fire Department.');
  
-- Add primary key
ALTER TABLE globalfirepower
ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST;

-- Turn off safe updates
SET SQL_SAFE_UPDATES = 0;

-- Delete and update data
DELETE FROM globalfirepower
WHERE ReservePersonnel = 0;

UPDATE globalfirepower
SET FighterAircraft = 1
WHERE FighterAircraft = 0;

UPDATE globalfirepower
SET TotalAircraftStrength = TotalAircraftStrength + 1
WHERE FighterAircraft = 1;

--  Turn safe updates on
SET SQL_SAFE_UPDATES = 1;

-- Select Averages
SELECT AVG(TotalMilitaryPersonnel), 
	AVG(TotalAircraftStrength), 
	AVG(TotalAircraftStrength), 
	AVG(TotalHelicopterStrength), 
	AVG(TotalPopulation)
FROM globalfirepower;

-- Insert new data
INSERT INTO globalfirepower(Country, TotalPopulation, TotalMilitaryPersonnel, TotalAircraftStrength, TotalHelicopterStrength)
VALUES ("GlobalLand",85175106,741101,639,256);

SELECT * FROM globalfirepower;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: kar
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rides`
--

DROP TABLE IF EXISTS `rides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rides` (
  `rideid` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `userregistcarid` int DEFAULT NULL,
  `startlat` decimal(16,13) DEFAULT NULL,
  `startlng` decimal(16,13) DEFAULT NULL,
  `endlat` decimal(16,13) DEFAULT NULL,
  `endlng` decimal(16,13) DEFAULT NULL,
  `Starting_address` varchar(100) DEFAULT NULL,
  `End_adrress` varchar(110) DEFAULT NULL,
  PRIMARY KEY (`rideid`),
  KEY `userid` (`userid`),
  KEY `userregistcarid` (`userregistcarid`),
  CONSTRAINT `rides_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`),
  CONSTRAINT `rides_ibfk_2` FOREIGN KEY (`userregistcarid`) REFERENCES `userregistcar` (`userregistcarid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rides`
--

LOCK TABLES `rides` WRITE;
/*!40000 ALTER TABLE `rides` DISABLE KEYS */;
INSERT INTO `rides` VALUES (1,1,1,24.8669427000000,67.0256899000000,24.9474217000000,67.0980351000000,'IBA City Campus, Kiyani Shaheed Road, Karachi, Pakistan','Rufi Spring Field, Abul Hasan Isphahani Road, Karachi, Pakistan'),(2,1,1,24.8024212000000,67.0298246000000,24.9474217000000,67.0980351000000,'Dolmen Mall Clifton, Karachi, Pakistan','Rufi Spring Field, Abul Hasan Isphahani Road, Karachi, Pakistan'),(3,1,1,24.9195384000000,67.0591187000000,24.9376163000000,67.1028567000000,'Karimabad, Karachi, Pakistan','TCS Abul Hasan isphani Rd branch, Abul Hasan Isphahani Road, Karachi, Pakistan'),(4,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(5,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(6,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(7,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(8,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(9,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(10,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(11,1,1,24.8669427000000,67.0256899000000,NULL,NULL,'IBA City Campus, Kiyani Shaheed Road, Karachi, Pakistan','IBA'),(12,1,1,24.8726789000000,67.0605643000000,24.8669427000000,67.0256899000000,'Tariq Road, Karachi, Pakistan','IBA City Campus, Kiyani Shaheed Road, Karachi, Pakistan'),(13,1,1,24.9307277000000,67.1004099000000,NULL,NULL,'Headshot Gaming Zone, Karachi, Pakistan','Rufi spr'),(14,1,1,24.9418685000000,67.1142983000000,24.8024212000000,67.0298246000000,'IBA, University Rd, Karachi, Pakistan','Dolmen Mall Clifton, Karachi, Pakistan'),(15,1,1,24.9505278000000,67.1469964000000,24.8669427000000,67.0256899000000,'New Rizvia Society, Karachi, Pakistan','IBA City Campus, Kiyani Shaheed Road, Karachi, Pakistan'),(16,1,1,27.7267613000000,68.8191376000000,24.9474217000000,67.0980351000000,'IBA Sukkur, Sukkur, Pakistan','Rufi Spring Field, Abul Hasan Isphahani Road, Karachi, Pakistan'),(17,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(18,1,1,23.3333000000000,34.3330000000000,23.4343000000000,34.3330000000000,'world','space'),(19,1,1,24.9418685000000,67.1142983000000,24.8669427000000,67.0256899000000,'IBA, University Rd, Karachi, Pakistan','IBA City Campus, Kiyani Shaheed Road, Karachi, Pakistan'),(20,1,1,24.9418685000000,67.1142983000000,24.9195384000000,67.0591187000000,'IBA, University Rd, Karachi, Pakistan','Karimabad, Karachi, Pakistan'),(21,1,1,24.9180271000000,67.0970916000000,NULL,NULL,'Gulshan-e-Iqbal, Karachi, Pakistan','gulis'),(22,1,1,24.9180271000000,67.0970916000000,24.9204194000000,67.1343848000000,'Gulshan-e-Iqbal, Karachi, Pakistan','Gulistan-e-Johar, Karachi, Pakistan'),(23,1,1,24.9180271000000,67.0970916000000,24.9204194000000,67.1343848000000,'Gulshan-e-Iqbal, Karachi, Pakistan','Gulistan-e-Johar, Karachi, Pakistan'),(24,1,1,24.9180271000000,67.0970916000000,24.9204194000000,67.1343848000000,'Gulshan-e-Iqbal, Karachi, Pakistan','Gulistan-e-Johar, Karachi, Pakistan'),(25,1,1,24.9180271000000,67.0970916000000,24.9204194000000,67.1343848000000,'Gulshan-e-Iqbal, Karachi, Pakistan','Gulistan-e-Johar, Karachi, Pakistan'),(26,1,1,24.9180271000000,67.0970916000000,24.9204194000000,67.1343848000000,'Gulshan-e-Iqbal, Karachi, Pakistan','Gulistan-e-Johar, Karachi, Pakistan'),(27,1,1,24.9180271000000,67.0970916000000,24.9204194000000,67.1343848000000,'Gulshan-e-Iqbal, Karachi, Pakistan','Gulistan-e-Johar, Karachi, Pakistan');
/*!40000 ALTER TABLE `rides` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-11 19:31:41

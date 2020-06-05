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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(40) DEFAULT NULL,
  `Gender` varchar(1) DEFAULT NULL,
  `contactno` varchar(11) DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `usertypeid` int DEFAULT NULL,
  `dateofbirth` date DEFAULT NULL,
  PRIMARY KEY (`userid`,`email`),
  KEY `usertypeid` (`usertypeid`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`usertypeid`) REFERENCES `usertypes` (`usertypeid`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'saadat','M','03332358685','saddat1998@hotmai.com','digimon',1,NULL),(44,'saadat','M','03332358885','saddat1997@hotmail.com','octaslash',1,NULL),(63,'saadat','M','03332358885','sadda123@hotmail.com','digimon',1,'2020-03-10'),(64,'arbaz','M','09007860111','asdas@gmail.com','digimon',1,'1998-02-02'),(65,'saadat','M','03332358885','saddat1997@hotmail.com','12345',1,'2020-03-12'),(66,'sadasd@hotmail.com','M','03232311111','sadsad@gotmail.com','123456',1,'2020-04-08'),(67,'sadasda','M','0333234885','sadsad@hotmail.com','12345',1,'2020-04-08'),(68,'sdasdasd','M','033323','saddat17@hotmail.com','12345',1,'2020-04-07'),(69,'asd','M','032323','adsdas@hotmail.com','12345',1,'2020-04-08'),(70,'asd','M','032323','adsdas@hotmail.com','12345',1,'2020-04-08'),(71,'dasdasd','M','03332358885','sadasda@fasfa.com','12345',1,'2020-04-07'),(72,'sdaasd','M','123123','saddat1997@hotmai.com','12345',1,'2020-04-08'),(73,'sadsad','M','22222','asdsad@hotmai.com','123',1,'2020-04-09'),(74,'sdasd','M','123123','asdasd@goasd.com','3333',1,'2020-04-26'),(76,'OOP God','M','03332358885','saddat5959@gmail.com','digimon',2,'2020-04-02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-11 19:31:40

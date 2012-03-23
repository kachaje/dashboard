-- MySQL dump 10.13  Distrib 5.1.61, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: dashboard
-- ------------------------------------------------------
-- Server version	5.1.61-0ubuntu0.11.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `district` (
  `district_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`district_id`),
  KEY `new_fk_constraint` (`region_id`),
  CONSTRAINT `new_fk_constraint` FOREIGN KEY (`region_id`) REFERENCES `region` (`region_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `district`
--

LOCK TABLES `district` WRITE;
/*!40000 ALTER TABLE `district` DISABLE KEYS */;
INSERT INTO `district` VALUES (1,'Karonga',1),(2,'Chitipa',1),(3,'Rumphi',1),(4,'Mzimba',1),(5,'Likoma',1),(6,'NkhataBay',1),(7,'Kasungu',2),(8,'Ntchisi',2),(9,'Dowa',2),(10,'Nkhotakota',2),(11,'Salima',2),(12,'Mchinji',2),(13,'Dedza',2),(14,'Lilongwe',2),(15,'Ntcheu',2),(16,'Balaka',3),(17,'Mwanza',3),(18,'Zomba',4),(19,'Phalombe',4),(20,'Blantyre',3),(21,'Chikhwawa',3),(22,'Nsanje',3),(23,'Mangochi',4),(24,'Thyolo',3),(25,'Mulanje',4),(26,'Chiradzulu',3),(27,'Machinga',3);
/*!40000 ALTER TABLE `district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region` (
  `region_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`region_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'Northern Region'),(2,'Central Region'),(3,'Southern Region'),(4,'Eastern Region');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site`
--

DROP TABLE IF EXISTS `site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `site` (
  `site_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `site_type` int(11) DEFAULT NULL,
  `ip_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`site_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site`
--

LOCK TABLES `site` WRITE;
/*!40000 ALTER TABLE `site` DISABLE KEYS */;
INSERT INTO `site` VALUES (8,'Baobab Health Trust',14,'up',33.759542,-13.971789,1,'192.168.5.90'),(9,'Bwaila Hospital',14,'up',33.77477778,-13.9908611,2,'192.168.7.3'),(10,'Kamuzu Central Hospital',14,'up',33.78586111,-13.9508611,3,'192.168.4.169'),(11,'Lighthouse',14,'up',33.78586111,-13.9508611,1,'192.168.3.203'),(12,'Macro',14,'up',33.77477778,-13.9908611,1,'192.168.75.18'),(13,'Martin Preuss Centre',14,'up',33.77477778,-13.9908611,1,'192.168.7.202'),(14,'M\'bang\'ombe Health Centre',14,'up',33.71391667,-13.71694444,4,'192.168.20.42'),(15,'Ngoni Health Centre',14,'up',33.68522222,-13.69491667,4,'192.168.20.38'),(16,'St. Gabriel Mission Hospital',14,'up',33.53594444,-13.99978889,1,'10.2.0.72'),(17,'Kasungu District Hospital',7,NULL,33.1488,-13.203611111,2,NULL),(18,'Mzuzu Macro',4,NULL,33.61461111,-11.46525,1,NULL),(19,'Salima District Hospital',11,NULL,NULL,NULL,2,'10.2.0.34'),(20,'Dedza District Hospital',13,NULL,34.33354167,-14.34359444,2,NULL),(21,'Ntcheu District Hospital',15,NULL,34.63830556,-14.81688889,2,NULL),(22,'Mangochi District Hospital',23,NULL,35.26472222,-14.48194444,2,NULL),(23,'Machinga District Hospital',27,NULL,NULL,NULL,2,NULL),(24,'Macro',20,NULL,35.32072222,-15.80208333,1,NULL),(25,'Queen Elizabeth Central Hospital',20,NULL,35.32072222,-15.80208333,3,'10.2.0.14'),(26,'Matawale Health Centre',18,NULL,NULL,NULL,4,NULL),(27,'Zomba Central Hospital',18,NULL,35.31286111,-15.39688889,3,'10.2.0.30'),(28,'Balaka District Hospital',16,NULL,34.94952778,-14.98513889,2,NULL),(31,'Mulanje District Hospital',25,NULL,35.5075,-16.02555556,2,NULL),(32,'PIH',14,'up',33.79366667,-14.05113889,1,NULL),(33,'Neno District Hospital',17,NULL,NULL,NULL,2,NULL),(34,'Area 25 ',14,'up',33.41477778,-13.9508611,2,NULL),(35,'Limbe',20,NULL,35.352,-15.81680556,4,NULL),(36,'Mlambe Mission Hospital',20,NULL,35.31725,-15.64477778,1,NULL),(37,'Salima District Hospital',11,NULL,34.42183333,-13.76177778,2,NULL),(38,'Phalombe Mission Hospital',19,NULL,35.61872222,-15.82469444,1,NULL),(39,'Ntchisi District Hospital',8,'',33.91102778,-13.36333333,2,NULL),(40,'Nsanje District Hospital',22,NULL,35.25988889,-16.91769444,2,NULL),(41,'Mchinji District Hospital',12,NULL,32.88722222,-13.8025,2,NULL),(42,'Dowa District Hospital',9,NULL,33.93688889,-13.65508333,2,NULL),(43,'Chikhwawa District Hospital',21,NULL,34.85275,-16.02344444,2,NULL),(45,'Area 18 Health Centre',14,'up',33.78066667,-13.94105556,4,NULL);
/*!40000 ALTER TABLE `site` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_type`
--

DROP TABLE IF EXISTS `site_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `site_type` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_type`
--

LOCK TABLES `site_type` WRITE;
/*!40000 ALTER TABLE `site_type` DISABLE KEYS */;
INSERT INTO `site_type` VALUES (1,'Other'),(2,'District Hospital'),(3,'Central Hospital'),(4,'Health Center');
/*!40000 ALTER TABLE `site_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-03-23 10:58:28

-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: p2alterworld
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `p2alterworld`
--

/*!40000 DROP DATABASE IF EXISTS `p2alterworld`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `p2alterworld` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `p2alterworld`;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `Users_id` int NOT NULL,
  `Products_id` int NOT NULL,
  `Quantity` int DEFAULT NULL,
  PRIMARY KEY (`Users_id`,`Products_id`),
  KEY `fk_Users_has_Produits_Produits1_idx` (`Products_id`),
  KEY `fk_Users_has_Produits_Users1_idx` (`Users_id`),
  CONSTRAINT `fk_Users_has_Produits_Produits1` FOREIGN KEY (`Products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_Users_has_Produits_Users1` FOREIGN KEY (`Users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `Produits_id` int NOT NULL,
  `Users_id` int NOT NULL,
  PRIMARY KEY (`Produits_id`,`Users_id`),
  KEY `fk_Produits_has_Users_Users1_idx` (`Users_id`),
  KEY `fk_Produits_has_Users_Produits1_idx` (`Produits_id`),
  CONSTRAINT `fk_Produits_has_Users_Produits1` FOREIGN KEY (`Produits_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_Produits_has_Users_Users1` FOREIGN KEY (`Users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nature`
--

DROP TABLE IF EXISTS `nature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nature` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nature`
--

LOCK TABLES `nature` WRITE;
/*!40000 ALTER TABLE `nature` DISABLE KEYS */;
INSERT INTO `nature` VALUES (1,'Avatars'),(2,'Monstres'),(3,'Armes'),(4,'Maps');
/*!40000 ALTER TABLE `nature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `Users_id` int NOT NULL,
  `Produits_id` int NOT NULL,
  `Quantity` int DEFAULT NULL,
  PRIMARY KEY (`Users_id`,`Produits_id`),
  KEY `fk_Users_has_Produits_Produits2_idx` (`Produits_id`),
  KEY `fk_Users_has_Produits_Users2_idx` (`Users_id`),
  CONSTRAINT `fk_Users_has_Produits_Produits2` FOREIGN KEY (`Produits_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_Users_has_Produits_Users2` FOREIGN KEY (`Users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,1,1),(1,3,2),(2,1,3),(2,4,1);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `image1` varchar(800) DEFAULT NULL,
  `image2` varchar(100) DEFAULT NULL,
  `Prix` varchar(10) DEFAULT NULL,
  `Creator_id` int NOT NULL,
  PRIMARY KEY (`id`,`Creator_id`),
  KEY `fk_Produits_Users1_idx` (`Creator_id`),
  CONSTRAINT `fk_Produits_Users1` FOREIGN KEY (`Creator_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Chat astronaute',NULL,NULL,'6,99',1),(2,'Prince',NULL,NULL,'6,99',2),(3,'hydre',NULL,NULL,'5,59',2),(4,'Maps city',NULL,NULL,'6,99',1),(5,'Epée medievale',NULL,NULL,'6,99',1),(6,'Dague medievale',NULL,NULL,'5,99',2),(7,'Bouclier noir',NULL,NULL,'4,99',2),(8,'champignon vert',NULL,NULL,'5,99',1),(9,'Feux vert',NULL,NULL,'5,99',1),(10,'Goblin',NULL,NULL,'4,99',2),(11,'Pricesse',NULL,NULL,'3,99',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_nature`
--

DROP TABLE IF EXISTS `products_nature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_nature` (
  `Products_id` int NOT NULL,
  `Nature_id` int NOT NULL,
  PRIMARY KEY (`Products_id`,`Nature_id`),
  KEY `fk_Produits_has_Category_Nature_Category_Nature1_idx` (`Nature_id`),
  KEY `fk_Produits_has_Category_Nature_Produits1_idx` (`Products_id`),
  CONSTRAINT `fk_Produits_has_Category_Nature_Category_Nature1` FOREIGN KEY (`Nature_id`) REFERENCES `nature` (`id`),
  CONSTRAINT `fk_Produits_has_Category_Nature_Produits1` FOREIGN KEY (`Products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_nature`
--

LOCK TABLES `products_nature` WRITE;
/*!40000 ALTER TABLE `products_nature` DISABLE KEYS */;
INSERT INTO `products_nature` VALUES (1,1),(2,1),(3,1),(3,2),(5,3),(6,3),(4,4);
/*!40000 ALTER TABLE `products_nature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_univers`
--

DROP TABLE IF EXISTS `products_univers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_univers` (
  `Products_id` int NOT NULL,
  `Univers_id` int NOT NULL,
  PRIMARY KEY (`Products_id`,`Univers_id`),
  KEY `fk_CatégoriesUnivers_has_Produits_Produits1_idx` (`Products_id`),
  KEY `fk_CatégoriesUnivers_has_Produits_CatégoriesUnivers1_idx` (`Univers_id`),
  CONSTRAINT `fk_CatégoriesUnivers_has_Produits_CatégoriesUnivers1` FOREIGN KEY (`Univers_id`) REFERENCES `univers` (`id`),
  CONSTRAINT `fk_CatégoriesUnivers_has_Produits_Produits1` FOREIGN KEY (`Products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_univers`
--

LOCK TABLES `products_univers` WRITE;
/*!40000 ALTER TABLE `products_univers` DISABLE KEYS */;
INSERT INTO `products_univers` VALUES (1,3),(2,1),(3,1),(4,2),(4,3),(5,1),(6,1);
/*!40000 ALTER TABLE `products_univers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `univers`
--

DROP TABLE IF EXISTS `univers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `univers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `univers`
--

LOCK TABLES `univers` WRITE;
/*!40000 ALTER TABLE `univers` DISABLE KEYS */;
INSERT INTO `univers` VALUES (1,'Fantaisy'),(2,'Post Apocalypse'),(3,'Science Fiction');
/*!40000 ALTER TABLE `univers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prenom` varchar(45) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `adresse` varchar(45) DEFAULT NULL,
  `Code postal` varchar(45) DEFAULT NULL,
  `Ville` varchar(45) DEFAULT NULL,
  `telephone` int DEFAULT NULL,
  `Mots de passe` varchar(45) NOT NULL,
  `Presentation` longtext,
  `is_creator` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Sebastien','ANTICOURT','seb.live.fr','179 rue camille godard','33000','bordeaux',647049474,'test1','salut',1),(2,'test2','test2','test.mail','testadresse','33000','bordeaux',25,'test2','salut',1);
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

-- Dump completed on 2023-08-01 14:49:19

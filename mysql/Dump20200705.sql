-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: bookmarks
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
-- Table structure for table `bookmarks`
--

DROP TABLE IF EXISTS `bookmarks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookmarks` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `url` text NOT NULL,
  `categoryId` int unsigned NOT NULL,
  `userIdBookmark` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId_INDEX` (`categoryId`),
  KEY `title_INDEX` (`title`) /*!80000 INVISIBLE */,
  KEY `userIdBookmark_INDEX` (`userIdBookmark`),
  CONSTRAINT `categoryId` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userIdBookmark` FOREIGN KEY (`userIdBookmark`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmarks`
--

LOCK TABLES `bookmarks` WRITE;
/*!40000 ALTER TABLE `bookmarks` DISABLE KEYS */;
INSERT INTO `bookmarks` VALUES (1,'Javascript','https://www.amazon.com/Head-First-JavaScript-Programming-Brain-Friendly/dp/144934013X/ref=sr_1_4?crid=1IEKOX46114U&dchild=1&keywords=javascript&qid=1593895791&s=books&sprefix=javascr%2Cstripbooks%2C252&sr=1-4',47,7),(2,'React','https://www.amazon.com/React-Explained-Step-Step-Guide/dp/1798752980/ref=sr_1_5?dchild=1&keywords=react&qid=1593895854&s=books&sr=1-5',47,7),(4,'Node.js','https://www.amazon.com/dp/1617294748/ref=sr_1_1?dchild=1&keywords=nodejs&qid=1593895918&s=books&sr=1-1',47,7),(7,'Top 10 beautiful','https://travelaway.me/most-beautiful-countries-europe/',51,7),(8,'Interesting countries','https://allthatsinteresting.com/interesting-countries-to-visit#1',51,7),(11,'Desserts','https://www.delicious.com.au/recipes/collections/gallery/sweet-peanut-butter-recipes/68dwdyor',52,7),(12,'Healthy','https://www.delicious.com.au/recipes/group/healthy-recipes/4b361218-922e-411d-b526-e3c69644fe21',52,7),(15,'Greece','https://www.booking.com/hotel/gr/solimar-aquamarine-platanias-chania.html?aid=376363;label=booking-name-L%2AXf2U1sq4%2AGEkIwcLOALQS410513707198%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9051355%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt1XFzPnqOODws;sid=b8c3cf699913a5c8560b17de0e8f3bfc;all_sr_blocks=39553304_231883342_2_33_0;checkin=2020-07-24;checkout=2020-07-31;dest_id=811;dest_type=region;dist=0;group_adults=2;group_children=0;hapos=4;highlighted_blocks=39553304_231883342_2_33_0;hpos=4;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=39553304_231883342_2_33_0__73360;srepoch=1593896970;srpvid=0fc294c4a435022b;type=total;ucfs=1&#hotelTmpl',53,8),(16,'Venice','https://www.booking.com/searchresults.html?aid=376363&label=booking-name-L*Xf2U1sq4*GEkIwcLOALQS410513707198%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9051355%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt1XFzPnqOODws&sid=b8c3cf699913a5c8560b17de0e8f3bfc&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Faid%3D376363%3Blabel%3Dbooking-name-L%252AXf2U1sq4%252AGEkIwcLOALQS410513707198%253Apl%253Ata%253Ap1%253Ap22%252C563%252C000%253Aac%253Aap%253Aneg%253Afi%253Atikwd-65526620%253Alp9051355%253Ali%253Adec%253Adm%253Appccp%253DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt1XFzPnqOODws%3Bsid%3Db8c3cf699913a5c8560b17de0e8f3bfc%3Btmpl%3Dsearchresults%3Bac_click_type%3Db%3Bac_position%3D0%3Bcheckin_month%3D7%3Bcheckin_monthday%3D24%3Bcheckin_year%3D2020%3Bcheckout_month%3D7%3Bcheckout_monthday%3D31%3Bcheckout_year%3D2020%3Bclass_interval%3D1%3Bdest_id%3D811%3Bdest_type%3Dregion%3Bdtdisc%3D0%3Bettar%3D62654%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Braw_dest_type%3Dregion%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsearch_selected%3D1%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dindex%3Bsrc_elem%3Dsb%3Bsrpvid%3D0fc294c4a435022b%3Bss%3DCrete%252C%2520Greece%3Bss_all%3D0%3Bss_raw%3Dcreta%3Bssb%3Dempty%3Bsshis%3D0%3Btop_ufis%3D1%26%3B&nflt=&ss=venice&is_ski_area=0&ssne=Crete&ssne_untouched=Crete&dest_id=811&dest_type=region&checkin_year=2020&checkin_month=7&checkin_monthday=24&checkout_year=2020&checkout_month=7&checkout_monthday=31&group_adults=2&group_children=0&no_rooms=1&from_sf=1',53,8);
/*!40000 ALTER TABLE `bookmarks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `userId` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name_INDEX` (`name`),
  KEY `userId_INDEX` (`userId`) /*!80000 INVISIBLE */,
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (47,'Amazon Books',7),(51,'Countries',7),(52,'Recipes',7),(53,'Booking',8);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Bogdan Groza','bogdan.groza@gmail.com','$2b$04$LJN8neknG35G/9.7j5aZDu0T6alZlbV30Fhuz4KH7rAXHu15WObSG'),(8,'Monica Cosma','monica.cosma@yahoo.com','$2b$04$2/45QRl8cEtGz2RuebQPIe68O7xxl12mPgmJ5k4qYno/CXSBfwHSe');
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

-- Dump completed on 2020-07-05 21:56:53

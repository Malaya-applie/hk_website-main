-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `categoryId` int unsigned NOT NULL,
  `introduction` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Hitesh Khunt',
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (2,'The Rise of Artificial Intelligence in Healthcare',3,'Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.','<h2><strong>Artificial Intelligence (AI)</strong></h2><p>&nbsp;</p><p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p><p>&nbsp;</p><p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p><p>&nbsp;</p><h2><strong>Predictive Analytics and Disease Prevention</strong></h2><p>&nbsp;</p><p>One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.</p>','Hiesh Khunt','1733321322604-Image.png','2024-12-04 14:08:42','2024-12-04 14:08:42');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand_logos`
--

DROP TABLE IF EXISTS `brand_logos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand_logos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand_logos`
--

LOCK TABLES `brand_logos` WRITE;
/*!40000 ALTER TABLE `brand_logos` DISABLE KEYS */;
INSERT INTO `brand_logos` VALUES (1,'Logo 1','1737097949079-Logo 1.png','2024-11-11 05:05:18','2025-01-17 07:12:29'),(2,'Logo 2','1737098055100-Logo 2.png','2024-11-11 05:05:35','2025-01-17 07:14:15'),(3,'Logo 3','1737102020961-Logo 3.png','2024-11-11 05:05:47','2025-01-17 08:20:20'),(4,'Logo 4','1737102176014-Logo 4.png','2024-11-11 05:05:57','2025-01-17 08:22:56'),(5,'Logo 5','1737102663635-Logo 5.png','2025-01-17 08:31:03','2025-01-17 08:31:03'),(6,'Logo 6','1737102868048-Logo 6.png','2025-01-17 08:34:28','2025-01-17 08:34:28'),(7,'Logo 7','1737102955330-Logo 7.png','2025-01-17 08:35:55','2025-01-17 08:35:55'),(8,'Logo 8','1737103030102-Logo 8.png','2025-01-17 08:37:10','2025-01-17 08:37:10'),(9,'Logo 9','1737103090397-Logo 9.png','2025-01-17 08:38:10','2025-01-17 08:38:10'),(10,'Logo 10','1737103143017-Logo 10.png','2025-01-17 08:39:03','2025-01-17 08:39:03'),(11,'Logo 11','1737103200109-Logo 11.png','2025-01-17 08:40:00','2025-01-17 08:40:00'),(12,'Logo 12','1737113078547-Logo 12.png','2025-01-17 11:24:38','2025-01-17 11:24:38'),(13,'Logo 12','1737113135380-Logo 13.png','2025-01-17 11:25:35','2025-01-17 11:25:35');
/*!40000 ALTER TABLE `brand_logos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `case_studies`
--

DROP TABLE IF EXISTS `case_studies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `case_studies` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `points` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `button_text` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `button_link` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_studies`
--

LOCK TABLES `case_studies` WRITE;
/*!40000 ALTER TABLE `case_studies` DISABLE KEYS */;
INSERT INTO `case_studies` VALUES (1,'Rheingold Edelmetall AG','<p>Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.<br>Liechtenstein is considered one of the safest countries in the world and offers incomparable protection of investments and personal reserves due to its special legal situation.<br>Unlike a bank, at Rheingold every purchase of precious metals is physically deposited. This makes you for years the most trusted partner, in terms of precious metal investments.</p>','<ul><li>WebShop Development</li><li>Interaction Design</li><li>Global trade</li><li>Integrity and Good Governance</li></ul>','Explore more Insights','#','1737108316371-Rheingold.png','2024-11-18 15:01:12','2025-01-17 10:05:16');
/*!40000 ALTER TABLE `case_studies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (3,'AI/ML','2024-12-04 14:03:06','2024-12-04 14:03:06'),(4,'Mobile Development','2024-12-04 14:03:14','2024-12-04 14:03:14'),(5,'Design','2024-12-04 14:03:20','2024-12-04 14:03:20'),(6,'Website Development','2024-12-04 14:03:27','2024-12-04 14:03:27');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_feedbacks`
--

DROP TABLE IF EXISTS `client_feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_feedbacks` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `company` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feedback` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `userimage` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'default user.jpg',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_feedbacks`
--

LOCK TABLES `client_feedbacks` WRITE;
/*!40000 ALTER TABLE `client_feedbacks` DISABLE KEYS */;
INSERT INTO `client_feedbacks` VALUES (1,'Markus Freeman','Chief Enablement Officer ','Azious','<p>“Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.”</p>','1732112946279-avatar.png','2024-11-20 14:29:06','2024-11-20 14:29:06'),(2,'Markus Freeman','Chief Enablement Officer','Azious','<p>“Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.”</p>','1732112994966-avatar.png','2024-11-20 14:29:54','2024-11-20 14:29:54'),(3,'Markus Freeman','Chief Enablement Officer','Azious','<p>“Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.”</p>','1732113035472-avatar.png','2024-11-20 14:30:35','2024-11-20 14:30:35'),(4,'Markus Freeman','Chief Enablement Officer','Azious','<p>“Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.”</p>','1732113067408-avatar.png','2024-11-20 14:31:07','2024-11-20 14:31:07');
/*!40000 ALTER TABLE `client_feedbacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `features` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `portfolioId` int unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `portfolioId` (`portfolioId`),
  CONSTRAINT `features_ibfk_1` FOREIGN KEY (`portfolioId`) REFERENCES `portfolio_details` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES (7,'Detailed Reporting','Holdeed provides detailed daily, monthly, and annual reports to track project progress and employee performance.',2,'2025-01-24 05:42:03','2025-01-28 11:40:41'),(8,'User-Friendly Interface','Designed to be intuitive and easy to navigate for all users, including new workers and project managers.',2,'2025-01-24 05:42:59','2025-01-24 05:42:59'),(9,'Individual Work Reports','Employees can access and download their work reports easily for personal record-keeping.',2,'2025-01-24 05:44:20','2025-01-24 05:44:20'),(10,'Invoice and Report Generation','Quickly generate invoices and reports directly from the platform for seamless billing and documentation.',2,'2025-01-24 05:44:46','2025-01-24 05:44:46'),(11,'Time Tracking','Check-in and check-out functionality enables accurate tracking of employee hours, aiding in payroll management.',2,'2025-01-24 05:45:07','2025-01-24 05:45:07'),(12,'Absence Management','Employees can request vacation days and announce absences directly through the app, streamlining HR processes.',2,'2025-01-24 05:45:26','2025-01-24 05:45:26'),(13,'Communication Tools','Holdeed facilitates communication and collaboration within teams, improving project coordination and efficiency.',2,'2025-01-24 05:45:47','2025-01-24 05:45:47'),(14,'Webshop Functionality','Enhanced checkout process and payment gateway integration boosted user engagement and conversion rates.',100,'2025-01-28 05:50:27','2025-01-28 05:50:27'),(15,'Digital Onboarding Efficiency','Reduced onboarding time and improved compliance levels streamlined operations.',100,'2025-01-28 05:51:12','2025-01-28 05:51:12'),(16,'System Performance','Optimized response times, uptime, and resource utilization ensured reliability and scalability.',100,'2025-01-28 05:51:41','2025-01-28 05:51:41'),(17,'User Adoption','Increased registered users and engagement highlighted improved usability.',100,'2025-01-28 05:52:04','2025-01-28 05:52:04'),(18,'Revenue Generation','Higher sales volume, average order value, and conversion rates drove business growth.',100,'2025-01-28 05:52:33','2025-01-28 05:52:33'),(19,'Customer Satisfaction','Positive feedback and support inquiries reflected heightened client satisfaction.',100,'2025-01-28 05:52:53','2025-01-28 05:52:53'),(27,'Sound Pillow','Features a combination of organic cotton and ceramic yarn, wrapped around organic sheep\'s wool, for comfort and orthopedic support.\n',104,'2025-02-07 10:35:05','2025-02-07 10:35:05'),(28,'Light Treatment Lamp','Conducts color light therapy in various shades, including white, red, violet, green, blue, pink, yellow, and orange/amber.',104,'2025-02-07 10:35:40','2025-02-07 10:35:40'),(29,'SAMINA Sleep System App',' Controls main functions such as lamp brightness, color selection, sleep assistance, alarms, and music playlists.\n',104,'2025-02-07 10:35:57','2025-02-07 10:35:57'),(30,'LED Technology Advancements:','Utilizing powerful LED technology ensures both longevity and energy efficiency',104,'2025-02-07 10:38:28','2025-02-07 10:38:28'),(31,'Filigree Lampshades with Natural Wood:','The lampshades, crafted from solid spruce and alder wood, offer a unique aesthetic and functionality.\n',104,'2025-02-07 10:41:17','2025-02-07 10:41:17'),(32,'USB-C Charging','The adoption of USB-C technology enables faster charging and increased flexibility for user convenience.\n',104,'2025-02-07 10:41:33','2025-02-07 10:41:33'),(33,'Flawless One-Page Checkout Process   ','Simplified checkout process for seamless and efficient transactions.  \n',105,'2025-02-07 12:11:37','2025-02-07 12:11:37'),(34,'Trusted Payment Partners','Integration of trusted payment partners to ensure secure transactions.  ',105,'2025-02-07 12:11:57','2025-02-07 12:11:57'),(35,'Secure Payment Gateway','Implementation of a secure payment gateway to protect customer data.',105,'2025-02-07 12:12:16','2025-02-07 12:12:16'),(36,'Best-in-Class E-commerce Representation','A visually appealing and intuitive platform that effectively showcases Peau d’Or\'s luxurious products.',105,'2025-02-07 12:12:32','2025-02-07 12:12:32'),(37,'Flawless Navigation','Smooth and intuitive navigation for an enhanced user experience',105,'2025-02-07 12:12:49','2025-02-07 12:12:49'),(38,'AI-driven Automation','The accountants or staff enter the invoice data of purchased assets or products, which is then automatically scanned by the system. Receipts are scanned, and along with the invoice, posted in the database, enabling automatic accounting input and bookkeeping. The system is completely automated, categorizing all documentation and bookkeeping entries according to predefined categories.  ',106,'2025-02-07 14:01:26','2025-02-07 14:01:26'),(39,'AI-driven Data Summarization','Presenta offers AI-driven data summarization from multiple documents, simplifying complex financial information for easy interpretation and analysis.  ',106,'2025-02-07 14:01:47','2025-02-07 14:01:47'),(40,'Automatic Document Comparison','The platform automatically compares documents to ensure accuracy and consistency, reducing errors and enhancing efficiency in financial processes.',106,'2025-02-07 14:02:05','2025-02-07 14:02:05'),(41,'Comprehensive Service Options','Presenta provides a range of service options, including taxation, audit, and payroll management, catering to the diverse needs of financial institutions.  ',106,'2025-02-07 14:02:24','2025-02-07 14:02:24'),(42,'Integrated Chat Option','Users can seamlessly communicate with Presenta representatives through an integrated chat option, facilitating quick resolution of queries and issues.',106,'2025-02-07 14:02:48','2025-02-07 14:02:48'),(43,'Flexible Service Plans','Clients can choose from quarterly or annual service plans, offering flexibility and scalability to adapt to changing business requirements.',106,'2025-02-07 14:03:06','2025-02-07 14:03:06'),(44,'Advanced AI Capabilities','Presenta leverages advanced AI capabilities for data extraction from diverse documents, enabling efficient and accurate financial management.',106,'2025-02-07 14:03:24','2025-02-07 14:03:24');
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inquiries`
--

DROP TABLE IF EXISTS `inquiries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inquiries` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `service` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquiries`
--

LOCK TABLES `inquiries` WRITE;
/*!40000 ALTER TABLE `inquiries` DISABLE KEYS */;
/*!40000 ALTER TABLE `inquiries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labels`
--

DROP TABLE IF EXISTS `labels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labels`
--

LOCK TABLES `labels` WRITE;
/*!40000 ALTER TABLE `labels` DISABLE KEYS */;
INSERT INTO `labels` VALUES (1,'round_image','http://localhost:3000/api/img/1730967750275-Group 139.png','2024-11-08 05:58:40','2024-11-08 10:13:26'),(2,'footer_text','WOULD LIKE TO CHECK IF I CAN HELP?','2024-11-08 06:16:47','2024-11-08 06:16:47'),(3,'site_name','Hitesh Khunt','2024-11-08 06:21:59','2024-11-08 06:21:59'),(4,'footer_btn_text','GET IN TOUCH','2024-11-08 06:29:46','2024-11-08 06:29:46'),(5,'footer_btn_url','#','2024-11-08 06:29:53','2024-11-08 06:29:53'),(6,'footer_form_title','DO YOU HAVE AN IDEA OR A CHALLENGE?','2024-11-08 08:41:50','2024-11-08 08:41:50'),(7,'footer_form_text','Let\'s find a way to your success together!','2024-11-08 08:42:06','2024-11-08 08:42:06'),(8,'footer_background','http://localhost:3000/api/img/1731055603361-6567b40647ad466af7dd3e6e_pop-up-bg 1.png','2024-11-08 08:47:28','2024-11-08 08:47:28'),(9,'hero_title_1','Helping shoulder the weight of change & growth.','2024-11-11 04:50:22','2024-11-15 14:16:04'),(10,'hero_title_2','We help businesses and nonprofits accelerate, sustain and maintain change to inspire growth and innovation.','2024-11-11 04:51:04','2024-11-11 04:51:04'),(11,'hero_background','http://localhost:3000/api/img/1731310256936-Hero 1.png','2024-11-11 07:31:12','2024-11-11 07:31:12'),(12,'main_image','http://localhost:3000/api/img/1739361585486-main_image.png','2024-11-11 07:52:37','2025-02-12 12:05:04'),(13,'hero_text','Senior consultant with expertise in tech, marketing, design, and AI.','2024-11-11 08:04:59','2024-11-11 08:04:59'),(14,'statistics_1_stat','57%','2024-11-13 04:52:52','2024-11-13 04:52:52'),(15,'statistics_1_title','Customer Satisfaction & Retention','2024-11-13 04:53:08','2024-11-13 04:53:08'),(16,'statistics_1_description','Improved Customer satisfaction and retention 57% across the board making long-term client relationships — instead of one-time sales.','2024-11-13 04:53:50','2024-11-13 04:53:50'),(17,'statistics_2_stat','$4.55M','2024-11-13 04:54:22','2024-11-13 04:54:22'),(18,'statistics_2_title','Revenue Growth','2024-11-13 04:54:37','2024-11-13 04:55:24'),(19,'statistics_2_description','Achieved $4.55M revenue growth.','2024-11-13 04:55:07','2024-11-13 04:55:07'),(20,'statistics_3_stat','65%','2024-11-13 04:55:59','2024-11-13 04:55:59'),(21,'statistics_3_title','Operational Efficiency','2024-11-13 04:56:15','2024-11-13 04:56:48'),(22,'statistics_3_description','Increased efficiency via process improvements.','2024-11-13 04:56:38','2024-11-13 04:56:38'),(23,'statistics_4_stat','40%','2024-11-13 04:57:20','2024-11-13 04:58:33'),(24,'statistics_4_title','Sales & Conversion','2024-11-13 04:58:22','2024-11-13 04:58:22'),(25,'statistics_4_description','Increased sales and conversion stats, by an average of 40%, increasing the pace of business to a great extent. ','2024-11-13 04:58:59','2024-11-13 04:58:59'),(26,'statistics_4_image','http://localhost:3000/api/img/1731474004052-statistics-4.png','2024-11-13 05:00:31','2024-11-13 05:00:31'),(27,'statistics_title','Solving Your Business Challenges with Practical Strategies','2024-11-13 05:08:36','2024-11-13 05:08:36'),(28,'statistics_description','It’s easy to get results you want with the top-quality partnership','2024-11-13 05:09:05','2024-11-13 05:09:05'),(29,'section_text_1','SUCCESSFUL BUSINESS','2024-11-15 15:36:18','2024-11-15 15:40:27'),(30,'section_text_2','- built on working and adoptable processes','2024-11-15 15:36:43','2024-11-15 15:36:43'),(31,'service_slider_title','I am here for you and your business - every step of the way.','2024-11-18 13:41:42','2024-11-18 13:42:11'),(32,'service_slider_text','Here’s how I can help you improve various aspects of your business.','2024-11-18 13:42:45','2024-11-18 13:42:45'),(33,'service_slider_btn_text','Let’s connect','2024-11-18 13:43:33','2024-11-18 13:43:33'),(34,'service_slider_btn_url','#','2024-11-18 13:43:45','2024-11-18 13:43:45'),(35,'case_study_title','Successful Leaders Build Successful Firms','2024-11-18 15:03:56','2024-11-18 15:03:56'),(36,'client_feedback_title','Client Feedback','2024-11-20 14:46:43','2024-11-20 14:46:43'),(37,'award_title','Awards & Recognition','2024-11-20 15:29:16','2024-11-20 15:29:16'),(38,'award_description','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis hendrerit diam consectetur suscipit. Pellentesque id mauris eu tellus dapibus euismod. Praesent eu malesuada augue. Nunc massa est, tristique at nisl eu, pharetra volutpat quam.','2024-11-20 15:29:37','2024-11-20 15:29:37'),(39,'award_rating_text','Reviewed by Our Customers','2024-11-20 15:30:12','2024-11-20 15:30:12'),(40,'award_btn_text','LEARN MORE','2024-11-20 15:30:35','2024-11-20 15:30:35'),(41,'award_btn_url','#','2024-11-20 15:30:52','2024-11-20 15:30:52'),(42,'award_1','http://localhost:3000/api/img/1732116758029-award 1.png','2024-11-20 15:32:49','2024-11-20 15:32:49'),(43,'award_2','http://localhost:3000/api/img/1732116778994-award 2.png','2024-11-20 15:33:05','2024-11-20 15:33:05'),(44,'award_3','http://localhost:3000/api/img/1732116795856-award 3.png','2024-11-20 15:33:25','2024-11-20 15:33:25'),(45,'award_4','http://localhost:3000/api/img/1732116828713-award 4.png','2024-11-20 15:33:58','2024-11-20 15:43:11'),(46,'newsletter_title','Sign Up for Our Newsletters','2024-11-20 16:35:08','2024-11-20 16:35:08'),(47,'newsletter_text','Get notified of my the best blogs.','2024-11-20 16:35:24','2024-11-20 16:35:24'),(49,'about_me_title','I am Hitesh Khunt','2024-12-02 14:54:44','2024-12-02 14:54:44'),(50,'about_me_text_1','I am often described as a creative tech enthusiast.','2024-12-02 14:55:59','2024-12-02 14:55:59'),(51,'about_me_text_2','I strive to understand the true nature of technology and enjoy finding solutions that align perfectly with its unique characteristics. My greatest joy comes from solving challenging and unique problems through creative approaches. ','2024-12-02 14:56:12','2024-12-02 14:56:12'),(52,'about_me_text_3','With over 13 years in the IT industry, I\'ve had the privilege of contributing to the success and growth of many companies, helping them achieve their goals.','2024-12-02 14:56:33','2024-12-02 14:56:33'),(53,'about_me_text_4','Quality and craftsmanship are at the heart of my work. ','2024-12-02 14:56:55','2024-12-02 14:56:55'),(54,'about_me_text_5','Words like premium, scalable, reliable, and unique are often used to describe the IT solutions I deliver. ','2024-12-02 14:57:14','2024-12-02 14:57:14'),(55,'award_about_title','Achievements','2024-12-03 13:58:05','2024-12-03 13:58:05'),(56,'award_about_description','Throughout my 13-year career, I\'ve had the opportunity to make significant contributions to the IT sector. As the CEO and Managing Director of Applie Infosol Pvt. Ltd., I built a team of over 50 talented developers, and together, we earned five prestigious awards:','2024-12-03 13:58:31','2024-12-03 13:58:31'),(57,'award_about_btn_text','LEARN MORE','2024-12-03 14:00:04','2024-12-03 14:00:04'),(58,'about_award_text','I am grateful for the strong connections I\'ve established within the IT industry. These relationships have allowed me to grow and learn continuously. My network includes many esteemed IT owners and successful entrepreneurs in Gujarat as well as in Liechtenstein and Switzerland. Additionally, I have the privilege of speaking at various IT and management-related events, where I enjoy sharing my experiences and insights with others in the tech community.','2024-12-03 14:10:20','2024-12-03 14:10:20'),(59,'about_logo_title','I help owners create a business that works flawlessly','2024-12-03 14:12:29','2024-12-03 14:12:29'),(60,'blog_title','Blogs','2024-12-04 14:12:33','2024-12-04 14:12:33'),(61,'home_blog_title','Recent Blog','2024-12-04 16:51:02','2024-12-04 16:51:35');
/*!40000 ALTER TABLE `labels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `navbar`
--

DROP TABLE IF EXISTS `navbar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `navbar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `navbar`
--

LOCK TABLES `navbar` WRITE;
/*!40000 ALTER TABLE `navbar` DISABLE KEYS */;
INSERT INTO `navbar` VALUES (4,'BLOG','/blog-details','2024-10-24 09:26:48','2024-12-05 16:06:33'),(5,'PORTFOLIO','/portfolio','2024-12-05 16:07:56','2024-12-05 16:07:56'),(6,'ABOUT ME','/about-me','2024-12-05 16:08:25','2024-12-05 16:09:27'),(7,'CONTACT ME','/contact-us','2024-12-05 16:09:55','2024-12-05 16:09:55');
/*!40000 ALTER TABLE `navbar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsletter_signups`
--

DROP TABLE IF EXISTS `newsletter_signups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newsletter_signups` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `agreed` tinyint(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter_signups`
--

LOCK TABLES `newsletter_signups` WRITE;
/*!40000 ALTER TABLE `newsletter_signups` DISABLE KEYS */;
INSERT INTO `newsletter_signups` VALUES (1,'test','test@gmail.com',1,'2024-11-20 16:34:06','2024-11-20 16:34:06');
/*!40000 ALTER TABLE `newsletter_signups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolio_details`
--

DROP TABLE IF EXISTS `portfolio_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portfolio_details` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `clientName` varchar(255) NOT NULL,
  `tagline` text NOT NULL,
  `logo` varchar(255) NOT NULL,
  `introduction` text NOT NULL,
  `heroImage` varchar(255) NOT NULL,
  `projectOverviewHeading` text NOT NULL,
  `projectOverviewDescription` text NOT NULL,
  `projectOverviewImage` varchar(255) NOT NULL,
  `challengeIconImage` varchar(255) NOT NULL,
  `challengeHeading` text NOT NULL,
  `challengeDescription` text NOT NULL,
  `solutionIconImage` varchar(255) NOT NULL,
  `solutionHeading` text NOT NULL,
  `solutionDescription` text NOT NULL,
  `solutionDevelopmentHeading` text NOT NULL,
  `solutionDevelopmentDescription` text NOT NULL,
  `solutionImage` varchar(255) NOT NULL,
  `keyFeaturesHeading` text NOT NULL,
  `conclusionHeading` text NOT NULL,
  `conclusionDescription` text NOT NULL,
  `securityHeading` text NOT NULL,
  `securityDescription` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio_details`
--

LOCK TABLES `portfolio_details` WRITE;
/*!40000 ALTER TABLE `portfolio_details` DISABLE KEYS */;
INSERT INTO `portfolio_details` VALUES (2,'Holdeed','Simplifying Construction Management Workflows with SaaS Integration','1737621246939-Holdeed Logo.png','<p>Simplifying Construction Management Workflows with SaaS Integration, increasing efficiency by 248% and project completion rate by 50%</p>','1737621246939-Holdeed stats.png','Project Overview','<p>Holdeed is a comprehensive software solution designed by Applie to address the specific needs of SMEs, construction, and field service companies. It encompasses both a SaaS-based model and a mobile app, aiming to streamline various aspects of construction management. With a focus on simplifying order processing, project management, construction documentation, time management, and absence management, Holdeed offers a centralized platform for enhanced efficiency and productivity.</p>','1737621246943-Holdeed project overview.png','1737621246943-challenge image.png','The Challenge','<p>Prior to implementing Holdeed, businesses in the construction industry operated with minimal digitalization or automation, relying heavily on manual processes such as Excel spreadsheets. Tracking worker hours accurately and ensuring fair compensation posed significant challenges, particularly in an industry where precise project management is crucial. Moreover, the lack of integration between disparate software systems led to communication gaps and hindered project progress tracking.</p>','1737621246944-solution image.png','The Solution','<p>To address these challenges, Applie developed Holdeed, a cloud-based SaaS solution that centralizes essential information and operations. By automating tasks such as timesheet management and payroll calculations, Holdeed simplifies complex processes and improves accuracy. The platform also facilitates seamless communication and collaboration between project managers and field workers, enhancing overall project visibility and efficiency.</p>','Solution Development','<p>The development of Holdeed involved creating a managed and centralized automated management system to consolidate workflows and data. Utilizing technologies such as HTML, CSS, jQuery, Bootstrap, and JavaScript for the front-end, Holdeed offers a user-friendly interface and robust functionality. Yii Framework/PHP powers the backend, providing scalability and reliability. Security measures such as login security, user authorization, encryption, and SSL integration ensure data protection and confidentiality.</p>','1737621246944-Solution development.png','Key Features','Conclusion','<p>Holdeed revolutionizes construction management by providing a comprehensive solution that addresses the specific challenges faced by SMEs, construction, and field service companies. By streamlining workflows, improving communication, and enhancing project visibility, Holdeed empowers businesses to achieve greater efficiency, productivity, and success.</p>','Security','<p>Login security, user authorization, MD5 encryption, Yii CSRF token, SSL integration, database security</p>','2025-01-23 08:34:06','2025-01-27 11:33:15'),(100,'Rheingold Edelmetall AG','Minting Success with Enhanced Customer Satisfaction','1737981994095-Rheingold logo.png','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Delivering a secure, transparent, and user-friendly online platform for trading Precious Metals earning 244 million Euros in revenue and 2 lakh transaction per month.</span></p>','1737981994097-Rheingold hero image.png','Project Overview','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Their primary objective was to establish trust among customers by ensuring the meticulous safeguarding of personal valuables and data throughout transactions. Additionally, the project aimed to improve the visual appeal and user experience of both the website and the mobile application tod 	stimulate purchase intent. The project aimed to seamlessly integrate these elements to create secure, visually appealing, and user-friendly platforms catering to diverse client needs.\r\n</span></p>','1737981994101-Rheingold projectOverview image.png','1737981994103-challenge icon.png','The Challenge','<p><meta charset=\"utf-8\"></p><p>Ensuring security and transparency is paramount in precious metals trading, as customers must trust that their personal valuables and data are consistently safeguarded.</p><p><br>An effective online store must prioritise clarity, user-friendliness, and easy navigation. Additionally, an attractive design should foster customer engagement and incentivize purchases.</p><p>&nbsp;</p><p>Moreover, the online store should function as a marketplace where customers can also sell their own precious metal reserves. This necessitates a straightforward and efficient solution with clear and direct communication channels.</p><p>&nbsp;</p><p><meta charset=\"utf-8\"></p><p>Furthermore, alongside the website, there was a need for a secure mobile application that mirrored these principles, providing users with a seamless and protected experience while trading in precious metals.<br>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>','1737981994103-solution icon image.png','The Solution','<p><meta charset=\"utf-8\">We tailored a Magento store solution specifically for Rheingold, featuring a sleek and contemporary design. Whether customers were familiar with the old store or new to the site, navigating the platform is intuitive and effortless.</p><p>&nbsp;</p><p>Magento\'s modular nature allows for seamless expansion with additional functionalities and modules, ensuring quick implementation of customer requirements in the future. A pivotal aspect of the solution is the integration with OZL, which streamlines the new AI-based and fully automated customer registration process—a system also developed by Applie.</p><p>&nbsp;</p><p><meta charset=\"utf-8\"></p><p>At Rheingold Edelmetall AG, customers can explore enticing special offers, stay updated with live quotes, and rely on dependable customer support. The platform also provides comprehensive information on buying and selling precious metals.<br>&nbsp;</p><p><meta charset=\"utf-8\"></p><p>Our solution encompasses a Magento store featuring a clean and modern design, optimized for various devices. Leveraging HTML, CSS, jQuery, Bootstrap, and JavaScript for the front end, and PHP and Magento for the back end, we established a scalable and adaptable platform. Integration with OZL for automated customer registration elevates the user experience. The system operates on AWS, utilizing an Apache2 server running on Ubuntu 20.04 and Amazon RDS for the database.<br>&nbsp;</p>','Solution Development','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">We tailored a Magento store solution specifically for Rheingold, featuring a sleek and contemporary design. Whether customers were familiar with the old store or new to the site, navigating the platform is intuitive and effortless.</span><br><br><span style=\"white-space:pre-wrap;\">Magento\'s modular nature allows for seamless expansion with additional functionalities and modules, ensuring quick implementation of customer requirements in the future. A pivotal aspect of the solution is the integration with OZL, which streamlines the new AI-based and fully automated customer registration process—a system also developed by Applie.</span><br><br><span style=\"white-space:pre-wrap;\">At Rheingold Edelmetall AG, customers can explore enticing special offers, stay updated with live quotes, and rely on dependable customer support. The platform also provides comprehensive information on buying and selling precious metals.</span><br><br><span style=\"white-space:pre-wrap;\">Our solution encompasses a Magento store featuring a clean and modern design, optimized for various devices. Leveraging HTML, CSS, jQuery, Bootstrap, and JavaScript for the front end, and PHP and Magento for the back end, we established a scalable and adaptable platform. Integration with OZL for automated customer registration elevates the user experience. The system operates on AWS, utilizing an Apache2 server running on Ubuntu 20.04 and Amazon RDS for the database.</span></p>','1737981994103-solution development image.png','Key Features','Conclusion','<p>Our project for Rheingold Edelmetall AG was focused on delivering a secure, transparent, and user-friendly online platform for trading precious metals. We utilized state-of-the-art technologies and paid meticulous attention to detail to ensure the highest level of security and transparency. Our solution included a modern Magento store with an intuitive design, seamless integration with OZL for automated customer registration, and a scalable platform capable of meeting Rheingold\'s evolving needs. Post-implementation, we achieved measurable outcomes such as enhanced webshop functionality, improved onboarding efficiency, optimized system performance, increased user adoption, heightened revenue generation, and heightened customer satisfaction. We remain committed to supporting Rheingold in its continued success and evolution in the digital marketplace.</p>','Security','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Login security, user authorization, MD5 encryption, Yii CSRF token, SSL integration, database security</span></p>','2025-01-27 12:46:34','2025-01-27 12:46:34'),(104,'SAMINA','Sound Light Sleep System\'s Technological Symphony','1738924383563-samina-logo.png','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">The Samina sleep system helps you to rediscover your sound sleep. The most beneficial properties of acoustic and physical sensory stimuli. We achieved 4 hrs of daily app usage and 44 Million Euro Revenue</span></p>','1738924383563-samina-hero-image.png','Project Overview','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">The goal of the Samina Project is to offer a complete sleep solution that will enhance sleep health and well-being. The scope of the project involves the development and implementation of the Samina Sleep System, a holistic sleep solution comprising ergonomic mattresses, natural bedding materials, and innovative sleep accessories. The primary objective of the project is to offer customers a transformative sleep experience by integrating cutting-edge technology with natural elements to create an immersive sleep environment.\r\n</span></p>','1738924383570-samina-project-overview.png','1738924383574-challenge icon.png','The Challenge','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">The primary challenge encountered during the project was to create a lamp and light system that could adapt to different moods, fostering a relaxing atmosphere conducive to switching off and unwinding. Additionally, the system needed to allow users to listen to soothing music without disturbing others in the room. Incorporating selected materials to bring a natural element into the bedroom, along with state-of-the-art IoT solutions, posed another significant challenge.</span><br>&nbsp;</p>','1738924383574-solution icon image.png','The Solution','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">We tailored a Magento store solution specifically for Rheingold, featuring a sleek and contemporary design. Whether customers were familiar with the old store or new to the site, navigating the platform is intuitive and effortless.</span></p><p><br><span style=\"white-space:pre-wrap;\">Magento\'s modular nature allows for seamless expansion with additional functionalities and modules, ensuring quick implementation of customer requirements in the future. </span></p>','Solution Development','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">LED Technology Advancements:</span></p><p><br><span style=\"white-space:pre-wrap;\">Utilizing powerful LED technology ensures both longevity and energy efficiency, enhancing the user experience. LEDs offer variable light spectra, emitting different combinations of wavelengths, surpassing traditional light sources in functionality.</span></p><p><br><span style=\"white-space:pre-wrap;\">A 4000mAh lithium polymer battery enables extended music enjoyment without relying on external power sources. Incorporated speakers with an 8-ohm resistor and PCB maximize product potential.</span></p><p><br><span style=\"white-space:pre-wrap;\">\r\n</span><br>&nbsp;</p>','1738924383574-samina-solution-development.png','Key Features','Conclusion','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">In conclusion, our collaboration with Samina has been a remarkable journey marked by innovation, dedication, and tangible results. From conceptualization to execution, Applie played a pivotal role in bringing the Samina Sleeping System to life, demonstrating our expertise in software, hardware, firmware, and beyond. With our unwavering commitment to quality and excellence, we successfully developed and manufactured every component of the system, except for the pillow. Our comprehensive approach encompassed software development, hardware design, firmware optimization, and meticulous ticket management, ensuring a seamless and integrated solution. Throughout this journey, we encountered challenges, such as selecting the right materials, ensuring quiet operation, and perfecting the user experience. However, through perseverance and collaboration, we overcame these obstacles and delivered a product that exceeded expectations. Our key takeaway from this experience is the power of teamwork and innovation in creating impactful solutions that enhance people\'s lives. We are proud to have contributed to Samina\'s success and look forward to building partnerships like these in all our future endeavors.\r\n</span><br>&nbsp;</p>','Security','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Login security, user authorization, MD5 encryption, Yii CSRF token, SSL integration, database security</span></p>','2025-02-07 10:33:03','2025-02-07 10:33:03'),(105,'Peau D\'Or','Shaping Sophistication with a Hint of Modern E-commerce Touch','1738930189359-peauDor logo.png','<p>Peau D’ OR is an ecommerce website selling range of tanning and skin care products that are designed to invite you to feel even better in your skin. After designing their sales went 64.2% high and crossing 10 million Euro Revenue</p>','1738930189359-peauDor-hero-image.png','Project Overview','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Launched in February 2020, Peau d’Or presents a luxurious array of tanning and skincare products crafted to evoke the radiant glow of sun-kissed skin. We set out to create a sophisticated and elegant e-commerce platform to improve the direct-to-customer experience. The challenge was to represent the brand\'s perfect product for tanned skin in a minimalistic manner, ensuring a distraction-free shopping experience. Additionally, the website lacked modern technology and smooth navigation, which could potentially impact profits. Our team of experts collaborated to design a flawless e-commerce website that not only met the brand\'s aesthetic but also provided seamless functionality and smooth user navigation.</span><br><span style=\"white-space:pre-wrap;\">&nbsp;</span></p>','1738930189367-PeauDor-project-overview-image.png','1738930189371-solution icon image.png','The Challenge','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">The primary challenge was to design an</span><br><span style=\"white-space:pre-wrap;\">e-commerce platform that effectively showcased Peau d’Or\'s luxurious products without distractions. Smooth navigation and flawless functionality were essential to ensure a positive customer experience and prevent potential profit loss. Additionally, integrating modern technology into the website while maintaining the brand\'s aesthetic presented its challenges.</span></p>','1738930189371-solution icon image.png','Solution Development','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">To address these challenges, our team implemented a one-page checkout process, streamlining the purchasing journey and enhancing convenience for customers. Trusted payment partners and a secure payment gateway were integrated to ensure seamless and secure transactions. Using state-of-the-art technologies, we painstakingly created the website to complement Peau d\'Or\'s style while finding the ideal ratio between brightness and minimalism. This ensured that the website not only showcased the brand\'s products effectively but also provided a flawless and engaging shopping experience for customers.</span></p>','Solution Development','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">To address these challenges, our team implemented a one-page checkout process, streamlining the purchasing journey and enhancing convenience for customers. Trusted payment partners and a secure payment gateway were integrated to ensure seamless and secure transactions. Using state-of-the-art technologies, we painstakingly created the website to complement Peau d\'Or\'s style while finding the ideal ratio between brightness and minimalism. This ensured that the website not only showcased the brand\'s products effectively but also provided a flawless and engaging shopping experience for customers.</span></p>','1738930189371-PeauDor-solution-image.png','Key Features','Conclusion','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Peau d’Or\'s e-commerce platform is a testament to our commitment to excellence and innovation. By overcoming challenges and leveraging cutting-edge technologies, we have created a flawless and stylish platform that reflects the brand\'s aesthetic and provides customers with a seamless shopping experience. With features such as a one-page checkout process and trusted payment partners, Peau d’Or offers customers a secure and convenient platform to purchase luxurious skincare products.</span><br><span style=\"white-space:pre-wrap;\">&nbsp;</span></p>','Security','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Login security, user authorization, MD5 encryption, Yii CSRF token, SSL integration, database security</span></p>','2025-02-07 12:09:49','2025-02-07 12:09:49'),(106,'PRESENTA','Streamlining Bookkeeping & Accounting Operations','1738931943254-Presenta.png','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Streamlining Bookkeeping &amp; Accounting Operations</span></p>','1738931943255-presenta-hero-image.png','Project Overview','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">In 2020, Applie introduced Presenta, a groundbreaking cloud-based SaaS solution to transform the banking sector by enhancing transparency and efficiency. Presenta, a B2B model powered by artificial intelligence, offers financial institutions an optimal infrastructure to streamline operations, reduce errors, and accelerate service delivery. By leveraging cutting-edge technologies, Applie sought to redefine the financial industry landscape, providing financial institutions with advanced tools to enhance customer service and operational effectiveness.</span><br><span style=\"white-space:pre-wrap;\">&nbsp;</span></p>','1738931943257-Presenta-project-overview.png','1738931943258-challenge icon.png','The Challenge','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">The primary challenge for Applie was to seamlessly integrate artificial intelligence into Presenta\'s system. This task required overcoming complexities inherent in AI integration within a banking environment. Additionally, ensuring robust security measures to safeguard sensitive financial data and maintaining compatibility across diverse platforms posed significant challenges.</span></p>','1738931943258-solution icon image.png','The Solution','<p><meta charset=\"utf-8\"><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Taking on these obstacles head-on, Applie started a strategic planning process that divided the integration of artificial intelligence into attainable goals. Presenta effectively integrated AI-driven features like automatic document matching through rigorous development and implementation processes. This automation not only saves time for financial advisors but also enhances overall efficiency and accuracy. Presenta\'s intelligent software simplifies financial management tasks, providing clients with secure and efficient solutions for investment and spending decisions.  </span></p>','Solution Development','<p><meta charset=\"utf-8\"><meta charset=\"utf-8\"><meta charset=\"utf-8\"><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Taking on these obstacles head-on, Applie started a strategic planning process that divided the integration of artificial intelligence into attainable goals. Presenta effectively integrated AI-driven features like automatic document matching through rigorous development and implementation processes. This automation not only saves time for financial advisors but also enhances overall efficiency and accuracy. Presenta\'s intelligent software simplifies financial management tasks, providing clients with secure and efficient solutions for investment and spending decisions.  </span></p>','1738931943259-presenta-solution-image.png','Key Features','Conclusion','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Presenta signifies a noteworthy advancement in the transparency and efficiency of the banking sector. Applie has equipped financial institutions with state-of-the-art tools to improve customer service and streamline operations through the integration of artificial intelligence. With its robust feature set and advanced AI capabilities, Presenta is poised to revolutionize financial management processes, making investment and spending decisions smarter, faster, and more secure.  </span></p>','Security','<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Login security, user authorization, MD5 encryption, Yii CSRF token, SSL integration, database security</span></p>','2025-02-07 12:39:03','2025-02-07 14:44:52');
/*!40000 ALTER TABLE `portfolio_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolios`
--

DROP TABLE IF EXISTS `portfolios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portfolios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `heading` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `problem` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `solution` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `impact_1_title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `impact_1_stats` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `impact_2_title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `impact_2_stats` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `impact_3_title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `impact_3_stats` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `impact_4_title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `impact_4_stats` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolios`
--

LOCK TABLES `portfolios` WRITE;
/*!40000 ALTER TABLE `portfolios` DISABLE KEYS */;
INSERT INTO `portfolios` VALUES (2,'Rheingold Edelmetall AG','Minting Success with Enhanced Customer Satisfaction','<p>Rheingold Edelmetall AG, a precious metals trading company, faced challenges in maintaining customer satisfaction due to outdated communication and transaction processes.</p>','<p>We implemented a state-of-the-art CRM system that integrated all customer interactions and automated follow-ups, ensuring that clients received timely and personalized communication.</p>','Customer satisfaction increased by','35%','Transaction processing time reduced by','50%','Boosted sales by','20%','Generating additional revenue of','$500,000','1732198175370-Mask group.png','2024-11-21 14:09:35','2024-11-21 14:09:35'),(3,'Rheingold Edelmetall AG','Minting Success with Enhanced Customer Satisfaction','<p>Rheingold Edelmetall AG, a precious metals trading company, faced challenges in maintaining customer satisfaction due to outdated communication and transaction processes.</p>','<p>We implemented a state-of-the-art CRM system that integrated all customer interactions and automated follow-ups, ensuring that clients received timely and personalized communication.</p>','Customer satisfaction increased by','35%','Transaction processing time reduced by','50%','Boosted sales by','20%','Generating additional revenue of','$500,000','1732198175370-Mask group.png','2024-11-21 14:09:35','2024-11-21 14:09:35'),(4,'Rheingold Edelmetall AG','Minting Success with Enhanced Customer Satisfaction','<p>Rheingold Edelmetall AG, a precious metals trading company, faced challenges in maintaining customer satisfaction due to outdated communication and transaction processes.</p>','<p>We implemented a state-of-the-art CRM system that integrated all customer interactions and automated follow-ups, ensuring that clients received timely and personalized communication.</p>','Customer satisfaction increased by','35%','Transaction processing time reduced by','50%','Boosted sales by','20%','Generating additional revenue of','$500,000','1732198175370-Mask group.png','2024-11-21 14:09:35','2024-11-21 14:09:35');
/*!40000 ALTER TABLE `portfolios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemigrations`
--

DROP TABLE IF EXISTS `sequelizemigrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemigrations` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemigrations`
--

LOCK TABLES `sequelizemigrations` WRITE;
/*!40000 ALTER TABLE `sequelizemigrations` DISABLE KEYS */;
INSERT INTO `sequelizemigrations` VALUES ('01-01-create-user.ts'),('02-01-create-navbar.ts'),('03-01-create-labels.ts'),('04-01-create-brand-logo.ts'),('05-01-create-client-feedback.ts'),('06-01-create-newsletter-signup.ts'),('07-01-create-services.ts'),('08-01-create-inquiry.ts'),('09-01-create-case-study copy.ts'),('10-01-create-portfolio.ts'),('11-01-create-social-media.ts'),('12-01-create-category.ts'),('13-01-create-blog.ts'),('14-01-case-study-alter.ts'),('15-01-portfolio-alter.ts'),('16-01-label-alter.ts'),('17-01-blog-alter.ts'),('18-01-create-portfolio-detail.ts'),('19-01-create-portfolio-features.ts'),('20-01-create-technology-stack.ts'),('21-01-create-services-table.ts'),('22-01-create-services-image-table.ts');
/*!40000 ALTER TABLE `sequelizemigrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizeseeders`
--

DROP TABLE IF EXISTS `sequelizeseeders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizeseeders` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizeseeders`
--

LOCK TABLES `sequelizeseeders` WRITE;
/*!40000 ALTER TABLE `sequelizeseeders` DISABLE KEYS */;
INSERT INTO `sequelizeseeders` VALUES ('01-01-demo-user.ts'),('02-01-initial-navbar.ts');
/*!40000 ALTER TABLE `sequelizeseeders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'default icon.jpg',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Solutions Architecture','I design scalable, efficient solutions architectures, integrating technologies for seamless performance and future growth.','1737096186324-Solutions Architecture.png','2024-11-18 13:39:40','2025-01-17 06:43:06'),(2,'Technology Consulting','I provide expert technology consulting, guiding digital transformation, IT strategy development, and technology roadmapping for businesses.','1737096783843-Technology Consulting.png','2024-11-18 13:40:06','2025-01-17 06:53:03'),(3,'Fractional CTO Services','As a Fractional CTO, I provide part-time executive leadership, strategic guidance, team management, and risk mitigation.','1737096815132-Fractional CTO Services.png','2024-11-18 13:40:37','2025-01-17 06:53:35'),(5,'Expert Tech Advisory','As an Expert Tech Advisor involves offering strategic advice and insights to businesses seeking to navigate the complexities of the tech landscape.','1737701568042-Advisory.png','2025-01-24 06:52:48','2025-01-24 06:52:48'),(6,'Artificial Intelligence and  Machine Learning Consulting','With expertise in Artificial Intelligence (AI) and Machine Learning (ML), I help businesses harness the power of these advanced technologies to drive growth and innovation.','1737701696809-AI and ML.png','2025-01-24 06:54:56','2025-01-24 06:54:56');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_images_table`
--

DROP TABLE IF EXISTS `services_images_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_images_table` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `serviceImageTitle` varchar(255) NOT NULL,
  `serviceImage` varchar(255) NOT NULL,
  `serviceImageDescription` text NOT NULL,
  `serviceTypeId` int unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `serviceTypeId` (`serviceTypeId`),
  CONSTRAINT `services_images_table_ibfk_1` FOREIGN KEY (`serviceTypeId`) REFERENCES `services_table` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_images_table`
--

LOCK TABLES `services_images_table` WRITE;
/*!40000 ALTER TABLE `services_images_table` DISABLE KEYS */;
INSERT INTO `services_images_table` VALUES (4,'System Design and Integration','1738739476137-systemDesign.png','Crafting comprehensive system designs that integrate diverse technologies to create cohesive and efficient solutions.',1,'2025-02-03 09:38:51','2025-02-05 07:11:47'),(5,'Scalibility Planning','1738575860470-scalibility planning.png','Ensuring that systems are designed with scalability in mind, allowing businesses to grow without facing technical bottlenecks.',1,'2025-02-03 09:44:20','2025-02-03 09:44:20'),(6,'Performance Optimization','1738575978495-performance optimization.png','Analyzing and optimizing existing systems to enhance performance, reliability, and efficiency.',1,'2025-02-03 09:46:18','2025-02-03 09:46:18'),(7,'Digital Transformation','1738582000447-digitalTransformation.jpg','Digital Transformation',2,'2025-02-03 11:26:40','2025-02-03 11:26:40'),(8,'IT Strategy Development','1738582534052-It strategy Development.png','Crafting comprehensive IT strategies aligned with business goals, ensuring technology investments deliver maximum value.',2,'2025-02-03 11:35:34','2025-02-03 11:35:34'),(9,'Technology Road mapping','1738582953166-Technology Roadmapping.jpg','Technology Road mapping',2,'2025-02-03 11:42:33','2025-02-03 11:42:33'),(10,'Strategic Leadership','1738583270175-strategic leadership.png','Providing visionary leadership to align technology initiatives with business objectives.',3,'2025-02-03 11:47:50','2025-02-03 11:47:50'),(11,'Team Management','1738583396941-team management.png','Overseeing technical teams, fostering innovation, and ensuring high standards of performance and productivity.',3,'2025-02-03 11:49:56','2025-02-03 11:49:56'),(12,'Risk Management','1738583470935-risk management.png','Creating detailed roadmaps for technology adoption and implementation, ensuring smooth transitions and minimal disruption.',3,'2025-02-03 11:51:10','2025-02-03 11:51:10'),(13,'Innovation Consulting','1738583765714-innovation consulting.png','Guiding businesses in adopting innovative technologies to stay ahead in the market.',4,'2025-02-03 11:56:05','2025-02-03 11:56:05'),(14,'Tech Trend Analysis','1738583855665-tech trend analysis.png','Providing insights into emerging technology trends and their potential impact on the business.',4,'2025-02-03 11:57:35','2025-02-03 11:57:35'),(15,'Investment Advisory','1738584044967-investment advisory.png','Advising on technology investments, helping businesses make informed decisions to maximize ROI.',4,'2025-02-03 12:00:44','2025-02-03 12:00:44'),(16,'AI Strategy Development','1738584423631-AI strategy development.png','Crafting strategies for integrating AI into business processes to enhance efficiency and decision-making.',5,'2025-02-03 12:07:03','2025-02-03 12:07:03'),(17,'ML Model Development','1738584819825-ML model development.png','Designing and implementing machine learning models tailored to specific business needs.',5,'2025-02-03 12:13:39','2025-02-03 12:13:39'),(18,'Data Analytics','1738584907277-data analytics.png','Leveraging AI and ML to extract actionable insights from data, driving informed business decisions.',5,'2025-02-03 12:15:07','2025-02-03 12:15:07');
/*!40000 ALTER TABLE `services_images_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_table`
--

DROP TABLE IF EXISTS `services_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_table` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `serviceType` varchar(255) NOT NULL,
  `serviceDescription` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_table`
--

LOCK TABLES `services_table` WRITE;
/*!40000 ALTER TABLE `services_table` DISABLE KEYS */;
INSERT INTO `services_table` VALUES (1,'Solution Architecture','<p>I specialize in creating robust, scalable, and efficient solutions architectures tailored to meet the unique needs of each client. With over 13 years of experience in the IT industry, I have gained a deep understanding of various technologies and can design systems that integrate seamlessly, ensuring optimal performance and future scalability. My solutions architecture services include:</p>','2025-02-03 06:13:22','2025-02-04 10:09:00'),(2,'Technology Consulting','<p>My technology consulting services are built on a foundation of extensive industry knowledge and a keen eye for innovation. I provide expert guidance to businesses looking to leverage technology for competitive advantage. My consulting services include:</p>','2025-02-03 11:18:32','2025-02-04 08:54:16'),(3,'Fractional CTO Services','<p>As a Fractional Chief Technology Officer (CTO), I offer executive-level expertise on a part-time basis, providing strategic guidance and oversight without the full-time commitment. My Fractional CTO services include:</p>','2025-02-03 11:45:32','2025-02-04 08:55:01'),(4,'Expert Tech Advisory','<p>My role as an Expert Tech Advisor involves offering strategic advice and insights to businesses seeking to navigate the complexities of the tech landscape. My advisory services include:</p>','2025-02-03 11:54:46','2025-02-04 08:55:11'),(5,'Artificial Intelligence and Machine Learning Consulting','<p>With expertise in Artificial Intelligence (AI) and Machine Learning (ML), I help businesses harness the power of these advanced technologies to drive growth and innovation. My AI/ML consulting services include:</p>','2025-02-03 12:04:11','2025-02-04 08:55:20');
/*!40000 ALTER TABLE `services_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_media`
--

DROP TABLE IF EXISTS `social_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_media` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_media`
--

LOCK TABLES `social_media` WRITE;
/*!40000 ALTER TABLE `social_media` DISABLE KEYS */;
INSERT INTO `social_media` VALUES (2,'Facebook','#','1731054080363-Vector.svg','2024-11-07 05:51:48','2024-11-08 09:03:25'),(3,'Twitter','#','1731054236781-Vector (1).svg','2024-11-08 08:23:56','2024-11-08 09:03:39'),(4,'Youtube','#','1731054251130-Vector (2).svg','2024-11-08 08:24:11','2024-11-08 09:03:51'),(5,'Linkedin','#','1731054261945-Vector (3).svg','2024-11-08 08:24:21','2024-11-08 09:04:08');
/*!40000 ALTER TABLE `social_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technology_stack`
--

DROP TABLE IF EXISTS `technology_stack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technology_stack` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `technologyImage` varchar(255) NOT NULL,
  `type` enum('frontend technologies','server architecture','backend','mobile development','database','optional stack components','cache memory','') NOT NULL,
  `portfolioDetailId` int unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `portfolioDetailId` (`portfolioDetailId`),
  CONSTRAINT `technology_stack_ibfk_1` FOREIGN KEY (`portfolioDetailId`) REFERENCES `portfolio_details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technology_stack`
--

LOCK TABLES `technology_stack` WRITE;
/*!40000 ALTER TABLE `technology_stack` DISABLE KEYS */;
INSERT INTO `technology_stack` VALUES (5,'1738066183772-html logo.png','frontend technologies',2,'2025-01-28 12:09:43','2025-01-28 12:09:43'),(6,'1738066216838-javascript.png','frontend technologies',2,'2025-01-28 12:10:16','2025-01-28 12:10:16'),(7,'1738066226227-css.png','frontend technologies',2,'2025-01-28 12:10:26','2025-01-28 12:10:26'),(8,'1738066375213-backend-1.png','backend',2,'2025-01-28 12:12:55','2025-01-28 12:12:55'),(9,'1738066390763-php.png','backend',2,'2025-01-28 12:13:10','2025-01-28 12:13:10'),(10,'1738066408934-mysql.png','backend',2,'2025-01-28 12:13:28','2025-01-28 12:13:28'),(11,'1738066548273-aws.png','server architecture',2,'2025-01-28 12:15:48','2025-01-28 12:15:48'),(12,'1738066560542-apache.png','server architecture',2,'2025-01-28 12:16:00','2025-01-28 12:16:00'),(13,'1738066574969-ubuntu.png','server architecture',2,'2025-01-28 12:16:14','2025-01-28 12:16:14'),(14,'1738066611524-amazon rds.png','server architecture',2,'2025-01-28 12:16:51','2025-01-28 12:16:51'),(15,'1738597020461-android.png','mobile development',2,'2025-01-28 12:17:19','2025-02-03 15:37:00'),(16,'1738216853704-java.png','mobile development',2,'2025-01-28 12:17:27','2025-01-30 06:00:53'),(31,'1738919856481-html logo.png','frontend technologies',100,'2025-02-07 09:17:36','2025-02-07 09:17:36'),(32,'1738920104960-javascript.png','frontend technologies',100,'2025-02-07 09:21:44','2025-02-07 09:21:44'),(33,'1738920173861-css.png','frontend technologies',100,'2025-02-07 09:22:53','2025-02-07 09:22:53'),(34,'1738920342155-aws.png','server architecture',100,'2025-02-07 09:25:42','2025-02-07 09:25:42'),(35,'1738920373733-apache.png','server architecture',100,'2025-02-07 09:26:13','2025-02-07 09:26:13'),(36,'1738920416718-ubuntu.png','server architecture',100,'2025-02-07 09:26:56','2025-02-07 09:26:56'),(37,'1738920507122-amazon rds.png','server architecture',100,'2025-02-07 09:28:27','2025-02-07 09:28:27'),(38,'1738920625249-backend-1.png','backend',100,'2025-02-07 09:30:25','2025-02-07 09:30:25'),(39,'1738920680040-php.png','backend',100,'2025-02-07 09:31:20','2025-02-07 09:31:20'),(40,'1738920778158-mysql.png','backend',100,'2025-02-07 09:32:58','2025-02-07 09:32:58'),(41,'1738920856258-android.png','mobile development',100,'2025-02-07 09:34:16','2025-02-07 09:34:16'),(42,'1738920882756-java.png','mobile development',100,'2025-02-07 09:34:42','2025-02-07 09:34:42'),(43,'1738924987825-html logo.png','frontend technologies',104,'2025-02-07 10:43:07','2025-02-07 10:43:07'),(44,'1738925022060-javascript.png','frontend technologies',104,'2025-02-07 10:43:42','2025-02-07 10:43:42'),(45,'1738925042196-css.png','frontend technologies',104,'2025-02-07 10:44:02','2025-02-07 10:44:02'),(46,'1738925353140-aws.png','server architecture',104,'2025-02-07 10:49:13','2025-02-07 10:49:13'),(47,'1738925367476-apache.png','server architecture',104,'2025-02-07 10:49:27','2025-02-07 10:49:27'),(48,'1738925384417-ubuntu.png','server architecture',104,'2025-02-07 10:49:44','2025-02-07 10:49:44'),(49,'1738925402827-amazon rds.png','server architecture',104,'2025-02-07 10:50:02','2025-02-07 10:50:02'),(50,'1738925437475-backend-1.png','backend',104,'2025-02-07 10:50:37','2025-02-07 10:50:37'),(51,'1738925449253-php.png','backend',104,'2025-02-07 10:50:49','2025-02-07 10:50:49'),(52,'1738925465021-mysql.png','backend',104,'2025-02-07 10:51:05','2025-02-07 10:51:05'),(53,'1738925512475-android.png','mobile development',104,'2025-02-07 10:51:52','2025-02-07 10:51:52'),(54,'1738925529643-java.png','mobile development',104,'2025-02-07 10:52:09','2025-02-07 10:52:09'),(55,'1738930666213-html logo.png','frontend technologies',105,'2025-02-07 12:17:46','2025-02-07 12:17:46'),(56,'1738930685212-css.png','frontend technologies',105,'2025-02-07 12:18:05','2025-02-07 12:18:05'),(57,'1738930695018-jQuery.png','frontend technologies',105,'2025-02-07 12:18:15','2025-02-07 12:18:15'),(58,'1738930727945-apache.png','server architecture',105,'2025-02-07 12:18:47','2025-02-07 12:18:47'),(59,'1738930745823-Nginix.png','server architecture',105,'2025-02-07 12:19:05','2025-02-07 12:19:05'),(60,'1738930798542-Varnish-cache.png','optional stack components',105,'2025-02-07 12:19:58','2025-02-07 12:19:58'),(61,'1738931023135-Rabbit MQ.png','optional stack components',105,'2025-02-07 12:23:43','2025-02-07 12:23:43'),(62,'1738931053472-backend-1.png','backend',105,'2025-02-07 12:24:13','2025-02-07 12:24:13'),(63,'1738931077758-php.png','backend',105,'2025-02-07 12:24:37','2025-02-07 12:24:37'),(64,'1738931109959-mysql.png','database',105,'2025-02-07 12:25:09','2025-02-07 12:25:09'),(65,'1738931132784-percona-mysql.png.280x250_q85 1.png','database',105,'2025-02-07 12:25:32','2025-02-07 12:25:32'),(66,'1738931165416-redis.png','cache memory',105,'2025-02-07 12:26:05','2025-02-07 12:26:05'),(67,'1738937072723-html logo.png','frontend technologies',106,'2025-02-07 14:04:32','2025-02-07 14:04:32'),(68,'1738937088396-css.png','frontend technologies',106,'2025-02-07 14:04:48','2025-02-07 14:04:48'),(69,'1738937105853-jQuery.png','frontend technologies',106,'2025-02-07 14:05:05','2025-02-07 14:05:05'),(70,'1738937151198-apache.png','server architecture',106,'2025-02-07 14:05:51','2025-02-07 14:05:51'),(71,'1738937163717-Nginix.png','server architecture',106,'2025-02-07 14:06:03','2025-02-07 14:06:03'),(72,'1738937304173-Varnish-cache.png','optional stack components',106,'2025-02-07 14:08:24','2025-02-07 14:08:24'),(73,'1738937550962-Rabbit MQ.png','optional stack components',106,'2025-02-07 14:09:06','2025-02-07 14:12:30'),(74,'1738937615721-backend-1.png','backend',106,'2025-02-07 14:13:35','2025-02-07 14:13:35'),(75,'1738937636109-php.png','backend',106,'2025-02-07 14:13:56','2025-02-07 14:13:56'),(76,'1738937671454-mysql.png','database',106,'2025-02-07 14:14:31','2025-02-07 14:14:31'),(77,'1738937695233-percona-mysql.png.280x250_q85 1.png','database',106,'2025-02-07 14:14:55','2025-02-07 14:14:55'),(78,'1738937737596-redis.png','cache memory',106,'2025-02-07 14:15:37','2025-02-07 14:15:37');
/*!40000 ALTER TABLE `technology_stack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','User','admin@example.com','$2a$04$2Cuo0uWjmaJ32wjRct4cReqGTut0nsX.9uripUjukZ99ufB3vbYFq','admin','2024-10-24 09:26:48','2024-10-24 09:26:48');
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

-- Dump completed on 2025-02-14 12:22:02

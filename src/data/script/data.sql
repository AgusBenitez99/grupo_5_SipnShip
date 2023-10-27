CREATE DATABASE  IF NOT EXISTS `sipnship_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sipnship_db`;
-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: sipnship_db
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

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
-- Dumping data for table `Addresses`
--

LOCK TABLES `Addresses` WRITE;
/*!40000 ALTER TABLE `Addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `Addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Brands`
--

LOCK TABLES `Brands` WRITE;
/*!40000 ALTER TABLE `Brands` DISABLE KEYS */;
/*!40000 ALTER TABLE `Brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Carts`
--

LOCK TABLES `Carts` WRITE;
/*!40000 ALTER TABLE `Carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Vino','2023-10-24 22:40:50','2023-10-24 22:40:50'),(2,'Licor','2023-10-24 22:40:50','2023-10-24 22:40:50'),(3,'Aperitivo','2023-10-24 22:40:50','2023-10-24 22:40:50'),(4,'Cerveza','2023-10-24 22:40:50','2023-10-24 22:40:50'),(5,'Whisky','2023-10-24 22:40:50','2023-10-24 22:40:50'),(6,'Gin','2023-10-24 22:40:50','2023-10-24 22:40:50'),(7,'Vodka','2023-10-24 22:40:50','2023-10-24 22:40:50'),(8,'Ron','2023-10-24 22:40:50','2023-10-24 22:40:50'),(9,'Tequila','2023-10-24 22:40:50','2023-10-24 22:40:50'),(10,'Espumantes','2023-10-24 22:40:50','2023-10-24 22:40:50');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
/*!40000 ALTER TABLE `Images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Johnnie W. Gold Label','Johnnie Walker Gold Label Reserve es la mezcla perfecta para una celebración indulgente. Lujoso, cremoso y con notas de miel, es un gran tributo a la unión armoniosa entre los whiskies de Speyside y Highland con vestigios de madera ahumada de la costa oeste. Johnnie Walker Gold Label Reserve está hecho para compartir esas noches inolvidables con amigos increíbles.',26800,'750 ml','1692577099081_products_.jpg',20,5,NULL,2,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(2,'Jack Daniel\'s Old No. 7 Estados Unidos','Suavizado gota a gota a través de tres metros de carbón de arce de azúcar, tras lo cual es madurado en barriles hechos a mano por nosotros. Y nuestro Tennessee Whiskey no sigue un calendario. Está listo cuando los catadores lo dicen. Juzgamos por su apariencia. Por su aroma. Y, por supuesto, por su sabor. Así lo hacía Jack Daniel en persona un siglo atrás. Y así lo seguimos haciendo hoy.',18400,'750 ml','1692577399921_products_.jpg',0,5,NULL,1,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(3,'Gin Aconcagua Handcrafted London Dry','Un Gin hecho a mano en Buenos Aires, Argentina. La esencia de este Gin es extraída a partir de 7 botánicos: Bayas de Enebro, Semillas de Coriandro, Raíz de Angelica, Raíz de Regaliz, Almendra, Cassia, Cáscara de Limon. Gracias a un meticuluso proceso de maceración y destilación en alambique de cobre se obtiene este Gin premium Aconcagua.',5400,'750 ml','1692577923953_products_.jpg',0,6,NULL,4,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(4,'Bombay Sapphire London Dry','Bombay Sapphire es un gran clásico que sigue siendo la preferida de muchos amantes de la ginebra, presenta un color cristal claro. Hecho a base de agua, alcohol, 10 esencias de hierbas, flores y raíces, pimienta blanca, almendras españolas y regaliz chino. Presenta aromas con notas cítricas y frescas de limón junto con un marcado carácter de enebro y un fondo ligeramente terroso.',12300,'750 ml','1692578048169_products_.jpg',0,6,NULL,1,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(5,'Cerveza Corona','Disfrutar de una Corona es algo más que eso. Es disfrutar de su ritual y de todo lo que te rodea en ese instante para convertir un momento cualquiera en algo extraordinario.',890,'330 ml','1692578924225_products_.webp',25,4,NULL,2,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(6,'Absenta','Un licor de alta calidad que te transportará a un mundo de sabores y sensaciones inigualables. Esta botella de 750ml es perfecta para compartir con amigos y familiares en ocasiones especiales o simplemente para disfrutar de una bebida diferente en la comodidad de tu hogar.',52000,'750 ml','1694205547607_products_.jpg',0,2,NULL,4,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(7,'Fernet Branca','Colores, aromas, sabores y… ¡poderes! La receta de Fernet-Branca es un viaje especial entre las 27 hierbas, raíces y especias de su extraordinaria fórmula secreta e inimitable. Cada hierba es un universo, una experiencia, un descubrimiento. Ideal para comar con Coca',4600,'750 ml','1694205727046_products_.jpeg',0,3,NULL,3,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(8,'Gancia Americano','Americano Gancia es un aperitivo que se caracteriza por la presencia de sabores herbáceos y cítricos que se combinan con los del vino blanco y el alcohol. El sabor amargo de las hierbas se mezcla con el dulzor del azúcar logrando una bebida amable, agradable de beber, equilibrada y de gran personalidad. Probalo con Sprite',2700,'750 ml','1694384688838_products_.jpg',15,3,NULL,3,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(9,'Licor Amarula','Disfruta de un exquisito Licor Amarula de 750ml, una deliciosa crema de licor originaria de Sudáfrica. Con un 17% de graduación alcohólica, Amarula te ofrece una experiencia única y sofisticada en cada sorbo. Su sabor distintivo proviene de la fruta del árbol de marula, que le da un toque afrutado y cremoso, ideal para regalar o para deleitar a tus invitados en cualquier ocasión. No esperes más para probar esta delicia africana y sumarla a tu colección de licores.',15000,'375 ml','1696019484848_products_.jpg',0,2,NULL,1,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(10,'Tequila Jose Cuervo Especial gold dorado','Es considerado uno de los mejores tequilas de México, este reposado pasa en promedio 6 meses en barricas de roble blanco, tiene un aroma a agave cocido, toques frutales y herbales, con notas de aceituna. ',12500,'750 ml','1696021224480_products_.jpg',35,9,NULL,2,NULL,'2023-10-24 22:40:50','2023-10-24 22:40:50');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Rols`
--

LOCK TABLES `Rols` WRITE;
/*!40000 ALTER TABLE `Rols` DISABLE KEYS */;
INSERT INTO `Rols` VALUES (1,'Admin','2023-10-24 22:40:50','2023-10-24 22:40:50'),(2,'Usuario','2023-10-24 22:40:50','2023-10-24 22:40:50');
/*!40000 ALTER TABLE `Rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Sections`
--

LOCK TABLES `Sections` WRITE;
/*!40000 ALTER TABLE `Sections` DISABLE KEYS */;
INSERT INTO `Sections` VALUES (1,'Novedades','2023-10-24 22:40:50','2023-10-24 22:40:50'),(2,'Ofertas','2023-10-24 22:40:50','2023-10-24 22:40:50'),(3,'Combos','2023-10-24 22:40:50','2023-10-24 22:40:50'),(4,'Populares','2023-10-24 22:40:50','2023-10-24 22:40:50');
/*!40000 ALTER TABLE `Sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20231014134905-create-section.js'),('20231014135535-create-category.js'),('20231014135636-create-brand.js'),('20231014140126-create-product.js'),('20231014140345-create-image.js'),('20231014141406-create-rol.js'),('20231014141407-create-user.js'),('20231014141408-create-address.js'),('20231014141409-create-order.js'),('20231014141500-create-cart.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Agustin','Benitez','1999-01-18',NULL,'abenitez@gmail.com','$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',1,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(2,'Rodrigo','Alvarez','1995-03-08',NULL,'ralvarez@gmail.com','$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',1,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(3,'Gonzalo','Armoa','1992-06-22',NULL,'garmoa@gmail.com','$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',1,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(4,'Mauro','Bustos','1990-05-05',NULL,'mbustos@gmail.com','$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',1,'2023-10-24 22:40:50','2023-10-24 22:40:50'),(5,'User Name','User lastName','2020-02-20',NULL,'user@gmail.com','$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',2,'2023-10-24 22:40:50','2023-10-24 22:40:50');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-24 20:21:58

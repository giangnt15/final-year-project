-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bookstore@dev
-- ------------------------------------------------------
-- Server version	5.7.28

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
-- Table structure for table `Author`
--

DROP TABLE IF EXISTS `Author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Author` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `realName` mediumtext COLLATE utf8mb4_unicode_ci,
  `pseudonym` mediumtext COLLATE utf8mb4_unicode_ci,
  `image` mediumtext COLLATE utf8mb4_unicode_ci,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Author`
--

LOCK TABLES `Author` WRITE;
/*!40000 ALTER TABLE `Author` DISABLE KEYS */;
INSERT INTO `Author` VALUES ('ck5gxohh700fi0718mek2vxpr','Arthur Conan Doyle','Arthur Conan Doyle','https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Conan_doyle.jpg/220px-Conan_doyle.jpg','Sir Arthur Ignatius Conan Doyle KStJ DL (22 May 1859 – 7 July 1930) was a British writer, who created the character Sherlock Holmes. Originally a physician, in 1887 he published A Study in Scarlet, the first of four novels and more than fifty short stories about Holmes and Dr. Watson. The Sherlock Holmes stories are generally considered milestones in the field of crime fiction.','2020-01-16 16:13:42.139','2020-01-16 16:13:42.139'),('ck5idf9m200oi07184p6tjusi','Nguyễn Nhật Ánh','Nguyễn Nhật Ánh',NULL,NULL,'2020-01-17 16:22:12.074','2020-01-17 16:22:12.074'),('ck63u0c2100xk0818x0h4eucx','John Ronald Reuel Tolkien','J.R.R. Tolkien','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tolkien_1916.jpg/220px-Tolkien_1916.jpg',NULL,'2020-02-01 16:49:38.568','2020-02-01 16:49:38.568'),('ck63u1d1e00yb0818y19izlrd','Alexandre Dumas','Alexandre Dumas','https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Alexander_Dumas_p%C3%A8re_par_Nadar_-_Google_Art_Project.jpg/220px-Alexander_Dumas_p%C3%A8re_par_Nadar_-_Google_Art_Project.jpg',NULL,'2020-02-01 16:50:26.498','2020-02-01 16:50:26.498'),('ck63u2hp300z40818867kinak','Yann Martel','Yann Martel','https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Yann_martel_2007-10-25_Seattle_WA_USA.jpg/220px-Yann_martel_2007-10-25_Seattle_WA_USA.jpg',NULL,'2020-02-01 16:51:19.190','2020-02-01 16:51:19.190'),('ck63u3qcq010008183prnvtty','Harper Lee','Harper Lee','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Photo_portrait_of_Harper_Lee_%28To_Kill_a_Mockingbird_dust_jacket%2C_1960%29.jpg/220px-Photo_portrait_of_Harper_Lee_%28To_Kill_a_Mockingbird_dust_jacket%2C_1960%29.jpg',NULL,'2020-02-01 16:52:17.066','2020-02-01 16:52:17.066'),('ck63u4eph010j0818hi0etotr','George Orwell','George Orwell','https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/220px-George_Orwell_press_photo.jpg',NULL,'2020-02-01 16:52:48.629','2020-02-01 16:52:48.629'),('ck63u66uh011v0818aca6fw43','Trang Hạ','Trang Hạ','https://toplist.vn/images/800px/nha-van-noi-tieng-nhat-viet-nam-16397.jpg',NULL,'2020-02-01 16:54:11.753','2020-02-01 16:54:11.753'),('ck63u72ev012j08183qlulxfm','Trần Hữu Tri','Nam Cao','https://upload.wikimedia.org/wikipedia/commons/a/a2/Namcao.jpg',NULL,'2020-02-01 16:54:52.662','2020-02-01 16:54:52.662'),('ck63u9iqr01440818gw6b7zla','Vũ Trọng Phụng','Vũ Trọng Phụng','https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vu_Trong_Phung.jpg/200px-Vu_Trong_Phung.jpg',NULL,'2020-02-01 16:56:47.138','2020-02-01 16:56:47.138'),('ck63ubsn5015m0818fcpm7kz5','Ngô Tất Tố','Ngô Tất Tố','https://upload.wikimedia.org/wikipedia/vi/thumb/9/92/NgoTatTo.jpg/175px-NgoTatTo.jpg',NULL,'2020-02-01 16:58:33.281','2020-02-01 16:58:33.281'),('ck63udpwv016v0818nc244vgf','Nguyễn Công Hoan','Nguyễn Công Hoan','https://upload.wikimedia.org/wikipedia/vi/2/28/Nguyen_Cong_Hoan.jpg',NULL,'2020-02-01 17:00:03.055','2020-02-01 17:00:03.055'),('ck64w1x4i03fy0818rydsej7c','William Shakespeare','William Shakespeare','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg',NULL,'2020-02-02 10:34:37.938','2020-02-02 10:34:37.938');
/*!40000 ALTER TABLE `Author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book`
--

DROP TABLE IF EXISTS `Book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Book` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `title` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `isbn` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `format` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dimensions` mediumtext COLLATE utf8mb4_unicode_ci,
  `publishedDate` datetime(3) DEFAULT NULL,
  `availableCopies` int(11) NOT NULL,
  `basePrice` decimal(65,30) NOT NULL,
  `pages` int(11) DEFAULT NULL,
  `thumbnail` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` mediumtext COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `publisher` char(25) CHARACTER SET utf8 DEFAULT NULL,
  `translator` mediumtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `publisher` (`publisher`),
  CONSTRAINT `Book_ibfk_1` FOREIGN KEY (`publisher`) REFERENCES `Publisher` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
INSERT INTO `Book` VALUES ('ck5gy8ykf00h907187dx089au','SHERLOCK HOLMES TOÀN TẬP - BỘ 3 CUỐN - BÌA MỀM','<div id=\'desc_content\' class=\'std\' style=\'overflow: hidden;\'> <p style=\'text-align: justify;\'>“Tên tôi là Sherlock Holmes. Công việc của tôi là tìm hiểu những gì mà người khác không biết…”</p><p style=\'text-align: justify;\'>Đối với các độc giả yêu thích dòng văn trinh thám nói riêng cũng như những người yêu sách trên toàn thế giới nói chung thì không phải nói nhiều về sức hút của hai cái tên: nhà văn Conan Doyle và “đứa con tinh thần” của cả cuộc đời ông – Sherlock Holmes.</p><p style=\'text-align: justify;\'>Nhân vật Sherlock Holmes từ lâu đã trở thành nguồn cảm hứng cho hàng trăm, hàng ngàn tác phẩm ở nhiều loại hình nghệ thuật khác: từ âm nhạc, ca kịch đến điện ảnh… Bộ sách&nbsp;<strong><em>Sherlock Holmes toàn tập (boxset trọn bộ 3 tập)</em></strong>&nbsp;một lần nữa mang đến cho người đọc cơ hội được nhìn ngắm, ngưỡng mộ và đánh giá nhân vật độc đáo của nhà văn tài năng Conan Doyle. Chân dung cuộc đời, sự nghiệp và nhân cách của Sherlock Holmes chưa bao giờ được tái hiện chân thực, đầy đủ và sống động đến thế… Chỉ từ một giọt nước, người giỏi suy luận có thể đoán ra rất nhiều chuyện liên quan đến một thác nước hay một đại dương dù họ chưa bao giờ tận mắt nhìn thấy chúng. Như vậy, cuộc sống là một chuỗi mắt xích rộng lớn nhất của nó, nếu ta biết được một mắt xích. Như tất cả mọi khoa học khác, “suy đoán và phân tích” là một khoa học mà ta chỉ có thể làm chủ nó sau một quá trình nghiên cứu dài lâu, bền bỉ.</p><p style=\'text-align: justify;\'>Người mới đi vào lĩnh vực này nên bắt đầu bằng những vấn đề sơ đẳng: gặp bất kỳ ai, chỉ bằng vào sự quan sát, hãy cố tìm hiểu tiểu sử, nghề nghiệp hay thói quen của người ấy. Tuy có vẻ ấu trĩ nhưng thực ra sự thật này được rèn giũa các khả năng quan sát của ta và nó dạy cho ta biết cần phải nhìn thẳng vào đâu và phải tìm kiếm cái gì. Móng tay, những vết chai ở ngón trỏ và ngón cái, ống tay áo, đầu gối quần, dáng đi, cách đứng đều là những thứ nói lên nghề nghiệp của một con người…</p><div style=\'clear: both;\'></div></div>','8935095627899','PaperBack','13.5 x 20.5','2019-03-02 00:00:00.000',1000,345000.000000000000000000000000000000,1560,'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/sherlock-holmes--toan-tap-bia.jpg','[\'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/sherlock-holmes--toan-tap-bia.jpg\',\'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_2134.jpg\']','2020-01-16 16:29:37.403','2020-01-17 15:36:05.102','ck5gxxw4x00g80718dmpkt93t',NULL),('ck5jkknga00r60718vo4vfrlt','SHERLOCK HOLMES TOÀN TẬP - BỘ 3 CUỐN','<div id=\'desc_content\' class=\'std\' style=\'overflow: hidden;\'> <p style=\'text-align: justify;\'>“Tên tôi là Sherlock Holmes. Công việc của tôi là tìm hiểu những gì mà người khác không biết…”</p><p style=\'text-align: justify;\'>Đối với các độc giả yêu thích dòng văn trinh thám nói riêng cũng như những người yêu sách trên toàn thế giới nói chung thì không phải nói nhiều về sức hút của hai cái tên: nhà văn Conan Doyle và “đứa con tinh thần” của cả cuộc đời ông – Sherlock Holmes.</p><p style=\'text-align: justify;\'>Nhân vật Sherlock Holmes từ lâu đã trở thành nguồn cảm hứng cho hàng trăm, hàng ngàn tác phẩm ở nhiều loại hình nghệ thuật khác: từ âm nhạc, ca kịch đến điện ảnh… Bộ sách&nbsp;<strong><em>Sherlock Holmes toàn tập (boxset trọn bộ 3 tập)</em></strong>&nbsp;một lần nữa mang đến cho người đọc cơ hội được nhìn ngắm, ngưỡng mộ và đánh giá nhân vật độc đáo của nhà văn tài năng Conan Doyle. Chân dung cuộc đời, sự nghiệp và nhân cách của Sherlock Holmes chưa bao giờ được tái hiện chân thực, đầy đủ và sống động đến thế… Chỉ từ một giọt nước, người giỏi suy luận có thể đoán ra rất nhiều chuyện liên quan đến một thác nước hay một đại dương dù họ chưa bao giờ tận mắt nhìn thấy chúng. Như vậy, cuộc sống là một chuỗi mắt xích rộng lớn nhất của nó, nếu ta biết được một mắt xích. Như tất cả mọi khoa học khác, “suy đoán và phân tích” là một khoa học mà ta chỉ có thể làm chủ nó sau một quá trình nghiên cứu dài lâu, bền bỉ.</p><p style=\'text-align: justify;\'>Người mới đi vào lĩnh vực này nên bắt đầu bằng những vấn đề sơ đẳng: gặp bất kỳ ai, chỉ bằng vào sự quan sát, hãy cố tìm hiểu tiểu sử, nghề nghiệp hay thói quen của người ấy. Tuy có vẻ ấu trĩ nhưng thực ra sự thật này được rèn giũa các khả năng quan sát của ta và nó dạy cho ta biết cần phải nhìn thẳng vào đâu và phải tìm kiếm cái gì. Móng tay, những vết chai ở ngón trỏ và ngón cái, ống tay áo, đầu gối quần, dáng đi, cách đứng đều là những thứ nói lên nghề nghiệp của một con người…</p><div style=\'clear: both;\'></div></div>','8935095627899','PaperBack','13.5 x 20.5','2019-03-02 00:00:00.000',1000,345000.000000000000000000000000000000,1560,'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/sherlock-holmes--toan-tap-bia.jpg','[\'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/sherlock-holmes--toan-tap-bia.jpg\',\'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_2134.jpg\']','2020-01-18 12:30:06.777','2020-01-18 12:30:06.777','ck5gxxw4x00g80718dmpkt93t',NULL),('ck5khvcd900360818j00s3aoe','MẮT BIẾC','<div id=\'desc_content\' class=\'std\' style=\'overflow: hidden;\'> <p style=\'text-align: justify;\'><em><strong>Mắt biếc</strong></em> - đôi mắt đẹp nhưng đượm buồn. Đôi mắt của sự ngây thơ, trong sáng nhưng lại xa xăm, ẩn chứa đâu đó những giọt lệ như sắp tuôn tràn. Đôi mắt của cả một cuộc đời đau khổ.</p><p style=\'text-align: justify;\'>Sinh ra và lớn lên trong một ngôi làng cổ lỗ, nghèo nàn nơi phần cong của dải đất hình chữ S, Ngạn lớn lên cùng Hà Lan, cô bạn hàng xóm có một cái tên rất lạ và một đôi mắt đẹp lạ thường - đôi mắt biếc. Họ cùng học, cùng vui chơi, cùng lớn lên. Trong họ dần dần chớm nở một tình yêu lặng thầm dành cho nhau mà không dám tỏ bày. Để rồi khi lớn lên, khi cả hai cùng rời bỏ làng quê của mình để lên thành phố tiếp tục giấc mơ, ở nơi phồn hoa đô thị ấy, họ đã rẽ theo hai ngả đời. Một người vẫn đợi đó nhưng một người đã đi theo phương khác, hướng về nhau nhưng lại mãi không thuộc về cho nhau.</p><p style=\'text-align: justify;\'><em>\'Tôi không thể bắt Hà Lan phải giống tôi.</em></p><p style=\'text-align: justify;\'><em>Tôi khác. Không ai bắt tôi phải hoài vọng kỷ niệm. Không ai bắt tôi phải nhớ da diết cái làng nhỏ xa xăm của mình mỗi khi chiều xuống. Không ai bắt tôi đêm nào cũng phải mơ thấy bóng trăng tuổi thơ treo lơ lửng trên đường làng và rơi từng giọt vàng xuống giàn hoa thiên lý. Những điều đó xảy đến một cách tự nhiên, cũng giống như hồi học lớp chín, một hôm nhìn vào mắt Hà Lan, lần đầu tiên tôi cảm thấy lòng mình dậy sóng. Mà chẳng hiểu vì sao.\'</em></p><p style=\'text-align: justify;\'>Qua những đồi sim, cây thị, những giàn thiên lý, đắm mình trong dòng chảy của thời gian và tâm trạng của chính Ngạn, xuyên suốt tập truyện dài Mắt biếc là cả một nỗi buồn man mác kéo dài, một nỗi tiếc nhớ, một nỗi lòng đau đáu của chính Ngạn về những kỷ niệm một thời học trò thơ mộng nơi làng Đo Đo nhỏ nghèo nàn, nơi những kỷ niệm đẹp nay chỉ còn lại những hoài niệm xa xăm của một thời đã qua.</p><p style=\'text-align: justify;\'>Cảnh vẫn còn đó nhưng mắt biếc của năm xưa nay đâu...</p><div style=\'clear: both;\'></div></div>','8934974122753','PaperBack','13.5 x 20.5 x 350(g)','2017-01-02 00:00:00.000',1000,48000.000000000000000000000000000000,350,'https://salt.tikicdn.com/cache/550x550/ts/product/d5/da/d5/14ccdc6275de25812335da73cb49ab2c.jpg','[\'https://salt.tikicdn.com/cache/550x550/ts/product/d5/da/d5/14ccdc6275de25812335da73cb49ab2c.jpg\',\'\']','2020-01-19 04:02:12.942','2020-01-19 04:02:12.942','ck5khrsie00250818n2jqwroi',NULL),('ck64sn4oh01lo0818qta5k6sn','The Hobbit (Bìa mềm)','Bilbo Baggins là một hobbit điển hình. Anh chàng chỉ thấy thú nhất khi được ngồi bên lò sưởi mà hút tẩu, uống bia, chờ đến giờ ăn, và đừng hòng có chuyện tham gia chuyến mạo hiểm nào hay làm điều gì bất ngờ. Nhưng Bilbo không được yên, chẳng bao lâu sẽ có một lão phù thủy tên Gandalf cùng mười ba chú lùn xuất hiện ở ngưỡng cửa hang hobbit tiện nghi của chàng, và chưa kịp vớ vội mũ mão với khăn tay, Bilbo đã bị cuốn vào một cuộc phiêu lưu đầy rẫy hiểm nguy để giành lại kho vàng của người lùn vốn từ lâu đã chìm trong quên lãng….','978-0547928227','PaperBack','14 x 2.1 x 21 cm','2017-11-02 00:00:00.000',1000,95000.000000000000000000000000000000,300,'https://bookbuy.vn/Res/Images/Product/anh-chang-hobbit_4024_2951.jpg','[\'https://bookbuy.vn/Res/Images/Product/anh-chang-hobbit_4024_2951.jpg\']','2020-02-02 08:59:09.040','2020-02-02 08:59:09.040','ck64sfefz01kv08186vfcahz4','Nguyên Tâm'),('ck64te7dc01ti0818jxp9ik97','Cuộc Đời Của Pi (Tái Bản 2019)','<h2><strong>Cuộc Đời Của Pi (T&aacute;i Bản 2019)</strong></h2><p>&nbsp;</p><p>&nbsp;</p><p><em>&quot;Mọi việc ở đời c&oacute; bao giờ diễn ra như ta vẫn tưởng, nhưng biết l&agrave;m sao. Cuộc đời đem cho ta c&aacute;i g&igrave; th&igrave; ta phải nhận c&aacute;i đ&oacute; v&agrave; chỉ c&ograve;n c&aacute;ch l&agrave;m cho ch&uacute;ng tốt đẹp nhất m&agrave; th&ocirc;i.&quot;</em></p><p>&nbsp;</p><p><em><strong>Cuộc đời của Pi</strong></em>&nbsp;mở đầu với lời ch&agrave;o ấn tượng của t&aacute;c giả, Yan Martel v&agrave; h&agrave;nh tr&igrave;nh tưởng như bế tắc khi &ocirc;ng m&ograve; mẫm đi t&igrave;m một c&acirc;u chuyện cho sự nghiệp của m&igrave;nh. Lời ch&agrave;o ngắn ngủi ấy gi&uacute;p người đọc h&igrave;nh dung được ho&agrave;n cảnh ra đời của cuốn s&aacute;ch v&agrave; chẳng cần thắc mắc g&igrave; nhiều đến bối cảnh của c&acirc;u chuyện. V&agrave; như thế, một Ấn Độ từ những năm 60, 70 của thế kỷ trước sống dậy c&ugrave;ng Pi, c&ugrave;ng vườn th&uacute; Poddicherry v&agrave; c&ugrave;ng những ng&agrave;y thơ ấu rối rắm v&agrave; kỳ lạ.</p><p>&nbsp;</p><p>Piscine Molitor Patel, hay bị gọi nhầm th&agrave;nh Pissing cho đến khi cậu tự đặt cho m&igrave;nh biệt danh Pi - con số 3,14 huyền thoại. Ngẫu nhi&ecirc;n thay, c&aacute;i t&ecirc;n ấy c&ugrave;ng những biến cố sau n&agrave;y đ&atilde; biến cuộc đời Pi trở th&agrave;nh huyền thoại. M&agrave; ngay cả nếu kh&ocirc;ng phải huyền thoại th&igrave; Pi đ&atilde; l&agrave; một cậu b&eacute; kỳ lạ, đứa trẻ lớn l&ecirc;n c&ugrave;ng những người bạn trong vườn th&uacute; v&agrave; c&oacute; niềm tin mạnh mẽ v&agrave;o Thượng đế. Chắc hẳn tr&ecirc;n thế giới n&agrave;y, Pi l&agrave; cậu b&eacute; duy nhất theo đến ba t&ocirc;n gi&aacute;o: Hindu, đạo Hồi v&agrave; đạo Cơ đốc. Trong con người Pi, t&ocirc;n gi&aacute;o cũng như d&acirc;n tộc, như quốc tịch v&agrave; nếu như ch&uacute;ng ta đều t&ocirc;n thờ Thượng đế th&igrave; tại sao lại kh&ocirc;ng thể tin theo nhiều đạo.</p><p>&nbsp;</p><p>Gandhi đ&atilde; dạy, mọi t&iacute;n ngưỡng đều l&agrave; ch&acirc;n l&yacute;. T&ocirc;n gi&aacute;o l&agrave; để gi&uacute;p ch&uacute;ng ta giữ được nh&acirc;n phẩm của m&igrave;nh chứ kh&ocirc;ng phải để hạ nhục n&oacute;.</p><p>&nbsp;</p><p>Sự thật đ&atilde; chứng minh rằng ch&iacute;nh niềm tin t&ocirc;n gi&aacute;o c&oacute; phần kỳ dị trong mắt người kh&aacute;c ấy của Pi đ&atilde; gi&uacute;p cậu sống s&oacute;t v&agrave; tồn tại m&agrave; vẫn giữ được sự tỉnh t&aacute;o, th&ocirc;ng minh v&agrave; cứng rắn sau biến cố tưởng như c&oacute; thể vắt kiệt mọi sinh mạng sống.</p><p>&nbsp;</p><p>Piscine Molitor Patel, t&ecirc;n thường gọi l&agrave; Pi, quốc tịch Ấn Độ, l&agrave; người sống s&oacute;t duy nhất trong vụ đắm t&agrave;u Tsimtsum ng&agrave;y 2 th&aacute;ng 7 năm 1977, đ&atilde; l&ecirc;nh đ&ecirc;nh tr&ecirc;n biển suốt 227 ng&agrave;y với xuồng cứu hộ v&agrave; một con hổ Bengal t&ecirc;n l&agrave; Richard Parker. N&oacute;i như Ravi - anh trai của Pi, th&igrave; l&agrave; &quot;Phi&ecirc;u lưu đang vẫy gọi&quot;, chỉ c&oacute; điều 227 ng&agrave;y phi&ecirc;u lưu n&agrave;y cũng l&agrave; 227 ng&agrave;y đấu tranh v&agrave; gi&agrave;nh giật sự sống tr&ecirc;n bề mặt m&ecirc;nh m&ocirc;ng của Th&aacute;i B&igrave;nh Dương.</p><p>&nbsp;</p><p><em><strong>Cuộc Đời Của Pi</strong></em>&nbsp;l&agrave; một cuốn s&aacute;ch nhỏ, kh&ocirc;ng qu&aacute; d&agrave;y v&agrave; kh&ocirc;ng nổi bật với b&igrave;a s&aacute;ch m&agrave;u xanh biển m&ecirc;nh m&ocirc;ng c&oacute; đ&agrave;n c&aacute; l&agrave;m nền cho chiếc xuồng cứu hộ. Pi v&agrave; Richard Parker nằm tr&ecirc;n hai đầu của chiếc xuồng ấy, lặng lẽ v&agrave; tuyệt vọng với c&aacute;i chết r&igrave;nh rập quanh m&igrave;nh.</p><p>&nbsp;</p><p>&quot;L&iacute; do sự chết cứ b&aacute;m riết lấy sự sống như vậy ko phải l&agrave; v&igrave; nhu cầu sinh học - đ&oacute; l&agrave; sự ghen tị. Sự sống đẹp đến nỗi sự chết đ&atilde; phải l&ograve;ng n&oacute;, một mối t&igrave;nh tư vị đầy ghen tu&ocirc;ng quắp chặt lấy bất cứ thứ g&igrave; n&oacute; c&oacute; thể động đến.&quot;</p><p>&nbsp;</p><p>Pi v&agrave; Richard Parker tồn tại b&ecirc;n nhau, duy tr&igrave; sự sống cho nhau v&agrave; khuất phục nhau. Pi cho Richard Parker đồ ăn, thức uống để sống. Richard Parker cho Pi l&yacute; do để kh&ocirc;ng bu&ocirc;ng m&igrave;nh tuyệt vọng nhưng cũng chẳng hề hi vọng (thật kh&oacute; để giữ cho m&igrave;nh hy vọng sau chuỗi ng&agrave;y d&agrave;i c&ocirc; đơn tr&ecirc;n biển cả mờ mịt). Cứ thế, cặp đ&ocirc;i đồng h&agrave;nh lăn qua lăn lại giữa lằn ranh sống chết, quật qua quăng lại giữa b&atilde;o biển v&agrave; những cơn đ&oacute;i mặn ch&aacute;t... để trở về v&agrave; chia ly kh&ocirc;ng một lời từ biệt.</p><p>&nbsp;</p><p><em><strong>Cuộc Đời Của Pi</strong></em>, hay đ&uacute;ng hơn, l&agrave; c&acirc;u chuyện Pi Patel tự thuật về cuộc đời m&igrave;nh v&agrave; Yan Martel l&agrave; người ghi lại cảm x&uacute;c, h&agrave;nh động, kh&aacute;t vọng sống,... Trong c&acirc;u chuyện ấy kh&ocirc;ng c&oacute; ph&eacute;p lạ, kh&ocirc;ng c&oacute; điều kỳ diệu, Pi chỉ c&oacute; đức tin v&agrave; lời cầu nguyện để giữ lại c&aacute;i phần người cho ch&iacute;nh m&igrave;nh.</p><p>&nbsp;</p><p>&quot;Khi ch&iacute;nh cuộc sống của ta bị đe dọa, &yacute; thức thương cảm bị c&ugrave;n đi bởi một th&egrave;m kh&aacute;t sống đầy &iacute;ch kỷ&quot;. V&agrave;, trong một phi&ecirc;n bản nh&acirc;n h&oacute;a đ&aacute;ng tin hơn th&igrave;&nbsp;<em><strong>c&acirc;u chuyện của Pi</strong></em>&nbsp;kỳ lạ, hoang đường, trần trụi đến t&agrave;n khốc khi m&ocirc; tả bản năng của con người qua h&igrave;nh ảnh những con vật. Nh&acirc;n h&oacute;a ấy hợp nhất Pi - một cậu b&eacute; ăn chay 16 tuổi với đức tin v&agrave;o Thượng đế, cầu nguyện ba lần một ng&agrave;y - với Richard Parker - một con hổ Bengal nặng 450 pound mạnh mẽ, t&agrave;n bạo v&agrave; hoang d&atilde;.</p><p>&nbsp;</p><p>Khi trang s&aacute;ch kh&eacute;p lại, những g&igrave; c&ograve;n lại cho người đọc hẳn kh&ocirc;ng nhiều, bởi, c&acirc;u chuyện về sinh tồn trong tuyệt vọng vốn kh&ocirc;ng c&ograve;n xa lạ trong phim ảnh, s&aacute;ch b&aacute;o nữa. Yan Martel đ&atilde; ho&agrave;n th&agrave;nh trọng tr&aacute;ch của một người kể chuyện, c&ograve;n Pi - đ&atilde; trưởng th&agrave;nh v&agrave; sống hạnh ph&uacute;c c&ugrave;ng gia đ&igrave;nh nhỏ của m&igrave;nh - kh&ocirc;ng c&ograve;n l&agrave; huyền thoại xa vời m&agrave; chỉ như một dấu ấn mờ mịt trong mu&ocirc;n ng&agrave;n sinh mạng đang tồn tại tr&ecirc;n thế giới n&agrave;y. Đến cuối c&ugrave;ng, đ&acirc;u l&agrave; thực, đ&acirc;u l&agrave; ảo gi&aacute;c? - Chắc chẳng quan trọng nữa rồi. Pi vẫn sống c&ugrave;ng niềm tin đa t&ocirc;n gi&aacute;o, c&ugrave;ng triết l&yacute; kỳ lạ về con người v&agrave; sự sống, c&ugrave;ng gia đ&igrave;nh nhỏ b&ecirc;n người vợ xinh đẹp v&agrave; hai đứa con - Một c&aacute;i kết c&oacute; hậu cho người đ&atilde; mất đi tất cả trong&nbsp;<a href=\"https://bookbuy.vn/sach/vhnn-tieu-thuyet\">cuộc phi&ecirc;u lưu</a>&nbsp;đ&aacute;ng sợ nhất đời m&igrave;nh.</p><p>&nbsp;</p><p>Giải thưởng: Giải Man Booker năm 2002. Giải thưởng văn học dịch Hội Nh&agrave; văn H&agrave; Nội. Giải thưởng văn học dịch Hội Nh&agrave; văn Việt&nbsp;Nam.</p><p>&nbsp;</p><p>Sau vụ đắm t&agrave;u bi thảm, Pi, cậu b&eacute; 16 tuổi con một gi&aacute;m đốc sở th&uacute; c&ugrave;ng gia đ&igrave;nh đi Canada, thấy m&igrave;nh l&agrave; kẻ sống s&oacute;t duy nhất tr&ecirc;n một chiếc xuồng cứu nạn nhỏ b&eacute; dập dềnh giữa Th&aacute;i B&igrave;nh Dương. C&ugrave;ng với một con ngựa vằn đau khổ (gẫy một ch&acirc;n), một con linh cẩu l&ocirc;ng đốm độc &aacute;c li&ecirc;n tục k&ecirc;u yip yip, một con đười ươi c&aacute;i n&ocirc;n ọe v&igrave; say s&oacute;ng&nbsp;&nbsp;v&agrave; đặc biệt một con hổ Bengal nặng 450 pound, Pi đ&atilde; lang thang tr&ecirc;n đại dương suốt 227 ng&agrave;y, hy vọng rồi tuyệt vọng, trải qua những điều h&agrave;i hước nhất, kinh khủng nhất, hoang tưởng nhất, đ&aacute;ng sợ nhất...m&agrave; một con người c&oacute; thể gặp trong đời. Tr&iacute; tưởng tượng kh&ocirc;ng giới hạn, vốn hiểu biết d&agrave;y dặn, sự trải nghiệm s&acirc;u rộng, nghệ thuật kể chuyện bậc thầy, đ&oacute; l&agrave; những yếu tố đ&atilde; gi&uacute;p Yann Martel viết n&ecirc;n một trong những cuốn s&aacute;ch đ&aacute;ng đọc nhất của&nbsp;&nbsp;văn học thế giới đương đại.</p><p>&nbsp;</p><p>&quot;<em><strong>Cuộc đời của Pi</strong></em>&nbsp;l&agrave; hắc ảo thuật song h&agrave;nh c&ugrave;ng hiện thực, một ngụ ng&ocirc;n tinh tế v&agrave; c&ocirc;ng phu&nbsp;&nbsp;về đức tin dưới nhiều tầng lớp&quot; -&nbsp;<strong><em>Irish Time</em></strong></p><p>&nbsp;</p><p>&quot;Nếu thế kỷ n&agrave;y sản sinh ra một t&aacute;c phẩm kinh điển để lại cho hậu thế, Martel l&agrave; một ứng cử vi&ecirc;n nặng k&yacute;&quot; -&nbsp;<strong><em>The Nation</em></strong></p><p>&nbsp;</p><p>&quot;Những người n&agrave;o tin rằng nghệ thuật hư cấu đang hấp hối h&atilde;y để họ đọc&nbsp;&nbsp;Yann Martel cho họ mở r&otilde; con mắt&quot; -&nbsp;<strong><em>Canongate</em></strong></p><p>&nbsp;</p><p>&quot;C&oacute; một ch&uacute;t g&igrave; như l&agrave; truyện biển, lướt nhẹ qua chủ nghĩa hiện thực huyền ảo, c&ograve;n lại tr&agrave;n đầy l&agrave; thi&ecirc;n t&agrave;i kể chuyện đ&atilde; l&agrave;m n&ecirc;n tiểu thuyết của Martel&quot;</p>','978-0547928227','PaperBack','14.0 x 20.5 x 2.3 cm','2019-02-04 00:00:00.000',1000,110000.000000000000000000000000000000,446,'https://salt.tikicdn.com/cache/550x550/media/catalog/product/a/n/anh-cdcp-3_1186d_4_3.jpg','[\'https://salt.tikicdn.com/cache/550x550/media/catalog/product/a/n/anh-cdcp-3_1186d_4_3.jpg\',\'https://salt.tikicdn.com/cache/550x550/ts/product/49/13/85/768e01954281011abaa7baf062ad45fc.jpg\',\'https://i.imgur.com/gHupITO.jpg\',\'https://reviewsach.net/wp-content/uploads/2018/05/cu%E1%BB%99c-%C4%91%E1%BB%9Di-c%E1%BB%A7a-pi-reviewsach.net-Copy.jpg\',\'\']','2020-02-02 09:20:12.239','2020-02-02 09:20:12.239','ck5gxxw4x00g80718dmpkt93t','Trịnh Lữ'),('ck64tq6mm020u0818prsyeypb','Ba Người Lính Ngự Lâm','<p>Tình cờ gặp gỡ ở Paris, ch&agrave;ng qu&yacute; tộc tỉnh lẻ d&rsquo;Artagnan k&ecirc;́t th&acirc;n cùng ba người l&iacute;nh ngự l&acirc;m Athos, Aramis, Porthos. Từ bốn con người với những t&iacute;nh c&aacute;ch ho&agrave;n to&agrave;n kh&aacute;c biệt - nh&agrave; qu&yacute; tộc Athos mẫu mực từ trong ra ngo&agrave;i, &ocirc;ng hộ ph&aacute;p Porthos hu&ecirc;nh hoang nhưng tốt bụng, ng&agrave;i &ldquo;tu viện trưởng&rdquo; Aramis duy&ecirc;n d&aacute;ng như con g&aacute;i nhưng s&acirc;u sắc chẳng k&eacute;m ai, ch&agrave;ng trẻ tuổi d&rsquo;Artagnan kh&ocirc;n ngoan v&agrave; liều lĩnh -&nbsp;&nbsp;họ kết th&agrave;nh một khối thống nhất nhờ t&igrave;nh bạn keo sơn &ldquo;M&ocirc;̣t người vì mọi người, mọi người vì m&ocirc;̣t người.&rdquo; Giữa cảnh tao loạn của nước Ph&aacute;p thế kỉ XVI, trong thế giới của những &ocirc;ng ho&agrave;ng b&agrave; ch&uacute;a đầy những &acirc;m mưu, thủ đoạn, bốn người bạn c&ugrave;ng nhau bước v&agrave;o những cuộc phi&ecirc;u lưu đầy chất anh h&ugrave;ng, nghĩa hiệp nhưng cũng đầy chất lãng mạn của t&igrave;nh y&ecirc;u. Mời bạn đọc c&ugrave;ng theo bước họ để thấy sống dậy một thời k&igrave;&nbsp;<a href=\"http://www.bookbuy.vn/pc/#!/?tt=lich-su-&amp;ct=602&amp;ps=20&amp;or=IsNew&amp;ls=1&amp;p=1\">lịch sử</a>&nbsp;được soi qua lăng k&iacute;nh k&igrave; diệu của tr&iacute; tưởng tượng m&agrave; th&ecirc;m phần li k&igrave; hồi hộp, lại dạt d&agrave;o c&aacute;i s&ocirc;i nổi, h&agrave;o hứng của tuổi trẻ.&nbsp;</p><p>&nbsp;</p><p><strong><em>V&agrave;i n&eacute;t về t&aacute;c giả:</em></strong></p><p><strong>Alexandre Dumas</strong>&nbsp;(1802-1870) (c&ograve;n được gọi&nbsp;Alexandre Dumas cha&nbsp;để ph&acirc;n biệt với con trai &ocirc;ng cũng l&agrave; một nh&agrave; văn) l&agrave; một c&acirc;y b&uacute;t c&oacute; sức s&aacute;ng t&aacute;c mạnh mẽ. &Ocirc;ng để lại h&agrave;ng trăm t&aacute;c phẩm, trong đ&oacute; c&oacute; khoảng 100<a href=\"http://www.bookbuy.vn/pc/#!/?ct=278&amp;tt=tieu-thuyet\">&nbsp;tiểu thuyết</a>, số c&ograve;n lại l&agrave; kịch,&nbsp;<a href=\"http://www.bookbuy.vn/pc/#!/?ct=570&amp;tt=tieu-su-hoi-ky-%E2%80%93-but-ky-%E2%80%93-nhan-vat\">b&uacute;t k&iacute;, hồi k&iacute;</a>,&nbsp;<a href=\"http://www.bookbuy.vn/pc/#!/?ct=284&amp;tt=phong-su-ky-su\">ph&oacute;ng sự</a>. Những tiểu thuyết nổi tiếng của &ocirc;ng như l&agrave;&nbsp;<em>Ba người l&iacute;nh ngự l&acirc;m</em>&nbsp;(Les trois mousquetaires&nbsp;-1844),&nbsp;<em>B&aacute; tước Monte-Cristo</em>&nbsp;(Le Comte de Monte-Cristo -&nbsp;1844),&hellip; gi&agrave;nh được sự h&acirc;m mộ của độc giả khắp thế giới từ hơn một thế kỉ nay.</p>','2513786283232','PaperBack','16 x 24 cm','2017-09-07 00:00:00.000',1000,130000.000000000000000000000000000000,778,'https://salt.tikicdn.com/cache/550x550/media/catalog/product/b/a/ba-chang-linh-ngu-lam.u5465.d20171004.t102622.786481.jpg','[\'https://salt.tikicdn.com/cache/550x550/media/catalog/product/b/a/ba-chang-linh-ngu-lam.u5465.d20171004.t102622.786481.jpg\',\'https://newshop.vn/public/uploads/content/gif5b2da7ab25867.gif\',\'https://newshop.vn/public/uploads/products/10868/biatrc.gif\']','2020-02-02 09:29:31.149','2020-02-02 09:29:31.149','ck5gxxw4x00g80718dmpkt93t','Anh Vũ, Trần Việt'),('ck64tzwle026t0818z0ny19sx','Danh Tác Việt Nam - Số Đỏ (Tái Bản)','<p><strong>Danh T&aacute;c Việt Nam - Số Đỏ</strong></p><p>Số đỏ&nbsp;l&agrave; một&nbsp;tiểu thuyết&nbsp;văn học của nh&agrave; văn Vũ Trọng Phụng, đăng ở H&agrave; Nội b&aacute;o từ số 40 ng&agrave;y 7 th&aacute;ng 10/1936 v&agrave; được in th&agrave;nh s&aacute;ch lần đầu v&agrave;o năm 1938.</p><p>Truyện d&agrave;i 20 chương v&agrave; được bắt đầu khi b&agrave; Ph&oacute; Đoan đến chơi ở s&acirc;n quần vợt nơi Xu&acirc;n t&oacute;c đỏ l&agrave;m việc. V&ocirc; t&igrave;nh Xu&acirc;n t&oacute;c đỏ v&igrave; xem trộm 1 c&ocirc; đầm thay đồ n&ecirc;n bị cảnh s&aacute;t bắt giam v&agrave; được b&agrave; Ph&oacute; Đoan bảo l&atilde;nh. Sau đ&oacute;, b&agrave; Ph&oacute; Đoan giới thiệu Xu&acirc;n đến l&agrave;m việc ở tiệm may &Acirc;u H&oacute;a, từ đ&oacute; Xu&acirc;n bắt đầu tham gia v&agrave;o việc cải c&aacute;ch x&atilde; hội. Nhờ thuộc l&ograve;ng những b&agrave;i quảng c&aacute;o thuốc lậu, hắn được vợ chồng Văn Minh gọi l&agrave; &quot;sinh vi&ecirc;n trường thuốc&quot;, &quot;đốc tờ Xu&acirc;n&quot;. Hắn gia nhập x&atilde; hội thượng lưu, quen với những người gi&agrave;u v&agrave; c&oacute; thế lực, quyến rũ được c&ocirc; Tuyết v&agrave; ph&aacute;t hiện c&ocirc; Ho&agrave;ng H&ocirc;n ngoại t&igrave;nh. Xu&acirc;n c&ograve;n được b&agrave; Ph&oacute; đoan nhờ dạy dỗ cậu Phước, được nh&agrave; sư Tăng Ph&uacute; mời l&agrave;m cố vấn cho b&aacute;o G&otilde; M&otilde;. V&igrave; v&ocirc; t&igrave;nh, hắn g&acirc;y ra c&aacute;i chết cho cụ cố tổ n&ecirc;n được mọi người mang ơn. Văn Minh v&igrave; nghĩ ơn của Xu&acirc;n n&ecirc;n dẫn Xu&acirc;n đi x&oacute;a bỏ l&iacute; lịch trước kia rồi đăng k&iacute; đi tranh giải quần vợt nh&acirc;n dịp vua Xi&ecirc;m đến Bắc K&igrave;. Bằng thủ đoạn xảo tr&aacute;, hắn l&agrave;m 2 vận động vi&ecirc;n qu&aacute;n qu&acirc;n bị bắt ngay trước h&ocirc;m thi đấu n&ecirc;n Xu&acirc;n được dịp thi t&agrave;i với qu&aacute;n qu&acirc;n Xi&ecirc;m. V&igrave; để giữ tỉnh giao hảo, hắn được lệnh phải thua. Kết th&uacute;c trận đấu, khi bị đ&aacute;m đ&ocirc;ng phản đối, Xu&acirc;n h&ugrave;ng hồn diễn thuyết cho đ&aacute;m đ&ocirc;ng d&acirc;n ch&uacute;ng hiểu h&agrave;nh động &quot;hi sinh v&igrave; tổ quốc của m&igrave;nh&quot;, được mời v&agrave;o hội Khai tr&iacute; tiến đức, được nhận hu&acirc;n chương Bắc Đẩu bội tinh v&agrave; cuối c&ugrave;ng trở th&agrave;nh con rể cụ cố Hồng.</p><p>Bằng ng&ograve;i b&uacute;t tr&agrave;o ph&uacute;ng độc đ&aacute;o, Số đỏ l&ecirc;n &aacute;n gay gắt c&aacute;i x&atilde; hội tư sản th&agrave;nh thị Việt Nam đang chạy theo lối sống văn minh rởm hết sức lố lăng đồi bại đương thời. T&aacute;c giả đ&atilde; đả k&iacute;ch cay độc c&aacute;c phong tr&agrave;o &quot;&Acirc;u h&oacute;a&quot;, &quot;thể thao&quot;, &quot;giải ph&oacute;ng nữ quyền&quot;, &quot;tiến bộ&quot;, &quot;cải c&aacute;ch x&atilde; hội&quot; m&agrave; thực chất chỉ l&agrave; ăn chơi trụy lạc, l&agrave;m tiền, ch&agrave; đạp trắng trợn l&ecirc;n mọi nền nếp đạo đức truyền thống&hellip; Ng&ocirc;n ngữ nghệ thuậ của Vũ Trọng Phụng thấm đẫm c&aacute; t&iacute;nh s&aacute;ng tạo. Một thứ ng&ocirc;n ngữ vừa gai g&oacute;c, sắc nhọn, mỉa mai, chua ch&aacute;t. Cũng l&agrave; thứ ng&ocirc;n ngữ hướng đến sự ph&ocirc; b&agrave;y, l&ecirc;n &aacute;n, tố c&aacute;o những mặt tr&aacute;i của x&atilde; hội nhưng dữ dội hơn so với c&aacute;c c&acirc;y b&uacute;t hiện thực kh&aacute;c.</p>','2789356522944','PaperBack','16 x 24 cm','2018-10-07 00:00:00.000',1000,50000.000000000000000000000000000000,228,'https://salt.tikicdn.com/cache/550x550/media/catalog/product/s/o/so-do.u547.d20160614.t150512.jpg','[\'https://salt.tikicdn.com/cache/550x550/media/catalog/product/s/o/so-do.u547.d20160614.t150512.jpg\',\'https://sachcubanme.bmt.city/wp-content/uploads/2018/10/42345086_327675727789440_3267443597892386816_n.jpg\',\'\']','2020-02-02 09:37:04.705','2020-02-02 09:37:04.705','ck5gxxw4x00g80718dmpkt93t',''),('ck64u9izx02co0818ey28y9w2','Danh Tác Việt Nam - Tắt Đèn (Tái Bản)','<p>Danh T&aacute;c Việt Nam - Tắt Đ&egrave;n</p><p>Tắt đ&egrave;n&nbsp;của nh&agrave; văn Ng&ocirc; Tất Tố phản &aacute;nh rất ch&acirc;n thực cuộc sống khốn khổ của tầng lớp n&ocirc;ng d&acirc;n Việt Nam đầu thế kỷ XX dưới &aacute;ch đ&ocirc; hộ của thực d&acirc;n Ph&aacute;p. T&aacute;c phẩm xoay quanh nh&acirc;n vật chị Dậu v&agrave; gia đ&igrave;nh - một điển h&igrave;nh của cuộc sống bần c&ugrave;ng h&oacute;a sưu cao thuế nặng m&agrave; chế độ thực d&acirc;n &aacute;p đặt l&ecirc;n x&atilde; hội Việt Nam. Trong cơn c&ugrave;ng cực chị Dậu phải b&aacute;n khoai, b&aacute;n bầy ch&oacute; đẻ v&agrave; b&aacute;n cả đứa con để lấy tiền nộp sưu thuế cho chồng nhưng cuộc sống vẫn đi v&agrave;o bế tắc, kh&ocirc;ng lối tho&aacute;t.</p><p>Trong t&aacute;c phẩm, cảnh đời tr&agrave;n nước mắt của gia đ&igrave;nh chị Dậu đ&atilde; được t&aacute;i hiện một c&aacute;ch sống động trong từng c&acirc;u chữ, chi tiết văn học với nhiều cung bậc cảm x&uacute;c &nbsp;của t&aacute;c giả khiến người đọc kh&ocirc;ng khỏi x&uacute;c động.</p><p>Tr&iacute;ch đoạn</p><p>&quot;Bắt đầu từ g&agrave; g&aacute;y một tiếng, tr&acirc;u b&ograve; lục-tục k&eacute;o thợ cầy đến đoạn đường ph&iacute;a trong điếm tuần. Mọi ng&agrave;y, giờ ấy, những con-vật n&agrave;y cũng như những người cổ cầy, vai bừa kia, đ&atilde; lần lượt đi m&ograve; ra ruộng l&agrave;m việc cho chủ. H&ocirc;m nay, v&igrave; cổng l&agrave;ng chưa mở, ch&uacute;ng phải chia qu&atilde;ng đứng rải r&aacute;c ở hai vệ đường, giống như một lũ phu vờ chờ đ&oacute;n những &ocirc;ng quan lớn.</p><p>Dưới b&oacute;ng tối của rặng tre um t&ugrave;m, tiếng tr&acirc;u thở h&igrave; h&ograve;, tiếng b&ograve; đập đu&ocirc;i đen đ&eacute;t, sen với tiếng người khạc kh&uacute;ng khắng. Cảnh tượng điếm tuần th&igrave;nh l&igrave;nh hiện ra trong &aacute;nh lửa lập l&ograve;e của chiếc mồi rơm bị thổi. Cạnh giẫy s&agrave;o, gi&aacute;o ngả nghi&ecirc;ng dựng ở gi&aacute;p tường, một lũ tuần phu lố nhố ngồi tr&ecirc;n lớp chiếu quằn qu&egrave;o. C&oacute; người ph&igrave; ph&ograve; thổi mồi. C&oacute; người ve ve mồi thuốc v&agrave; ch&igrave;a tay chờ đ&oacute;n điếu đ&oacute;m. C&oacute; người h&aacute; miệng ng&aacute;p d&agrave;i. C&oacute; người đang hai tay dụi mắt. Cũng c&oacute; người gối đầu tr&ecirc;n c&aacute;i miệng hiệu sừng tr&acirc;u, ngảnh mặt v&agrave;o v&aacute;ch m&agrave; ng&aacute;y. C&aacute;i điếu c&agrave;y v&agrave; c&aacute;i đ&oacute;m lửa bị năm, s&aacute;u người chuyền tay, chiếu đi, chiếu lại độ v&agrave;i ba v&ograve;ng, &aacute;nh lửa lại tắt, trong điếm chỉ c&ograve;n tiếng n&oacute;i chuyện rầm rầm.G&agrave; g&aacute;y giục. Trời s&aacute;ng mờ mờ.&quot;</p>','5599990343884','PaperBack','13 x 20.5 cm','2018-10-07 00:00:00.000',1000,54000.000000000000000000000000000000,231,'https://salt.tikicdn.com/cache/550x550/ts/product/2b/8b/4b/60dd0d41051deebeec36a63f83c7df14.jpg','[\'https://salt.tikicdn.com/cache/550x550/ts/product/2b/8b/4b/60dd0d41051deebeec36a63f83c7df14.jpg\']','2020-02-02 09:44:33.644','2020-02-02 09:44:33.644','ck5gxxw4x00g80718dmpkt93t',''),('ck64uih1h02i60818rwdqwnpj','Danh Tác Việt Nam - Làm Đĩ (Tái Bản)','<p><strong>L&agrave;m Đĩ</strong></p><p>L&agrave;m đĩ&nbsp;l&agrave; một trong số những cuốn s&aacute;ch g&acirc;y ra nhiều cuộc tranh luận trong hơn suốt nửa thế kỷ qua. Từ Nhất Linh, Th&aacute;i Phỉ, Ho&agrave;i Thanh trước đ&acirc;y đ&atilde; c&oacute; kh&aacute; nhiều b&agrave;i đăng tr&ecirc;n c&aacute;c b&aacute;o&nbsp;T&acirc;n văn,&nbsp;Tương lai,&nbsp;Ng&agrave;y nay,&nbsp;H&agrave; Nội b&aacute; ph&ecirc; ph&aacute;n quan niệm văn chương của Vũ Trọng Phụng xung quanh&nbsp;tiểu thuyết&nbsp;L&agrave;m đĩ&nbsp;của &ocirc;ng; cho đến Ho&agrave;ng Văn Hoan sau n&agrave;y, khi Vũ Trọng Phụng đ&atilde; mất gần 25 năm, c&ograve;n cố t&igrave;nh t&igrave;m mọi lời lẽ sặc m&ugrave;i ch&iacute;nh trị ph&ecirc; ph&aacute;n&nbsp;L&agrave;m đĩ&nbsp;l&agrave; một cuốn s&aacute;ch&nbsp;d&acirc;m uế&nbsp;v&agrave; c&oacute; hại cho sự gi&aacute;o h&oacute;a đạo đức v&agrave; lu&acirc;n l&yacute; đối với thế hệ trẻ Việt Nam.</p><p>Một số người kh&aacute;c lại cho rằng Vũ Trọng Phụng viết&nbsp;L&agrave;m đĩ&nbsp;l&agrave; nhằm mục đ&iacute;ch gi&aacute;o dục cho thanh thiếu ni&ecirc;n những hiểu biết sơ đẳng về quan hệ t&igrave;nh dục kh&aacute;c giới, đại biểu l&agrave; nh&agrave; nghi&ecirc;n cứu, ph&ecirc; b&igrave;nh văn học Ho&agrave;ng Thiếu Sơn. Vũ Trọng Phụng đ&atilde; viết:&nbsp;Tuổi dậy th&igrave;, c&aacute;i ho&agrave;n cảnh xấu, những bạn hữu xấu, một nền gi&aacute;o dục sai lầm ngần ấy c&aacute;i đ&atilde; l&agrave;m cho em h&oacute;a ra đến nỗi như n&agrave;y&nbsp;(tr.76)&nbsp;Sở dĩ c&oacute; c&aacute;i hại, c&aacute;i xấu nhưng khi nhiều người đ&atilde; biết tất rồi phải c&oacute; c&aacute;ch b&agrave;i trừ, cứu chữa thuốc thang! Bắt t&ocirc;i đừng n&oacute;i về sự trụy lạc của x&aacute;c thịt ư? Th&igrave; sao kh&ocirc;ng kiếm c&aacute;ch n&agrave;o bắt người đời kh&ocirc;ng được ai hư hỏng!&nbsp;(tr.289). Tr&aacute;ch nhiệm c&ocirc;ng d&acirc;n của nghệ sỹ Vũ Trọng Phụng, cũng như &yacute; nghĩa gi&aacute;o dục của&nbsp;L&agrave;m đĩ&nbsp;l&agrave; qu&aacute; r&otilde;. Vậy m&agrave; từ lần xuất bản thứ nhất, năm 1937, cho đến lần thứ hai (1993) phải mất tới 56 năm. Tuy nhi&ecirc;n d&ugrave; sao đấy cũng chỉ l&agrave; kh&iacute;a cạnh x&atilde; hội thuộc nấc thang thứ nhất đối với việc nhận thức v&agrave; định gi&aacute; t&aacute;c phẩm&nbsp;L&agrave;m đĩ&nbsp;của &ocirc;ng.</p><p>Mời qu&yacute; độc giả thưởng thức t&aacute;c phẩm v&agrave; đ&aacute;nh gi&aacute; n&oacute; như 1 trong t&aacute;c phẩm văn học ph&ecirc; ph&aacute;n xuất sắc nhất về x&atilde; hội trong những năm 1930.</p>','7341463321596','PaperBack','13 x 20.5 cm','2018-10-07 00:00:00.000',1000,52000.000000000000000000000000000000,220,'https://salt.tikicdn.com/cache/550x550/ts/product/ea/98/24/c1e2029c0e09520c6f7fa7fce7eb33ce.jpg','[\'https://salt.tikicdn.com/cache/550x550/ts/product/ea/98/24/c1e2029c0e09520c6f7fa7fce7eb33ce.jpg\']','2020-02-02 09:51:31.012','2020-02-02 09:51:31.012','ck5gxxw4x00g80718dmpkt93t',''),('ck64unn0l02lh08183umlulbg','Danh Tác Việt Nam - Trúng Số Độc Đắc (Tái bản)','<p>Tr&uacute;ng Số Độc Đắc&nbsp;l&agrave; t&aacute;c phẩm cuối đời của Vũ Trọng Phụng. Kh&aacute;c với lối viết tiểu thuyết trước, cứ đến ng&agrave;y b&aacute;o ra mới viết một chương, đưa in xong hết mới mới th&agrave;nh s&aacute;ch,&nbsp;Tr&uacute;ng Số Độc Đắc&nbsp;được Vũ Trọng Phụng viết một mạch đến khi ho&agrave;n th&agrave;nh, tự tay đi đ&oacute;ng th&agrave;nh quyển rồi mới đưa cho nh&agrave; xuất bản.</p><p>Với cuốn tiểu thuyết, Vũ Trọng Phụng l&ecirc;n &aacute;n thế gian v&agrave; người đời nghi&ecirc;m kh&aacute;c, thế nhưng giọng kể chuyện, tả cảnh, tả t&igrave;nh cứ hồn nhi&ecirc;n, vui vẻ v&agrave; c&oacute; dịp l&agrave; kh&ocirc;ng qu&ecirc;n h&agrave;i hước.&nbsp;</p><p>Viết Tr&uacute;ng số độc đắc, Vũ Trọng Phụng đ&atilde; tập trung tất cả b&uacute;t lực để theo d&otilde;i, ph&acirc;n t&iacute;ch, m&ocirc; tả những thay đổi trong đời v&agrave; trong l&ograve;ng của chỉ một nh&acirc;n vật. Kh&ocirc;ng c&oacute; trang n&agrave;o m&agrave; kh&ocirc;ng c&oacute; Ph&uacute;c, tất cả chỉ để biểu đạt t&acirc;m tư suy nghĩ của anh, cả ngoại h&igrave;nh anh cũng chỉ được ph&aacute;c họa v&agrave;i d&ograve;ng ngắn gọn. &Ocirc;ng c&oacute; c&aacute;i nh&igrave;n rất s&aacute;ng suốt, t&iacute;nh nhậy cảm thật tinh tế, kh&ocirc;ng những tr&ocirc;ng thấy những t&igrave;nh cảm được biểu lộ m&agrave; cả những &yacute; muốn sơ ph&aacute;t c&ograve;n tiềm t&agrave;ng, những k&yacute; ức bị qu&ecirc;n đi bỗng hiện về, những cảm gi&aacute;c từ l&acirc;u sống dậy.&nbsp;</p>','8655129365176','PaperBack','13 x 20.5 cm','2018-10-07 00:00:00.000',1000,76000.000000000000000000000000000000,334,'https://vnwriter.net/wp-content/uploads/2019/03/sach-trung-so-doc-dac.png','[\'https://vnwriter.net/wp-content/uploads/2019/03/sach-trung-so-doc-dac.png\']','2020-02-02 09:55:32.036','2020-02-02 09:55:32.036','ck5gxxw4x00g80718dmpkt93t',''),('ck64uwxie02r908187xkmh2vh','Danh Tác Việt Nam - Kĩ nghệ lấy tây (Tái bản)','<p>Vũ Trọng Phụng l&agrave; một trong những nh&agrave; văn lớn của d&ograve;ng văn học hiện thực ph&ecirc; ph&aacute;n Việt Nam trước 1945, những t&aacute;c phẩm Vũ Trọng Phụng thường khai th&aacute;c đời sống thị th&agrave;nh. Ở đ&oacute;, nh&agrave; văn đ&atilde; chứng kiến một x&atilde; hội Việt Nam bị thay đổi, r&uacute;ng động trong mọi mối quan hệ x&atilde; hội. Nho gi&aacute;o phong kiến bị thất thế nhưng vẫn ngự trị ngấm ngầm, c&ograve;n l&agrave;n s&oacute;ng văn minh phương T&acirc;y cưỡng &eacute;p đ&atilde; tạo n&ecirc;n những sự thay đổi lố lăng, kệch cỡm với đủ tr&ograve; giả tr&aacute;, mị d&acirc;n. X&oacute;m Thị Cầu trong&nbsp;Kỹ nghệ lấy T&acirc;y&nbsp;của Vũ Trọng Phụng l&agrave; một nơi của sự biến đổi đầu đau đớn, chua ch&aacute;t đ&oacute;.</p><p>Viết Kỹ nghệ lấy T&acirc;y, &nbsp;t&aacute;c giả muốn cho&nbsp;mọi người thấy được hiện thực của x&atilde; hội nước ta những năm 1930 bi h&agrave;i đều c&oacute;. Nhưng họ c&oacute; kh&aacute;c nhau g&igrave; đ&acirc;u, tất cả đều l&agrave; nạn nh&acirc;n của sự phụ t&igrave;nh, của những lễ nghi Nho gi&aacute;o phong kiến để rồi bước đường c&ugrave;ng phải dấn th&acirc;n v&agrave;o kiếp me T&acirc;y! Qua đ&oacute; người&nbsp;viết muốn cho mọi người thấy được số phận của con người trước sự thay đổi của x&atilde; hội.&nbsp;Thi&ecirc;n ph&oacute;ng sự Kỹ nghệ lấy T&acirc;y của nh&agrave; văn - nh&agrave; b&aacute;o Vũ Trọng Phụng xuất hiện lần đầu tr&ecirc;n b&aacute;o Nhật T&acirc;n năm 1934, v&agrave; đến b&acirc;y giờ người đọc n&oacute; vẫn c&ograve;n những li&ecirc;n tưởng cụ thể trong đời sống thực tại.</p>','7341779474702','PaperBack','13 x 20.5 cm','2018-10-07 00:00:00.000',1000,27000.000000000000000000000000000000,112,'https://salt.tikicdn.com/cache/550x550/ts/product/a9/6a/f2/8aaefdda99f096fd89c85ec641f58d73.jpg','[\'https://salt.tikicdn.com/cache/550x550/ts/product/a9/6a/f2/8aaefdda99f096fd89c85ec641f58d73.jpg\']','2020-02-02 10:02:45.541','2020-02-02 10:02:45.541','ck5gxxw4x00g80718dmpkt93t',''),('ck64v3p5y02vh0818i8xvgyqy','Danh Tác Việt Nam - Chí Phèo (Tái bản)','<p><strong>Danh T&aacute;c Việt Nam - Ch&iacute; Ph&egrave;o</strong></p><p><strong>Ch&iacute; Ph&egrave;o</strong>&nbsp;- tập truyện ngắn t&aacute;i hiện bức tranh ch&acirc;n thực n&ocirc;ng th&ocirc;n Việt Nam trước 1945, ngh&egrave;o đ&oacute;i, xơ x&aacute;c tr&ecirc;n con đường ph&aacute; sản, bần c&ugrave;ng, hết sức th&ecirc; thảm, người n&ocirc;ng d&acirc;n bị đẩy v&agrave;o con đường tha h&oacute;a, lưu manh h&oacute;a. Nam Cao kh&ocirc;ng hề b&ocirc;i nhọ người n&ocirc;ng d&acirc;n, tr&aacute;i lại nh&agrave; văn đi s&acirc;u v&agrave;o nội t&acirc;m nh&acirc;n vật để khẳng định nh&acirc;n phẩm v&agrave; bản chất lương thiện ngay cả khi bị v&ugrave;i dập, cướp mất c&agrave; nh&acirc;n h&igrave;nh, nh&acirc;n t&iacute;nh của người n&ocirc;ng d&acirc;n, đồng thời kết &aacute;n đanh th&eacute;p c&aacute;i x&atilde; hội t&agrave;n bạo đ&oacute; trước 1945.</p><p>Những s&aacute;ng t&aacute;c của<strong>&nbsp;Nam Cao</strong>&nbsp;ngo&agrave;i gi&aacute; trị hiện thực s&acirc;u sắc, c&aacute;c t&aacute;c phẩm đi s&acirc;u v&agrave;o nội t&acirc;m nh&acirc;n vật, để lại những cảm x&uacute;c s&acirc;u lắng trong l&ograve;ng người đọc.</p>','2517004737965','PaperBack','13 x 20.5 cm','2018-10-07 00:00:00.000',1000,69000.000000000000000000000000000000,334,'https://lh3.googleusercontent.com/proxy/tg-hR0uhI5urfcsQPZ-keMDl8tl4fL35uaouGJwdUsJDkrX17uWtVSo6i0bBEcyoor35lrs5V6Y1f9Gx-qvbxcV-WQToZ67iVa9IkXbwFHZtHRe8EZc9KIsCZOyP-KintFPpVM1RNi-FP277HmU1d22NZPZINM56y0LiApAUKD6hL3AcxFWt88AdyxLxkjTnRwc5nJ_U','[\'https://lh3.googleusercontent.com/proxy/tg-hR0uhI5urfcsQPZ-keMDl8tl4fL35uaouGJwdUsJDkrX17uWtVSo6i0bBEcyoor35lrs5V6Y1f9Gx-qvbxcV-WQToZ67iVa9IkXbwFHZtHRe8EZc9KIsCZOyP-KintFPpVM1RNi-FP277HmU1d22NZPZINM56y0LiApAUKD6hL3AcxFWt88AdyxLxkjTnRwc5nJ_U\',\'https://taisachmoi.com/wp-content/uploads/2019/10/chi-pheo.jpg\',\'https://myaloha.vn/upload/images/anh-baiviet-48568-67b12c5e-9266-4a8d-b399-51cec6e10328.jpg\']','2020-02-02 10:08:01.318','2020-02-02 10:08:01.318','ck5gxxw4x00g80718dmpkt93t',''),('ck64vufmf03bi08187dgw90b8','Danh Tác Việt Nam - Nguyễn Công Hoan Tuyển Tập','<p><strong>Nguyễn C&ocirc;ng Hoan - tuyển tập</strong> l&agrave; tập hợp đa phần những truyện ngắn nổi tiếng của nh&agrave; văn Nguyễn C&ocirc;ng Hoan v&agrave; phần Tiểu thuyết Bước đường c&ugrave;ng của &ocirc;ng.</p><p>Nguyễn C&ocirc;ng Hoan sinh ng&agrave;y 6 th&aacute;ng 3 năm 1903, tại th&ocirc;n Xu&acirc;n Cầu, x&atilde; Nghĩa Trụ, huyện Văn Giang, tỉnh Bắc Ninh, nay l&agrave; tỉnh Hải Hưng, trong một gia đ&igrave;nh Nho học. Ch&iacute;nh nơi sinh cũng l&agrave; qu&ecirc; hương &ocirc;ng.</p><p>&Ocirc;ng bắt đầu viết văn rất sớm, ngay từ khi c&ograve;n đương học ở trường Bưởi. Tập truyện ngắn đầu ti&ecirc;n của &ocirc;ng l&agrave; Kiếp hồng nhan xuất hiện năm 1923, khi &ocirc;ng tr&ograve;n hai mươi tuổi. Từ đ&oacute; &ocirc;ng viết nhiều truyện ngắn v&agrave; truyện d&agrave;i đăng tr&ecirc;n c&aacute;c b&aacute;o đương thời. Năm 1932 &ocirc;ng bắt đầu được bạn đọc ch&uacute; &yacute; khi cuốn truyện d&agrave;i Những cảnh khốn nạn ra đời v&agrave; nổi tiếng sau khi ra tập K&eacute;p Tư Bền (1935).</p><p>Truyện ngắn Nguyễn C&ocirc;ng Hoan, rất ngắn, cấu tr&uacute;c gọn v&agrave; đầy t&iacute;nh h&agrave;i hước. Ng&ocirc;n ngữ của &ocirc;ng giản dị, chữ d&ugrave;ng chọn lọc ch&iacute;nh x&aacute;c gợi những h&igrave;nh ảnh đậm n&eacute;t, d&iacute; dỏm v&agrave; th&ocirc;ng minh. Gấp trang s&aacute;ch, người đọc cảm thấy kh&ocirc;ng thể chịu đựng nổi nếu những cảnh huống như vừa đọc c&ograve;n tiếp tục diễn ra trong cuộc sống con người. Nghệ thuật tr&agrave;o ph&uacute;ng của &ocirc;ng kh&ocirc;ng chỉ bộc lộ r&otilde; ưu thế trong truyện ngắn.</p><p>Theo Nguyễn C&ocirc;ng Hoan tự nhận x&eacute;t, sở trường của &ocirc;ng l&agrave; truyện ngắn chứ kh&ocirc;ng phải tiểu thuyết. &Ocirc;ng n&oacute;i &ocirc;ng th&iacute;ch viết truyện ngắn hơn tiểu thuyết: &quot;T&ocirc;i chỉ viết truyện d&agrave;i khi n&agrave;o t&ocirc;i lười t&igrave;m đề t&agrave;i để viết truyện ngắn&quot;. Tuy nhi&ecirc;n, với kh&ocirc;ng &iacute;t nh&agrave; nghi&ecirc;n cứu, ph&ecirc; b&igrave;nh văn học, tiểu thuyết Bước đường c&ugrave;ng vẫn l&agrave; một trong những t&aacute;c phẩm quan trọng nhất của đời văn Nguyễn C&ocirc;ng Hoan. Cuốn s&aacute;ch từng được đưa v&agrave;o giảng dạy trong nh&agrave; trường v&agrave; được ghi nhận như một trong những t&aacute;c phẩm ti&ecirc;u biểu nhất của d&ograve;ng văn học hiện thực ph&ecirc; ph&aacute;n giai đoạn 1930-1945.</p>','2517004737965','PaperBack','13 x 20.5 cm','2018-10-07 00:00:00.000',1000,109000.000000000000000000000000000000,484,'https://salt.tikicdn.com/cache/w1200/ts/product/62/82/9d/13c4e475c46c3927133ee917b8c5ed4e.JPG','[\'https://salt.tikicdn.com/cache/w1200/ts/product/62/82/9d/13c4e475c46c3927133ee917b8c5ed4e.JPG\',\'https://salt.tikicdn.com/cache/w1200/ts/product/27/43/f5/7b93c38914da518526b9c6d6aa1c2c6b.JPG\']','2020-02-02 10:28:48.662','2020-02-02 10:28:48.662','ck5gxxw4x00g80718dmpkt93t',''),('ck64w2o5i03gn0818ak740gbt','Hamlet & Romeo và Juliet','<h5>Hamlet &amp; Romeo v&agrave; Juliet</h5><p>Hamlet, Romeo v&agrave; Juliet l&agrave; hai vở bi kịch ti&ecirc;u biểu nhất của William Shakespeare - một nh&agrave; văn, nh&agrave; viết kịch, nh&agrave; thơ ti&ecirc;u biểu người Anh.</p><p>Hamlet kể về bi kịch của gia đ&igrave;nh ch&agrave;ng ho&agrave;ng tử Đan Mạch. Sau khi vua cha qua đời, Hamlet đ&atilde; phải trải qua nhiều s&oacute;ng gi&oacute; để trừng trị những kẻ phản bội từng h&atilde;m hại cha ch&agrave;ng. Đau đớn hơn v&igrave; đ&oacute; lại l&agrave; những người th&acirc;n thiết, ruột thịt của ch&agrave;ng...Cuối c&ugrave;ng, Hamlet đ&atilde; t&igrave;m ra được ch&acirc;n l&yacute; đấu tranh nhưng v&igrave; đơn độc v&agrave; thiếu cảnh gi&aacute;c n&ecirc;n ch&agrave;ng đ&atilde; gục ng&atilde; v&igrave; cạm bẫy của kẻ th&ugrave;. Ng&agrave;y nay, trong văn học thế giới vẫn tồn tại kh&aacute;i niệm bệnh Hamlet chỉ th&aacute;i độ suy tư, l&yacute; luận nhiều nhưng kh&ocirc;ng đủ tin tưởng v&agrave; dũng kh&iacute; để h&agrave;nh động cụ thể. Nhưng d&ugrave; sao chăng nữa, Hamlet cũng sống m&atilde;i trong l&ograve;ng độc giả thế giới, với bi kịch của cuộc đời ch&agrave;ng phản &aacute;nh m&acirc;u thuẫn tất yếu của sự ph&aacute;t triển, của cuộc đấu tranh giữa c&aacute;i đẹp v&agrave; c&aacute;i xấu trong tồn tại x&atilde; hội. Hamlet sẽ lu&ocirc;n l&agrave;m nảy sinh trong l&ograve;ng người mu&ocirc;n đời sau kh&ocirc;ng chỉ t&acirc;m trạng trước nỗi buồn m&agrave; c&ograve;n cả những x&uacute;c cảm thẩm mĩ, hướng họ đến những suy cảm về c&aacute;i cao cả lu&ocirc;n hiện hữu giữa c&otilde;i đời trong đục.</p><p>Romeo v&agrave; Juliet kể về c&acirc;u chuyện t&igrave;nh ngang tr&aacute;i đầy nước mắt xảy ra tại th&agrave;nh Verona. Mối t&igrave;nh tha thiết giữa Romeo v&agrave; Juliet đ&atilde; bị hai d&ograve;ng họ - vốn c&oacute; mối th&ugrave; truyền kiếp với nhau &ndash; ngăn cản kịch liệt. Tưởng như mối t&igrave;nh của Romeo v&agrave; Juliet bị tan vỡ khi Romeo đi rồi, Juliet bị cha mẹ &eacute;p gả cho B&aacute; tước Paris. Juliet cầu cứu sự gi&uacute;p đỡ của tu sĩ Laurence. Tu sĩ cho n&agrave;ng uống một liều thuốc ngủ, uống v&agrave;o sẽ như người đ&atilde; chết, thuốc c&oacute; t&aacute;c dụng trong v&ograve;ng 24 tiếng. Tu sĩ sẽ b&aacute;o cho Romeo đến hầm mộ cứu n&agrave;ng trốn khỏi th&agrave;nh Verona.</p><p>Đ&aacute;m cưới giữa Juliet v&agrave; Paris trở th&agrave;nh đ&aacute;m tang. X&aacute;c Juliet được đưa xuống hầm mộ. Tu sĩ chưa kịp b&aacute;o cho Romeo th&igrave; từ chỗ bị lưu đ&agrave;y nghe tin Juliet chết, Romeo đau đớn trốn về Verona. Tr&ecirc;n đường về ch&agrave;ng kịp mua một liều thuốc cực độc d&agrave;nh cho m&igrave;nh. Tại nghĩa địa, gặp Paris đến viếng Juliet, Romeo đ&acirc;m chết Paris rồi uống thuốc độc tự tử theo người m&igrave;nh y&ecirc;u. Romeo vừa gục xuống th&igrave; thuốc của Juliet hết hiệu nghiệm. N&agrave;ng tỉnh dậy v&agrave; nh&igrave;n thấy x&aacute;c Romeo b&ecirc;n cạnh đ&atilde; chết, Juliet r&uacute;t dao tự vẫn. C&aacute;i chết tang thương của đ&ocirc;i bạn trẻ đ&atilde; thức tỉnh hai d&ograve;ng họ. B&ecirc;n x&aacute;c hai người, hai d&ograve;ng họ đ&atilde; qu&ecirc;n mối th&ugrave; truyền kiếp v&agrave; bắt tay nhau đo&agrave;n tụ, nhưng c&acirc;u chuyện t&igrave;nh y&ecirc;u ấy vẫn m&atilde;i sẽ l&agrave; nỗi đau rất lớn trong l&ograve;ng những người biết đến họ.</p>','9830480119616','PaperBack','16 x 24 cm','2017-10-07 00:00:00.000',1000,82000.000000000000000000000000000000,348,'https://salt.tikicdn.com/cache/w1200/ts/product/3e/55/18/537403b5bc82470a0ec4cb74706e53d3.jpg','[\'https://salt.tikicdn.com/cache/w1200/ts/product/3e/55/18/537403b5bc82470a0ec4cb74706e53d3.jpg\']','2020-02-02 10:35:12.965','2020-02-02 10:35:12.965','ck5gxxw4x00g80718dmpkt93t','Đào Anh Kha, Bùi Ý, Bùi Phụng');
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BookCategory`
--

DROP TABLE IF EXISTS `BookCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BookCategory` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `name` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BookCategory`
--

LOCK TABLES `BookCategory` WRITE;
/*!40000 ALTER TABLE `BookCategory` DISABLE KEYS */;
INSERT INTO `BookCategory` VALUES ('ck5fhpyq900870718krykc3eg','Trinh thám','2020-01-15 15:59:11.121','2020-01-15 15:59:11.121'),('ck5fhqels008m0718js67ur1y','Phiêu lưu & hành động','2020-01-15 15:59:31.696','2020-01-15 15:59:31.696'),('ck5khuvjd002v0818upfh2rg3','Tình cảm & lãng mạn','2020-01-19 04:01:51.145','2020-01-19 04:01:51.145'),('ck63t10bb00c30818qwhmi7no','Kinh điển','2020-02-01 16:22:10.390','2020-02-01 16:22:10.390'),('ck63t2gme00d30818jx55yuqo','Truyện & Sách tranh','2020-02-01 16:23:18.181','2020-02-01 16:23:18.181'),('ck63t3elp00dk08185y4zr3hz','Kịch','2020-02-01 16:24:02.221','2020-02-01 16:24:02.221'),('ck63t47qy00e608184fyormhn','Cổ tích','2020-02-01 16:24:39.994','2020-02-01 16:24:39.994'),('ck63t4wxy00eq0818tqz8vm7a','Lịch sử','2020-02-01 16:25:12.646','2020-02-01 16:25:12.646'),('ck63t7ptx00gj08188klk6xtm','Viễn tưởng','2020-02-01 16:27:23.397','2020-02-01 16:27:23.397'),('ck63t80du00gu081802qtnkxz','Kinh dị','2020-02-01 16:27:37.074','2020-02-01 16:27:37.074'),('ck63t874n00h308182ubv6a1x','Hài hước','2020-02-01 16:27:45.814','2020-02-01 16:27:45.814'),('ck63t8gxl00he08181235pwo4','Thần thoại','2020-02-01 16:27:58.521','2020-02-01 16:27:58.521'),('ck63t8rm000hp08184x1rhcp5','Huyền thoại','2020-02-01 16:28:12.360','2020-02-01 16:28:12.360'),('ck63t9lc900ic0818w4d94hxw','Chủ nghĩa hiện thực huyền diệu','2020-02-01 16:28:50.889','2020-02-01 16:28:50.889'),('ck63taefw00iy0818xldi0gs3','Huyền bí','2020-02-01 16:29:28.603','2020-02-01 16:29:28.603'),('ck63tbmzj00jy0818dxu1oyl4','Hiện thực viễn tưởng','2020-02-01 16:30:26.335','2020-02-01 16:30:26.335'),('ck63tbuox00k80818n3e9nk57','Trào phúng','2020-02-01 16:30:36.321','2020-02-01 16:30:36.321'),('ck63tc2ul00ki081809jjbda6','Khoa học viễn tưởng','2020-02-01 16:30:46.892','2020-02-01 16:30:46.892'),('ck63tc90b00kr08187wf9f5lk','Truyện ngắn','2020-02-01 16:30:54.875','2020-02-01 16:30:54.875'),('ck63tcyo900lb0818xf7xwpr0','Hồi hộp & Kịch tính','2020-02-01 16:31:28.136','2020-02-01 16:31:28.136'),('ck63tdrsu00lx08187o5kllre','Tiểu sử & Tự truyện','2020-02-01 16:32:05.886','2020-02-01 16:32:05.886'),('ck63tega500mh0818fkja58vm','Tiểu luận','2020-02-01 16:32:37.613','2020-02-01 16:32:37.613'),('ck63teqqg00ms0818b1l7ljjt','Hồi ký','2020-02-01 16:32:51.159','2020-02-01 16:32:51.159'),('ck63tfl6j00nf0818e6p5shtk','Các ấn phẩm định kỳ','2020-02-01 16:33:30.619','2020-02-01 16:33:30.619'),('ck63tg2w800nu0818fawbe2hr','Sách tham khảo','2020-02-01 16:33:53.575','2020-02-01 16:33:53.575'),('ck63tgsto00of0818j9am5t2o','Diễn văn','2020-02-01 16:34:27.179','2020-02-01 16:34:27.179'),('ck63thc9t00ov081873jgk0wb','Sách giáo khoa','2020-02-01 16:34:52.384','2020-02-01 16:34:52.384'),('ck63thosn00p80818mr0bkv5n','Thơ','2020-02-01 16:35:08.615','2020-02-01 16:35:08.615');
/*!40000 ALTER TABLE `BookCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BookReview`
--

DROP TABLE IF EXISTS `BookReview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BookReview` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `reviewHeader` mediumtext COLLATE utf8mb4_unicode_ci,
  `reviewText` mediumtext COLLATE utf8mb4_unicode_ci,
  `rating` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `author` char(25) CHARACTER SET utf8 DEFAULT NULL,
  `book` char(25) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  KEY `book` (`book`),
  CONSTRAINT `BookReview_ibfk_1` FOREIGN KEY (`author`) REFERENCES `User` (`id`) ON DELETE SET NULL,
  CONSTRAINT `BookReview_ibfk_2` FOREIGN KEY (`book`) REFERENCES `Book` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BookReview`
--

LOCK TABLES `BookReview` WRITE;
/*!40000 ALTER TABLE `BookReview` DISABLE KEYS */;
/*!40000 ALTER TABLE `BookReview` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Collection`
--

DROP TABLE IF EXISTS `Collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Collection` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `collectionName` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `thumbnail` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Collection`
--

LOCK TABLES `Collection` WRITE;
/*!40000 ALTER TABLE `Collection` DISABLE KEYS */;
/*!40000 ALTER TABLE `Collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Discount`
--

DROP TABLE IF EXISTS `Discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Discount` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `reason` mediumtext COLLATE utf8mb4_unicode_ci,
  `discountRate` decimal(65,30) DEFAULT NULL,
  `from` datetime(3) DEFAULT NULL,
  `to` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Discount`
--

LOCK TABLES `Discount` WRITE;
/*!40000 ALTER TABLE `Discount` DISABLE KEYS */;
/*!40000 ALTER TABLE `Discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Order`
--

DROP TABLE IF EXISTS `Order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Order` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `deliveryStatus` tinyint(1) NOT NULL,
  `paymentStatus` tinyint(1) NOT NULL,
  `receivedDate` datetime(3) DEFAULT NULL,
  `beginDeliveryDate` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `customer` char(25) CHARACTER SET utf8 DEFAULT NULL,
  `shippingAddress` char(25) CHARACTER SET utf8 DEFAULT NULL,
  `paymentMethod` char(25) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer` (`customer`),
  KEY `shippingAddress` (`shippingAddress`),
  KEY `paymentMethod` (`paymentMethod`),
  CONSTRAINT `Order_ibfk_1` FOREIGN KEY (`customer`) REFERENCES `User` (`id`) ON DELETE SET NULL,
  CONSTRAINT `Order_ibfk_2` FOREIGN KEY (`shippingAddress`) REFERENCES `UserAddress` (`id`) ON DELETE SET NULL,
  CONSTRAINT `Order_ibfk_3` FOREIGN KEY (`paymentMethod`) REFERENCES `PaymentMethod` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Order`
--

LOCK TABLES `Order` WRITE;
/*!40000 ALTER TABLE `Order` DISABLE KEYS */;
/*!40000 ALTER TABLE `Order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderItem`
--

DROP TABLE IF EXISTS `OrderItem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderItem` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `price` decimal(65,30) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `item` char(25) CHARACTER SET utf8 DEFAULT NULL,
  `order` char(25) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item` (`item`),
  KEY `order` (`order`),
  CONSTRAINT `OrderItem_ibfk_1` FOREIGN KEY (`item`) REFERENCES `Book` (`id`) ON DELETE SET NULL,
  CONSTRAINT `OrderItem_ibfk_2` FOREIGN KEY (`order`) REFERENCES `Order` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderItem`
--

LOCK TABLES `OrderItem` WRITE;
/*!40000 ALTER TABLE `OrderItem` DISABLE KEYS */;
/*!40000 ALTER TABLE `OrderItem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PaymentMethod`
--

DROP TABLE IF EXISTS `PaymentMethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PaymentMethod` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `name` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PaymentMethod`
--

LOCK TABLES `PaymentMethod` WRITE;
/*!40000 ALTER TABLE `PaymentMethod` DISABLE KEYS */;
/*!40000 ALTER TABLE `PaymentMethod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Publisher`
--

DROP TABLE IF EXISTS `Publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Publisher` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `name` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `image` mediumtext COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Publisher`
--

LOCK TABLES `Publisher` WRITE;
/*!40000 ALTER TABLE `Publisher` DISABLE KEYS */;
INSERT INTO `Publisher` VALUES ('ck5gxxw4x00g80718dmpkt93t','NXB Văn Học',NULL,NULL,'2020-01-16 16:21:01.040','2020-01-16 16:21:01.040'),('ck5idg4el00on0718a29v077v','NXB Kim Đồng',NULL,NULL,'2020-01-17 16:22:51.981','2020-01-17 16:22:51.981'),('ck5khrsie00250818n2jqwroi','NXB Trẻ',NULL,NULL,'2020-01-19 03:59:27.215','2020-01-19 03:59:27.215'),('ck63tsn2s00s10818pmw8nirw','NXB Chính trị quốc gia',NULL,NULL,'2020-02-01 16:43:39.604','2020-02-01 16:43:39.604'),('ck63tuae500t50818onmyfthh','NXB Giáo dục',NULL,NULL,'2020-02-01 16:44:56.476','2020-02-01 16:44:56.476'),('ck63tui8p00tf08184ggbnnwl','NXB Hội Nhà văn',NULL,NULL,'2020-02-01 16:45:06.649','2020-02-01 16:45:06.649'),('ck63tv0i400tv08182gvgy1z6','NXB Lao động',NULL,NULL,'2020-02-01 16:45:30.316','2020-02-01 16:45:30.316'),('ck63tvfvy00u90818yk7gbjaa','NXB Thanh niên',NULL,NULL,'2020-02-01 16:45:50.254','2020-02-01 16:45:50.254'),('ck63twg4z00uz0818kmqkonq3','NXB Phụ nữ',NULL,NULL,'2020-02-01 16:46:37.234','2020-02-01 16:46:37.234'),('ck63twl1p00v70818fnhghhp9','NXB Hồng Đức',NULL,NULL,'2020-02-01 16:46:43.597','2020-02-01 16:46:43.597'),('ck64sfefz01kv08186vfcahz4','NXB Hội Nhà Văn',NULL,NULL,'2020-02-02 08:53:08.446','2020-02-02 08:53:08.446');
/*!40000 ALTER TABLE `Publisher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `username` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` mediumtext COLLATE utf8mb4_unicode_ci,
  `email` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` mediumtext COLLATE utf8mb4_unicode_ci,
  `gender` tinyint(1) DEFAULT NULL,
  `birthdate` datetime(3) DEFAULT NULL,
  `password` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receiveEmailNotification` tinyint(1) NOT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`(191)),
  UNIQUE KEY `email_UNIQUE` (`email`(191)),
  UNIQUE KEY `phone_UNIQUE` (`phone`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('6f058124-ca32-4fea-8b9c','giangnt15_admin','Nguyen Truong Giang','aquarius123654@outlook.com','0369735087',1,'1998-02-15 00:00:00.000','$2a$10$/My8BHH/vPEAA5XBEP4ae.MX8PIQN20gZT652T01tLUkhE3S1pU0.','Admin',0,'2020-01-15 15:32:16.723','2020-01-15 15:32:16.723'),('ck5fgrd1w001d07181g96vk8z','giangnt15','Nguyen Truong Giang','giangqwerty69@gmail.com','0369735088',1,'1998-02-15 00:00:00.000','$2a$10$/My8BHH/vPEAA5XBEP4ae.MX8PIQN20gZT652T01tLUkhE3S1pU0.','User',1,'2020-01-15 15:32:16.723','2020-01-15 15:32:16.723');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserAddress`
--

DROP TABLE IF EXISTS `UserAddress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserAddress` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `address` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `user` char(25) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  CONSTRAINT `UserAddress_ibfk_1` FOREIGN KEY (`user`) REFERENCES `User` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserAddress`
--

LOCK TABLES `UserAddress` WRITE;
/*!40000 ALTER TABLE `UserAddress` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserAddress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserEvent`
--

DROP TABLE IF EXISTS `UserEvent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserEvent` (
  `id` char(25) CHARACTER SET utf8 NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eventDetail` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `user` char(25) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  CONSTRAINT `UserEvent_ibfk_1` FOREIGN KEY (`user`) REFERENCES `User` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserEvent`
--

LOCK TABLES `UserEvent` WRITE;
/*!40000 ALTER TABLE `UserEvent` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserEvent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_BookToAuthor`
--

DROP TABLE IF EXISTS `_BookToAuthor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_BookToAuthor` (
  `A` char(25) CHARACTER SET utf8 NOT NULL,
  `B` char(25) CHARACTER SET utf8 NOT NULL,
  UNIQUE KEY `BookToAuthor_AB_unique` (`A`,`B`),
  KEY `B` (`B`),
  CONSTRAINT `_BookToAuthor_ibfk_1` FOREIGN KEY (`A`) REFERENCES `Author` (`id`) ON DELETE CASCADE,
  CONSTRAINT `_BookToAuthor_ibfk_2` FOREIGN KEY (`B`) REFERENCES `Book` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_BookToAuthor`
--

LOCK TABLES `_BookToAuthor` WRITE;
/*!40000 ALTER TABLE `_BookToAuthor` DISABLE KEYS */;
INSERT INTO `_BookToAuthor` VALUES ('ck5gxohh700fi0718mek2vxpr','ck5gy8ykf00h907187dx089au'),('ck5gxohh700fi0718mek2vxpr','ck5jkknga00r60718vo4vfrlt'),('ck5idf9m200oi07184p6tjusi','ck5khvcd900360818j00s3aoe'),('ck63u0c2100xk0818x0h4eucx','ck64sn4oh01lo0818qta5k6sn'),('ck63u2hp300z40818867kinak','ck64te7dc01ti0818jxp9ik97'),('ck63u1d1e00yb0818y19izlrd','ck64tq6mm020u0818prsyeypb'),('ck63u1d1e00yb0818y19izlrd','ck64tzwle026t0818z0ny19sx'),('ck63ubsn5015m0818fcpm7kz5','ck64u9izx02co0818ey28y9w2'),('ck63u9iqr01440818gw6b7zla','ck64uih1h02i60818rwdqwnpj'),('ck63u9iqr01440818gw6b7zla','ck64unn0l02lh08183umlulbg'),('ck63u9iqr01440818gw6b7zla','ck64uwxie02r908187xkmh2vh'),('ck63u72ev012j08183qlulxfm','ck64v3p5y02vh0818i8xvgyqy'),('ck63udpwv016v0818nc244vgf','ck64vufmf03bi08187dgw90b8'),('ck64w1x4i03fy0818rydsej7c','ck64w2o5i03gn0818ak740gbt');
/*!40000 ALTER TABLE `_BookToAuthor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_BookToCategory`
--

DROP TABLE IF EXISTS `_BookToCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_BookToCategory` (
  `A` char(25) CHARACTER SET utf8 NOT NULL,
  `B` char(25) CHARACTER SET utf8 NOT NULL,
  UNIQUE KEY `BookToCategory_AB_unique` (`A`,`B`),
  KEY `B` (`B`),
  CONSTRAINT `_BookToCategory_ibfk_1` FOREIGN KEY (`A`) REFERENCES `Book` (`id`) ON DELETE CASCADE,
  CONSTRAINT `_BookToCategory_ibfk_2` FOREIGN KEY (`B`) REFERENCES `BookCategory` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_BookToCategory`
--

LOCK TABLES `_BookToCategory` WRITE;
/*!40000 ALTER TABLE `_BookToCategory` DISABLE KEYS */;
INSERT INTO `_BookToCategory` VALUES ('ck5gy8ykf00h907187dx089au','ck5fhpyq900870718krykc3eg'),('ck5jkknga00r60718vo4vfrlt','ck5fhpyq900870718krykc3eg'),('ck5gy8ykf00h907187dx089au','ck5fhqels008m0718js67ur1y'),('ck5jkknga00r60718vo4vfrlt','ck5fhqels008m0718js67ur1y'),('ck64sn4oh01lo0818qta5k6sn','ck5fhqels008m0718js67ur1y'),('ck64te7dc01ti0818jxp9ik97','ck5fhqels008m0718js67ur1y'),('ck64tq6mm020u0818prsyeypb','ck5fhqels008m0718js67ur1y'),('ck5khvcd900360818j00s3aoe','ck5khuvjd002v0818upfh2rg3'),('ck64tzwle026t0818z0ny19sx','ck63t10bb00c30818qwhmi7no'),('ck64u9izx02co0818ey28y9w2','ck63t10bb00c30818qwhmi7no'),('ck64uih1h02i60818rwdqwnpj','ck63t10bb00c30818qwhmi7no'),('ck64unn0l02lh08183umlulbg','ck63t10bb00c30818qwhmi7no'),('ck64uwxie02r908187xkmh2vh','ck63t10bb00c30818qwhmi7no'),('ck64v3p5y02vh0818i8xvgyqy','ck63t10bb00c30818qwhmi7no'),('ck64vufmf03bi08187dgw90b8','ck63t10bb00c30818qwhmi7no'),('ck64w2o5i03gn0818ak740gbt','ck63t10bb00c30818qwhmi7no'),('ck64w2o5i03gn0818ak740gbt','ck63t3elp00dk08185y4zr3hz'),('ck64sn4oh01lo0818qta5k6sn','ck63t7ptx00gj08188klk6xtm'),('ck64te7dc01ti0818jxp9ik97','ck63t7ptx00gj08188klk6xtm'),('ck64tq6mm020u0818prsyeypb','ck63t7ptx00gj08188klk6xtm'),('ck64tzwle026t0818z0ny19sx','ck63tbuox00k80818n3e9nk57'),('ck64uih1h02i60818rwdqwnpj','ck63tbuox00k80818n3e9nk57'),('ck64unn0l02lh08183umlulbg','ck63tbuox00k80818n3e9nk57'),('ck64uwxie02r908187xkmh2vh','ck63tbuox00k80818n3e9nk57'),('ck64uwxie02r908187xkmh2vh','ck63tc90b00kr08187wf9f5lk'),('ck64v3p5y02vh0818i8xvgyqy','ck63tc90b00kr08187wf9f5lk'),('ck64vufmf03bi08187dgw90b8','ck63tc90b00kr08187wf9f5lk');
/*!40000 ALTER TABLE `_BookToCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_BookToCollection`
--

DROP TABLE IF EXISTS `_BookToCollection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_BookToCollection` (
  `A` char(25) CHARACTER SET utf8 NOT NULL,
  `B` char(25) CHARACTER SET utf8 NOT NULL,
  UNIQUE KEY `BookToCollection_AB_unique` (`A`,`B`),
  KEY `B` (`B`),
  CONSTRAINT `_BookToCollection_ibfk_1` FOREIGN KEY (`A`) REFERENCES `Book` (`id`) ON DELETE CASCADE,
  CONSTRAINT `_BookToCollection_ibfk_2` FOREIGN KEY (`B`) REFERENCES `Collection` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_BookToCollection`
--

LOCK TABLES `_BookToCollection` WRITE;
/*!40000 ALTER TABLE `_BookToCollection` DISABLE KEYS */;
/*!40000 ALTER TABLE `_BookToCollection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_DiscountToBook`
--

DROP TABLE IF EXISTS `_DiscountToBook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_DiscountToBook` (
  `A` char(25) CHARACTER SET utf8 NOT NULL,
  `B` char(25) CHARACTER SET utf8 NOT NULL,
  UNIQUE KEY `DiscountToBook_AB_unique` (`A`,`B`),
  KEY `B` (`B`),
  CONSTRAINT `_DiscountToBook_ibfk_1` FOREIGN KEY (`A`) REFERENCES `Book` (`id`) ON DELETE CASCADE,
  CONSTRAINT `_DiscountToBook_ibfk_2` FOREIGN KEY (`B`) REFERENCES `Discount` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_DiscountToBook`
--

LOCK TABLES `_DiscountToBook` WRITE;
/*!40000 ALTER TABLE `_DiscountToBook` DISABLE KEYS */;
/*!40000 ALTER TABLE `_DiscountToBook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bookstore@dev'
--

--
-- Dumping routines for database 'bookstore@dev'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-02 22:50:24

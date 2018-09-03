-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2018 at 06:10 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rumahouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `table_addproduk`
--

CREATE TABLE `table_addproduk` (
  `id` int(10) NOT NULL,
  `posting` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `tanggaldibuat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `table_addproduk`
--

INSERT INTO `table_addproduk` (`id`, `posting`, `nama`, `deskripsi`, `tanggaldibuat`) VALUES
(1, 'Rumah Idaman Di Kelapa Gading', 'Andre Lee', '', '2018-06-30 17:00:00'),
(2, 'Town House Di Tengah Kota', 'Rahmat Afdari', '', '2018-06-03 17:00:00'),
(3, 'AMPERA, BENOA TOWN HOUSE', 'Maya Septiani', '', '2018-06-27 17:00:00'),
(4, 'Di Jual Rumah Minimalis Di Jakarta Selatan', 'Wayudi Sait', '', '2018-05-21 17:00:00'),
(5, 'Rumah Di Kontrakaan 80 jt Di Jakarta Pusat', 'Putri Mahendra', '', '2018-05-16 17:00:00'),
(12, 'tamrin', 'city', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su', '2018-08-06 11:34:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `table_addproduk`
--
ALTER TABLE `table_addproduk`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `table_addproduk`
--
ALTER TABLE `table_addproduk`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

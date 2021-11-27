-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 27, 2021 at 05:45 AM
-- Server version: 8.0.27
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `MYSQL_DATABASE`
--
CREATE DATABASE IF NOT EXISTS `MYSQL_DATABASE` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `MYSQL_DATABASE`;

-- --------------------------------------------------------

--
-- Table structure for table `Accounts`
--

CREATE TABLE `Accounts` (
  `accountID` int NOT NULL,
  `initialAmount` decimal(13,2) NOT NULL,
  `remainingAmount` decimal(13,2) NOT NULL,
  `status` set('Active','Closed') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Accounts`
--

INSERT INTO `Accounts` (`accountID`, `initialAmount`, `remainingAmount`, `status`) VALUES
(1, '1000.00', '500.00', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `Departments`
--

CREATE TABLE `Departments` (
  `DeptID` int NOT NULL,
  `DepartmentName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Departments`
--

INSERT INTO `Departments` (`DeptID`, `DepartmentName`) VALUES
(1, 'Computer Science');

-- --------------------------------------------------------

--
-- Table structure for table `Faculty`
--

CREATE TABLE `Faculty` (
  `facultyID` int NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `deptID` int NOT NULL,
  `userID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Faculty`
--

INSERT INTO `Faculty` (`facultyID`, `firstName`, `lastName`, `deptID`, `userID`) VALUES
(1, 'Dr', 'Rem', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `Sponsors`
--

CREATE TABLE `Sponsors` (
  `sponsorID` int NOT NULL,
  `sponsorName` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Sponsor_type` set('Federal','State','Non-Profit','Internal') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Sponsors`
--

INSERT INTO `Sponsors` (`sponsorID`, `sponsorName`, `Sponsor_type`) VALUES
(1, 'Penguin Stories', 'Non-Profit');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `userID` int NOT NULL,
  `roleID` set('1','2','3','4') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`userID`, `roleID`, `username`, `password`) VALUES
(1, '1', 'admin', 'test'),
(2, '2', 'chair', 'test'),
(3, '3', 'researcher', 'test'),
(4, '4', 'worker', 'test'),
(16, '1', 'hello', 'you');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Accounts`
--
ALTER TABLE `Accounts`
  ADD PRIMARY KEY (`accountID`);

--
-- Indexes for table `Departments`
--
ALTER TABLE `Departments`
  ADD PRIMARY KEY (`DeptID`);

--
-- Indexes for table `Faculty`
--
ALTER TABLE `Faculty`
  ADD PRIMARY KEY (`facultyID`),
  ADD KEY `FK_faculty_dept` (`deptID`),
  ADD KEY `FK_faculty_userid` (`userID`);

--
-- Indexes for table `Sponsors`
--
ALTER TABLE `Sponsors`
  ADD PRIMARY KEY (`sponsorID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Accounts`
--
ALTER TABLE `Accounts`
  MODIFY `accountID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Departments`
--
ALTER TABLE `Departments`
  MODIFY `DeptID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Faculty`
--
ALTER TABLE `Faculty`
  MODIFY `facultyID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Sponsors`
--
ALTER TABLE `Sponsors`
  MODIFY `sponsorID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `userID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Faculty`
--
ALTER TABLE `Faculty`
  ADD CONSTRAINT `FK_faculty_dept` FOREIGN KEY (`deptID`) REFERENCES `Departments` (`DeptID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_faculty_userid` FOREIGN KEY (`userID`) REFERENCES `Users` (`userID`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

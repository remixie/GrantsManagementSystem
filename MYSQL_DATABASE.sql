-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Dec 04, 2021 at 03:15 AM
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
-- Stand-in structure for view `accounts`
-- (See below for the actual view)
--
CREATE TABLE `accounts` (
`facultyID` int
,`status` bit(1)
,`totalAwarded` decimal(35,2)
,`totalRemaining` decimal(36,2)
);

-- --------------------------------------------------------

--
-- Table structure for table `Departments`
--

CREATE TABLE `Departments` (
  `deptID` int NOT NULL,
  `departmentName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Departments`
--

INSERT INTO `Departments` (`deptID`, `departmentName`) VALUES
(1, 'Computer Science'),
(2, 'IT'),
(3, 'SPAR');

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
(1, 'Dr', 'Rem', 1, 2),
(2, 'Dr.', 'Fred', 1, 3),
(3, 'Romani', 'Buckley', 2, 1),
(4, 'Remoni', 'Anderson', 3, 4),
(5, 'Dr', 'Amin', 1, 18);

-- --------------------------------------------------------

--
-- Table structure for table `Grants`
--

CREATE TABLE `Grants` (
  `grantID` int NOT NULL,
  `grantName` text NOT NULL,
  `grantAmount` decimal(13,2) NOT NULL,
  `facultyID` int NOT NULL,
  `sponsorID` int NOT NULL,
  `status` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Grants`
--

INSERT INTO `Grants` (`grantID`, `grantName`, `grantAmount`, `facultyID`, `sponsorID`, `status`) VALUES
(1, 'National Grant for Chips Research', '1000.00', 2, 1, b'0'),
(2, 'National Grant for Vegetables Research', '2000.00', 5, 1, b'1'),
(3, 'Additional Grant for Chips Research', '500.00', 2, 1, b'1'),
(4, 'Additional Grant for Salsa Research', '100.00', 2, 1, b'1');

-- --------------------------------------------------------

--
-- Table structure for table `Projects`
--

CREATE TABLE `Projects` (
  `projectID` int NOT NULL,
  `projectTitle` text NOT NULL,
  `projectStartDate` date NOT NULL,
  `projectEndDate` date NOT NULL,
  `facultyID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Projects`
--

INSERT INTO `Projects` (`projectID`, `projectTitle`, `projectStartDate`, `projectEndDate`, `facultyID`) VALUES
(1, 'Theory of Nachos', '2021-11-01', '2031-11-01', 2),
(2, 'Theory of Salad', '2021-11-01', '2031-11-01', 5),
(3, 'Theory of Cheese', '2021-11-01', '2031-11-01', 2);

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
(1, 'Penguin Organization', 'Non-Profit');

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
  `transactionID` int NOT NULL,
  `date` date NOT NULL,
  `transactionAmount` decimal(13,2) NOT NULL,
  `facultyID` int NOT NULL,
  `merchant` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Transactions`
--

INSERT INTO `Transactions` (`transactionID`, `date`, `transactionAmount`, `facultyID`, `merchant`) VALUES
(1, '2021-11-03', '200.00', 2, 'Wikipedia'),
(2, '2021-11-10', '800.00', 5, 'SCSU Bookstore'),
(3, '2021-11-03', '100.00', 2, 'Nacho Digest');

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
(3, '3', 're', 'test'),
(4, '4', 'worker', 'test'),
(18, '3', 're2', 'test');

-- --------------------------------------------------------

--
-- Structure for view `accounts`
--
DROP TABLE IF EXISTS `accounts`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `accounts`  AS SELECT `g`.`facultyID` AS `facultyID`, `g`.`status` AS `status`, sum(`g`.`grantAmount`) AS `totalAwarded`, (sum(`g`.`grantAmount`) - (select sum(`t`.`transactionAmount`) from `transactions` `t` where (`t`.`facultyID` = `g`.`facultyID`))) AS `totalRemaining` FROM `grants` AS `g` WHERE (`g`.`status` = 1) GROUP BY `g`.`facultyID`, `g`.`status` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Departments`
--
ALTER TABLE `Departments`
  ADD PRIMARY KEY (`deptID`);

--
-- Indexes for table `Faculty`
--
ALTER TABLE `Faculty`
  ADD PRIMARY KEY (`facultyID`),
  ADD KEY `FK_faculty_dept` (`deptID`),
  ADD KEY `FK_faculty_userid` (`userID`);

--
-- Indexes for table `Grants`
--
ALTER TABLE `Grants`
  ADD PRIMARY KEY (`grantID`),
  ADD KEY `fk_grantsfaculty` (`facultyID`),
  ADD KEY `fk_grantsponsor` (`sponsorID`);

--
-- Indexes for table `Projects`
--
ALTER TABLE `Projects`
  ADD PRIMARY KEY (`projectID`),
  ADD KEY `FK_projectfaculty` (`facultyID`);

--
-- Indexes for table `Sponsors`
--
ALTER TABLE `Sponsors`
  ADD PRIMARY KEY (`sponsorID`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`transactionID`),
  ADD KEY `fk_transactionfaculty` (`facultyID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Departments`
--
ALTER TABLE `Departments`
  MODIFY `deptID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Faculty`
--
ALTER TABLE `Faculty`
  MODIFY `facultyID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Grants`
--
ALTER TABLE `Grants`
  MODIFY `grantID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Projects`
--
ALTER TABLE `Projects`
  MODIFY `projectID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Sponsors`
--
ALTER TABLE `Sponsors`
  MODIFY `sponsorID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Transactions`
--
ALTER TABLE `Transactions`
  MODIFY `transactionID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `userID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Faculty`
--
ALTER TABLE `Faculty`
  ADD CONSTRAINT `FK_faculty_dept` FOREIGN KEY (`deptID`) REFERENCES `Departments` (`deptID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_faculty_userid` FOREIGN KEY (`userID`) REFERENCES `Users` (`userID`) ON UPDATE CASCADE;

--
-- Constraints for table `Grants`
--
ALTER TABLE `Grants`
  ADD CONSTRAINT `fk_grantsfaculty` FOREIGN KEY (`facultyID`) REFERENCES `Faculty` (`facultyID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_grantsponsor` FOREIGN KEY (`sponsorID`) REFERENCES `Sponsors` (`sponsorID`) ON UPDATE CASCADE;

--
-- Constraints for table `Projects`
--
ALTER TABLE `Projects`
  ADD CONSTRAINT `FK_projectfaculty` FOREIGN KEY (`facultyID`) REFERENCES `Faculty` (`facultyID`) ON UPDATE CASCADE;

--
-- Constraints for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD CONSTRAINT `fk_transactionfaculty` FOREIGN KEY (`facultyID`) REFERENCES `Faculty` (`facultyID`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 28. Sep 2022 um 13:15
-- Server-Version: 10.1.29-MariaDB
-- PHP-Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `pizza_bestellung`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_bestellung`
--

CREATE TABLE `tbl_bestellung` (
  `BID` int(11) NOT NULL,
  `KUNDENNAME` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `tbl_bestellung`
--

INSERT INTO `tbl_bestellung` (`BID`, `KUNDENNAME`) VALUES
(1, 'Schmidt');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_pizza`
--

CREATE TABLE `tbl_pizza` (
  `BID` int(11) DEFAULT NULL,
  `PID` int(11) NOT NULL,
  `SID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `tbl_pizza`
--

INSERT INTO `tbl_pizza` (`BID`, `PID`, `SID`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_sorten`
--

CREATE TABLE `tbl_sorten` (
  `SID` int(11) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `tbl_sorten`
--

INSERT INTO `tbl_sorten` (`SID`, `NAME`) VALUES
(1, 'Salami'),
(2, 'Margherita'),
(3, 'Thunfisch');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `tbl_bestellung`
--
ALTER TABLE `tbl_bestellung`
  ADD PRIMARY KEY (`BID`);

--
-- Indizes für die Tabelle `tbl_pizza`
--
ALTER TABLE `tbl_pizza`
  ADD PRIMARY KEY (`PID`);

--
-- Indizes für die Tabelle `tbl_sorten`
--
ALTER TABLE `tbl_sorten`
  ADD PRIMARY KEY (`SID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

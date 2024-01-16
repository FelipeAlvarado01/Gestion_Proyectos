-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-01-2024 a las 05:57:40
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acoproyectos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `projectID` int(11) NOT NULL,
  `usuarioID` int(11) NOT NULL,
  `nombre_proyecto` varchar(100) NOT NULL,
  `anio` int(11) NOT NULL,
  `clasificacion` varchar(50) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_final` date NOT NULL,
  `progreso` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`projectID`, `usuarioID`, `nombre_proyecto`, `anio`, `clasificacion`, `fecha_inicio`, `fecha_final`, `progreso`) VALUES
(18, 0, 'Prueba', 2024, 'Internos TI', '0008-08-08', '0008-08-08', 50),
(19, 0, 'Prueba', 2024, 'Internos TI', '0008-08-08', '0008-08-08', 8),
(20, 0, 'Prueba', 2024, 'Internos TI', '0008-08-08', '0008-08-08', 5),
(23, 0, 'ventana', 2024, 'Internos TI', '0008-08-08', '0008-08-08', 8),
(28, 0, 'hola', 205, 'bd', '0005-05-05', '0005-05-05', 5),
(29, 0, 'Prueba', 2024, 'Internos TI', '0004-04-04', '0004-04-04', 4),
(30, 0, 'Prueba hola ', 2024, 'Hola', '0008-08-08', '0008-08-08', 5),
(31, 0, 'Prueba hola we', 2026, 'bd', '0008-08-08', '0008-08-08', 5),
(32, 0, 'ventana', 205, '', '0008-08-08', '0008-08-08', 5),
(33, 0, 'ventana', 2024, '', '0005-05-05', '0005-05-05', 5),
(34, 0, 'Prueba hola', 2024, '', '0006-06-06', '0006-06-06', 8),
(35, 0, 'ventana', 205, 'goToMarket', '0008-08-08', '0008-08-08', 8),
(36, 1, 'Prueba', 2025, 'goToMarket', '0008-08-08', '0008-08-08', 5),
(37, 0, 'Prueba 2', 9090, 'goToMarket', '0009-09-09', '0009-09-09', 5),
(38, 0, 'ventana', 2024, 'goToMarket', '0006-06-06', '0006-06-06', 6),
(39, 1, 'Prueba', 2024, 'goToMarket', '2024-01-15', '2026-01-16', 5),
(40, 0, 'Prueba', 2025, 'goToMarket', '0099-09-09', '0099-09-09', 9),
(41, 0, 'Prueba hola we', 2026, 'goToMarket', '2004-05-08', '2005-08-05', 5),
(42, 1, 'Prueba', 205, 'goToMarket', '0008-08-08', '0008-08-08', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`projectID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `projectID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

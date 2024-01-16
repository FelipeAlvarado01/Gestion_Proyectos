

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acoproyectos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `tareasID` int(11) NOT NULL,
  `projectID` int(11) NOT NULL,
  `nombre_tarea` varchar(100) NOT NULL,
  `colaboradores` varchar(500) NOT NULL,
  `progreso` int(11) NOT NULL,
  `anexos` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`tareasID`, `projectID`, `nombre_tarea`, `colaboradores`, `progreso`, `anexos`) VALUES
(1, 0, 'Prueba18', 'felipe', 20, 'ninguno'),
(2, 0, 'Prueba18', 'felipe', 20, 'ninguno'),
(3, 0, 'Prueba18-2', 'felipe', 0, 'ninguno'),
(4, 0, 'Prueba18-3', 'Juna', 5, 'ninguno'),
(5, 0, 'Prueba18-4', 'Alez', 8, 'hola'),
(6, 0, 'Prueba18-4', 'Alez', 8, 'hola'),
(7, 0, 'Prueba18', 'felipe', 10, 'hola'),
(8, 18, 'Prueba18-5', 'jhon', 5, 'fgdfg'),
(9, 18, 'Prueba18-4', 'felipe', 6, 'hola'),
(10, 36, 'Prueba36-3', 'felipe', 5, 'ninguno'),
(11, 36, 'Prueba18-2', 'dasd', 1, 'adsasd'),
(12, 36, 'Prueba18-3', 'felipe', 8, 'ninguno');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`tareasID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `tareasID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

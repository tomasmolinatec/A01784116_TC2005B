DROP SCHEMA IF EXISTS pokemon;
CREATE SCHEMA pokemon;
USE pokemon;

DROP TABLE IF EXISTS `elemento`;
CREATE TABLE `elemento` (
  `elemento_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `debilidad_id`INT,
  `fortaleza_id`INT,
  PRIMARY KEY (`elemento_id`),
  FOREIGN KEY (`debilidad_id`) REFERENCES `elemento`(`elemento_id`),
  FOREIGN KEY (`fortaleza_id`) REFERENCES `elemento`(`elemento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



DROP TABLE IF EXISTS `carta`;
CREATE TABLE `carta` (
  `carta_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  `vida` int NOT NULL,
  `habilidad` varchar(45) ,
  `rareza` varchar(45) NOT NULL,
  `elemento_id`INT NOT NULL,
  PRIMARY KEY (`carta_id`),
  FOREIGN KEY(`elemento_id`) REFERENCES `elemento`(`elemento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `ataque`;
CREATE TABLE `ataque` (
  `ataque_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  `costo_energia` int NOT NULL,
  `daño` INT NOT NULL ,
  `tipo` varchar(45) NOT NULL,
  `habilidad` varchar(45) ,
  PRIMARY KEY (`ataque_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `ataques-carta`;
CREATE TABLE `ataques-carta` (
  `ataques-carta_id` int NOT NULL AUTO_INCREMENT,
  `carta_id` INT NOT NULL,
  `ataque_id` INT NOT NULL,
  PRIMARY KEY (`ataques-carta_id`),
  FOREIGN KEY (`carta_id`) REFERENCES `carta`(`carta_id`),
  FOREIGN KEY (`ataque_id`) REFERENCES `ataque`(`ataque_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `jugador`;
CREATE TABLE `jugador` (
  `jugador_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `nivel` INT NOT NULL,
  `partidas_jugadas` INT NOT NULL,
  `partidas_ganadas` INT NOT NULL,
  `winstreak_actual` INT NOT NULL,
  `winstreak_mayor` INT NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  PRIMARY KEY (`jugador_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `inventario`;
CREATE TABLE `inventario`(
	`inventario_id`INT NOT NULL AUTO_INCREMENT,
    `carta_id` INT NOT NULL,
    `jugador_id`INT NOT NULL,
    PRIMARY KEY (`inventario_id`),
    FOREIGN KEY (`carta_id`) REFERENCES `carta`(`carta_id`),
	FOREIGN KEY (`jugador_id`) REFERENCES `jugador`(`jugador_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `mazo`;
CREATE TABLE `mazo`(
	`mazo_id`INT NOT NULL AUTO_INCREMENT,
    `jugador_id`INT NOT NULL,
    `nombre`varchar(45) NOT NULL,
    `descripcion` VARCHAR (120),
    `numero_cartas`INT NOT NULL,
    PRIMARY KEY (`mazo_id`),
    FOREIGN KEY (`jugador_id`) REFERENCES `jugador`(`jugador_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `mazo-inventario`;
CREATE TABLE `mazo-inventario`(
	`mazo_inventario_id`INT NOT NULL AUTO_INCREMENT,
    `mazo_id`INT NOT NULL,
    `inventario_id` INT NOT NULL,
    PRIMARY KEY (`mazo_inventario_id`),
    FOREIGN KEY (`mazo_id`) REFERENCES `mazo`(`mazo_id`),
    FOREIGN KEY (`inventario_id`) REFERENCES `inventario`(`inventario_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `partida`;
CREATE TABLE `partida`(
	`partida_id`INT NOT NULL AUTO_INCREMENT,
    `jugador1_id`INT NOT NULL,
    `jugador2_id` INT NOT NULL,
    `ganador_id` INT NOT NULL,
    `numero_turnos`INT NOT NULL,
    `fecha` DATETIME NOT NULL,
    `tiempo` TIME NOT NULL,
    PRIMARY KEY (`partida_id`),
    FOREIGN KEY (`jugador1_id`) REFERENCES `jugador`(`jugador_id`),
    FOREIGN KEY (`jugador2_id`) REFERENCES `jugador`(`jugador_id`),
	FOREIGN KEY (`ganador_id`) REFERENCES `jugador`(`jugador_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `turno`;
CREATE TABLE `turno`(
	`turno_id`INT NOT NULL AUTO_INCREMENT,
    `partida_id`INT NOT NULL,
    `tiempo` TIME NOT NULL,
    `historial`varchar(300) NOT NULL,
    `numero` INT NOT NULL,
    PRIMARY KEY (`turno_id`),
    FOREIGN KEY (`partida_id`) REFERENCES `partida`(`partida_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;






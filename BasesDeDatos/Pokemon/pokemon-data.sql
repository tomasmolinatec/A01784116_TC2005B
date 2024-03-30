USE pokemon;

INSERT INTO elemento (nombre) VALUES 
('Fuego'), #1
('Agua'), #2
('Planta'), #3
('Electrico'), #4
('Hielo'), #5
('Lucha'), #6
('Veneno'), #7
('Tierra'), #8
('Psiquico'), #9
('Roca'); #10

UPDATE elemento SET debilidad_id = 2, fortaleza_id = 3 WHERE elemento_id = 1;
UPDATE elemento SET debilidad_id = 4, fortaleza_id = 1 WHERE elemento_id = 2;
UPDATE elemento SET debilidad_id = 1, fortaleza_id = 2 WHERE elemento_id = 3;
UPDATE elemento SET debilidad_id = 8, fortaleza_id = 2 WHERE elemento_id = 4;
UPDATE elemento SET debilidad_id = 1, fortaleza_id = 3 WHERE elemento_id = 5;
UPDATE elemento SET debilidad_id = 9, fortaleza_id = 10 WHERE elemento_id = 6;
UPDATE elemento SET debilidad_id = 8, fortaleza_id = 3 WHERE elemento_id = 7;
UPDATE elemento SET debilidad_id = 2, fortaleza_id = 4 WHERE elemento_id = 8;
UPDATE elemento SET debilidad_id = 7, fortaleza_id = 6 WHERE elemento_id = 9;
UPDATE elemento SET debilidad_id = 3, fortaleza_id = 1 WHERE elemento_id = 10;


INSERT INTO carta (nombre, descripcion, vida, habilidad, rareza, elemento_id) VALUES 
('Pikachu', 'Pokémon ratón eléctrico, muy ágil y rápido.', 35, 'Impactrueno', 'Común', 4),
('Charizard', 'Pokémon dragón de fuego, puede causar incendios.', 120, 'Llamarada', 'Raro', 1),
('Blastoise', 'Pokémon tortuga de agua, dispara agua a presión.', 100, 'Hidrobomba', 'Raro', 2),
('Venusaur', 'Pokémon planta con una gran flor en su espalda.', 100, 'Rayo Solar', 'Raro', 3),
('Jolteon', 'Evolución eléctrica de Eevee, muy rápido.', 65, 'Trueno', 'Poco común', 4),
('Machamp', 'Pokémon luchador con cuatro brazos, muy fuerte.', 90, 'Golpe Karate', 'Poco común', 6),
('Alakazam', 'Pokémon psíquico, tiene poderes telepáticos.', 55, 'Psíquico', 'Raro', 9),
('Geodude', 'Pokémon roca, parece una roca con brazos.', 40, 'Lanzarrocas', 'Común', 10),
('Gyarados', 'Pokémon de agua, muy temido por su ferocidad.', 95, 'Hidrobomba', 'Muy raro', 2),
('Abomasnow', 'Pokémon planta-hielo, parece un abeto nevado.', 90, 'Ventisca', 'Poco común', 5);

INSERT INTO ataque (nombre, descripcion, costo_energia, daño, tipo, habilidad) VALUES 
('Impactrueno', 'Un potente ataque eléctrico que puede paralizar al oponente.', 2, 40, 'Eléctrico', 'Parálisis'),
('Llamarada', 'Un feroz ataque de fuego que quema todo a su paso.', 3, 90, 'Fuego', 'Quemadura'),
('Hidrobomba', 'Un masivo chorro de agua dirigido al oponente.', 2, 110, 'Agua', NULL),
('Rayo Solar', 'Acumula energía solar para lanzar un devastador rayo.', 4, 120, 'Planta', NULL),
('Trueno', 'Un rayo que cae del cielo, dañando severamente al oponente.', 2, 100, 'Eléctrico', 'Parálisis'),
('Golpe Karate', 'Un poderoso golpe físico que puede derribar al oponente.', 1, 50, 'Lucha', NULL),
('Psíquico', 'Ataque mental que puede confundir al oponente.', 3, 90, 'Psíquico', 'Confusión'),
('Lanzarrocas', 'Arroja rocas al oponente, con posibilidad de hacerlo retroceder.', 2, 40, 'Roca', 'Retroceso'),
('Hidrobomba', 'Un masivo chorro de agua dirigido al oponente, idéntico al de Blastoise.', 3, 110, 'Agua', NULL),
('Ventisca', 'Una tormenta de hielo que congela todo, con chance de congelar al objetivo.', 2, 110, 'Hielo', 'Congelación');


INSERT INTO `ataque-carta`VALUES (1,1,1),
(2,2,2),
(3,3,3),
(4,4,4),
(5,5,5),
(6,6,6),
(7,7,7),
(8,8,8),
(9,9,9),
(10,10,10);

INSERT INTO jugador (nombre, nivel, partidas_jugadas, partidas_ganadas, winstreak_actual, winstreak_mayor, contraseña) VALUES 
('Jugador1', 5, 20, 10, 2, 5, 'contraseña1'),
('Jugador2', 10, 40, 25, 3, 10, 'contraseña2'),
('Jugador3', 8, 30, 15, 4, 8, 'contraseña3'),
('Jugador4', 12, 50, 30, 5, 12, 'contraseña4'),
('Jugador5', 7, 25, 12, 0, 7, 'contraseña5'),
('Jugador6', 15, 60, 45, 10, 15, 'contraseña6'),
('Jugador7', 3, 15, 5, 1, 3, 'contraseña7'),
('Jugador8', 20, 80, 60, 20, 20, 'contraseña8'),
('Jugador9', 1, 5, 1, 0, 1, 'contraseña9'),
('Jugador10', 25, 100, 70, 25, 25, 'contraseña10');

INSERT INTO inventario VALUES (1,1,1),
(2,2,2),
(3,3,3),
(4,4,4),
(5,5,5),
(6,6,6),
(7,7,7),
(8,8,8),
(9,9,9),
(10,10,10);

INSERT INTO mazo (jugador_id, nombre, descripcion, numero_cartas) VALUES 
(1, 'Mazo1', 'Desc Mazo1', 1),
(2, 'Mazo2', 'Desc Mazo2', 1),
(3, 'Mazo3', 'Desc Mazo3', 1),
(4, 'Mazo4', 'Desc Mazo4', 1),
(5, 'Mazo5', 'Desc Mazo5', 1),
(6, 'Mazo6', 'Desc Mazo6', 1),
(7, 'Mazo7', 'Desc Mazo7', 1),
(8, 'Mazo8', 'Desc Mazo8', 1),
(9, 'Mazo9', 'Desc Mazo9', 1),
(10, 'Mazo10', 'Desc Mazo10', 1);

INSERT INTO `mazo-inventario` VALUES (1,1,1),
(2,2,2),
(3,3,3),
(4,4,4),
(5,5,5),
(6,6,6),
(7,7,7),
(8,8,8),
(9,9,9),
(10,10,10);

INSERT INTO partida (jugador1_id, jugador2_id, ganador_id, numero_turnos, fecha, tiempo) VALUES 
(1, 2, 1, 10, '2023-10-01', '00:30:00'),
(3, 4, 4, 8, '2023-10-02', '00:25:00'),
(5, 6, 5, 12, '2023-10-03', '00:45:00'),
(7, 8, 8, 7, '2023-10-04', '00:20:00'),
(9, 10, 10, 15, '2023-10-05', '01:00:00'),
(2, 3, 3, 9, '2023-10-06', '00:35:00'),
(4, 5, 5, 11, '2023-10-07', '00:50:00'),
(6, 7, 6, 6, '2023-10-08', '00:15:00'),
(8, 9, 9, 13, '2023-10-09', '00:55:00'),
(1, 10, 1, 14, '2023-10-10', '01:05:00');

INSERT INTO turno (partida_id, tiempo, historial, numero) VALUES 
(1, '00:05:00', 'Datos de turno', 1),
(1, '00:10:00', 'Datos de turno', 2),
(2, '00:05:00', 'Datos de turno', 1),
(2, '00:10:00', 'Datos de turno', 2),
(3, '00:05:00', 'Datos de turno', 1),
(3, '00:10:00', 'Datos de turno', 2),
(4, '00:05:00', 'Datos de turno', 1),
(4, '00:10:00', 'Datos de turno', 2),
(5, '00:05:00', 'Datos de turno', 1),
(5, '00:10:00', 'Datos de turno', 2),
(6, '00:05:00', 'Datos de turno', 1),
(6, '00:10:00', 'Datos de turno', 2),
(7, '00:05:00', 'Datos de turno', 1),
(7, '00:10:00', 'Datos de turno', 2),
(8, '00:05:00', 'Datos de turno', 1),
(8, '00:10:00', 'Datos de turno', 2),
(9, '00:05:00', 'Datos de turno', 1),
(9, '00:10:00', 'Datos de turno', 2),
(10, '00:05:00', 'Datos de turno', 1),
(10, '00:10:00', 'Datos de turno', 2);



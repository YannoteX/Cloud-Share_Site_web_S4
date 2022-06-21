-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 20 Juin 2022 à 23:13
-- Version du serveur :  5.7.11
-- Version de PHP :  7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projet_site_web`
--

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `src` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `OWNER` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tags` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `images`
--

INSERT INTO `images` (`ID`, `NAME`, `src`, `OWNER`, `tags`) VALUES
(1, 'High rise buildings with trees', '/IMG/High+rise+buildings+with+trees.jpg', 'website', '$nature$city'),
(2, 'family portrait', '/IMG/Family_Portrait.jpg', 'website', '$family$nature'),
(3, 'vieilles personnes jeux cartes societe', '/IMG/istockphoto-1190632382-612x612.jpg', 'website', '$family'),
(4, 'personne agees souriante allongée lit retraite', '/IMG/maisons-de-retraite-publiques', 'website', '$family'),
(5, 'entrée garderie pour enfants', '/IMG/Entrée.jpg', 'website', '$family'),
(6, 'logo famille', '/IMG/famille.png', 'website', '$family'),
(7, 'un dimanche en famille', '/IMG/plage-famille-La-Grande-Motte-1024x682.jpg', 'website', '$family$beach'),
(8, 'logo famille personnes enfants adults couleurs', '/IMG/45242932-logo-personnes-enfants-de-famille-avec-des-enfants-organisation-de-l-équipe-sociale.png', 'website', '$family'),
(9, 'Circular economy and the impact on our environment', '/IMG/kreislaufwirtschaft.jpg', 'website', '$nature'),
(10, 'Papier peint vinyle Bamboo Forest Arbres Nature Concept Thèmes', '/IMG/papiers-peints-bamboo-forest-arbres-nature-concept.jpg', 'website', '$nature'),
(11, 'batiment vegetal ecologie vert', '/IMG/At-one-with-nature-the-philosophy-of-organic-architecture_i1140.jpg', 'website', '$nature$building'),
(12, 'logo arbre feuille tronc bois', '/IMG/vector-tree-with-roots.jpg', 'website', '$nature'),
(13, 'Cretes de montagne illustration vectorielle du lever du soleil', '/IMG/cretes-montagne-illustration-vectorielle-du-lever-du-soleil_105738-948.jpg', 'website', '$nature$mountain'),
(14, 'ville nuit buildings autoroute phares voitures', '/IMG/ville.jpg', 'website', '$city'),
(15, 'ville france tour eiffel paris', '/IMG/shutterstock_257674933.jpg', 'website', '$city'),
(16, 'immeubles foret arbres batiments ville futur', '/IMG/image3.jpg', 'website', '$city$nature'),
(17, 'ville logo concept batiment vectorielle city land', '/IMG/city-land-building-template-design-logo-illustration-vector.jpg', 'website', '$city');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `mail` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `passwd` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `TYPE` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `contactable` tinyint(4) NOT NULL,
  `bio` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`ID`, `NAME`, `mail`, `passwd`, `TYPE`, `contactable`, `bio`) VALUES
(1, 'website', 'example@foo.xyz', 'Test12345&', 'artist', 0, NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`ID`,`NAME`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `NAME` (`NAME`),
  ADD KEY `OWNER` (`OWNER`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`) USING BTREE,
  ADD UNIQUE KEY `NAME` (`NAME`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`OWNER`) REFERENCES `users` (`NAME`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

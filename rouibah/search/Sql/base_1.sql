-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 12 Octobre 2017 à 19:26
-- Version du serveur :  5.5.57-0+deb8u1
-- Version de PHP :  5.6.30-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `base_1`
--

-- --------------------------------------------------------

--
-- Structure de la table `blog`
--

CREATE TABLE IF NOT EXISTS `blog` (
`id` int(6) NOT NULL,
  `image` varchar(300) NOT NULL,
  `title` varchar(30) NOT NULL,
  `descr` varchar(250) NOT NULL,
  `jour` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `code`
--

CREATE TABLE IF NOT EXISTS `code` (
`id` int(15) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `jour` varchar(10) NOT NULL,
  `heure` varchar(5) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `g_code` varchar(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
`id` int(15) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `jour` varchar(10) NOT NULL,
  `heure` varchar(5) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `message` varchar(300) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `devis`
--

CREATE TABLE IF NOT EXISTS `devis` (
`id` int(10) unsigned NOT NULL,
  `ip` varchar(30) NOT NULL,
  `jour` varchar(10) NOT NULL,
  `heure` varchar(5) DEFAULT NULL,
  `sexe` varchar(3) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `societe` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `tel` varchar(10) DEFAULT NULL,
  `message` varchar(250) DEFAULT NULL,
  `type` varchar(900) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

CREATE TABLE IF NOT EXISTS `membres` (
`id` int(6) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE IF NOT EXISTS `notification` (
`id` int(15) NOT NULL,
  `jour` varchar(10) NOT NULL,
  `title` varchar(30) NOT NULL,
  `noti` varchar(250) NOT NULL,
  `rep` varchar(3) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `number_badge`
--

CREATE TABLE IF NOT EXISTS `number_badge` (
`id` int(20) NOT NULL,
  `token` varchar(250) NOT NULL,
  `badge` int(2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `shared`
--

CREATE TABLE IF NOT EXISTS `shared` (
`id` int(15) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `jour` varchar(10) NOT NULL,
  `heure` varchar(5) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `token_table`
--

CREATE TABLE IF NOT EXISTS `token_table` (
`id` int(20) NOT NULL,
  `jour` varchar(10) NOT NULL,
  `heure` varchar(5) NOT NULL,
  `token` varchar(250) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `visiteurs`
--

CREATE TABLE IF NOT EXISTS `visiteurs` (
`id` int(10) unsigned NOT NULL,
  `ip` varchar(30) NOT NULL,
  `jour` varchar(10) NOT NULL,
  `heure` varchar(5) DEFAULT NULL,
  `page` varchar(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;




--
-- Index pour les tables exportées
--

--
-- Index pour la table `blog`
--
ALTER TABLE `blog`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `code`
--
ALTER TABLE `code`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `devis`
--
ALTER TABLE `devis`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `membres`
--
ALTER TABLE `membres`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `number_badge`
--
ALTER TABLE `number_badge`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `shared`
--
ALTER TABLE `shared`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `test`
--
ALTER TABLE `test`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `token_table`
--
ALTER TABLE `token_table`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `visiteurs`
--
ALTER TABLE `visiteurs`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `blog`
--
ALTER TABLE `blog`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `code`
--
ALTER TABLE `code`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `devis`
--
ALTER TABLE `devis`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `membres`
--
ALTER TABLE `membres`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `number_badge`
--
ALTER TABLE `number_badge`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `shared`
--
ALTER TABLE `shared`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `test`
--
ALTER TABLE `test`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `token_table`
--
ALTER TABLE `token_table`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
--
-- AUTO_INCREMENT pour la table `visiteurs`
--
ALTER TABLE `visiteurs`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=0;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

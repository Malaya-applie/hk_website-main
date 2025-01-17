-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2024 at 04:44 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `categoryId` int(10) UNSIGNED NOT NULL,
  `introduction` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `author` varchar(255) NOT NULL DEFAULT 'Hitesh Khunt',
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brand_logos`
--

CREATE TABLE `brand_logos` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brand_logos`
--

INSERT INTO `brand_logos` (`id`, `name`, `logo`, `createdAt`, `updatedAt`) VALUES
(1, 'Logo 1', '1731301518683-Logo 1.png', '2024-11-11 05:05:18', '2024-11-11 05:05:18'),
(2, 'Logo 2', '1731301535862-Logo 2.png', '2024-11-11 05:05:35', '2024-11-11 05:05:35'),
(3, 'Logo 3', '1731301547334-Logo 3.png', '2024-11-11 05:05:47', '2024-11-11 05:05:47'),
(4, 'Logo 4', '1731301557359-Logo 4.png', '2024-11-11 05:05:57', '2024-11-11 05:05:57');

-- --------------------------------------------------------

--
-- Table structure for table `case_studies`
--

CREATE TABLE `case_studies` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `points` longtext NOT NULL,
  `button_text` varchar(255) NOT NULL,
  `button_link` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `case_studies`
--

INSERT INTO `case_studies` (`id`, `title`, `description`, `points`, `button_text`, `button_link`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Rheingold Edelmetall AG', '<p>Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.<br>Liechtenstein is considered one of the safest countries in the world and offers incomparable protection of investments and personal reserves due to its special legal situation.<br>Unlike a bank, at Rheingold every purchase of precious metals is physically deposited. This makes you for years the most trusted partner, in terms of precious metal investments.</p>', '<ul><li>WebShop Development</li><li>Interaction Design</li><li>Global trade</li><li>Integrity and Good Governance</li></ul>', 'Explore more Insights', '#', '1731942072819-Rheingold.png', '2024-11-18 15:01:12', '2024-11-19 14:10:36'),
(2, 'Rheingold Edelmetall AG', '<p>Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.<br>Liechtenstein is considered one of the safest countries in the world and offers incomparable protection of investments and personal reserves due to its special legal situation.<br>Unlike a bank, at Rheingold every purchase of precious metals is physically deposited. This makes you for years the most trusted partner, in terms of precious metal investments.</p>', '<ul><li>WebShop Development</li><li>Interaction Design</li><li>Global trade</li><li>Integrity and Good Governance</li></ul>', 'Explore more Insights', '#', '1731942158912-Rheingold.png', '2024-11-18 15:02:38', '2024-11-19 14:11:11');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'test', '2024-10-25 06:47:37', '2024-10-25 06:47:37'),
(2, 'blog', '2024-10-25 06:47:51', '2024-10-25 06:47:51');

-- --------------------------------------------------------

--
-- Table structure for table `client_feedbacks`
--

CREATE TABLE `client_feedbacks` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `feedback` varchar(255) NOT NULL,
  `userimage` varchar(255) DEFAULT 'default user.jpg',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client_feedbacks`
--

INSERT INTO `client_feedbacks` (`id`, `name`, `position`, `company`, `feedback`, `userimage`, `createdAt`, `updatedAt`) VALUES
(1, 'Markus Freeman', 'Chief Enablement Officer ', 'Azious', '<p>“Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.”</p>', '1732112946279-avatar.png', '2024-11-20 14:29:06', '2024-11-20 14:29:06'),
(2, 'Markus Freeman', 'Chief Enablement Officer', 'Azious', '<p>“Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.”</p>', '1732112994966-avatar.png', '2024-11-20 14:29:54', '2024-11-20 14:29:54'),
(3, 'Markus Freeman', 'Chief Enablement Officer', 'Azious', '<p>“Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.”</p>', '1732113035472-avatar.png', '2024-11-20 14:30:35', '2024-11-20 14:30:35'),
(4, 'Markus Freeman', 'Chief Enablement Officer', 'Azious', '<p>“Rheingold Edelmetall AG is active in the trade of precious metals and combines since its inception in 2013, the highest quality standards in the purchase, sale of precious metals, where the high-security storage also plays a central role.”</p>', '1732113067408-avatar.png', '2024-11-20 14:31:07', '2024-11-20 14:31:07');

-- --------------------------------------------------------

--
-- Table structure for table `inquiries`
--

CREATE TABLE `inquiries` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `service` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `labels`
--

CREATE TABLE `labels` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `labels`
--

INSERT INTO `labels` (`id`, `label`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'round_image', 'http://3.111.143.152/api/img/1730967750275-Group 139.png', '2024-11-08 05:58:40', '2024-11-08 10:13:26'),
(2, 'footer_text', 'WOULD LIKE TO CHECK IF I CAN HELP?', '2024-11-08 06:16:47', '2024-11-08 06:16:47'),
(3, 'site_name', 'Hitesh Khunt', '2024-11-08 06:21:59', '2024-11-08 06:21:59'),
(4, 'footer_btn_text', 'GET IN TOUCH', '2024-11-08 06:29:46', '2024-11-08 06:29:46'),
(5, 'footer_btn_url', '#', '2024-11-08 06:29:53', '2024-11-08 06:29:53'),
(6, 'footer_form_title', 'DO YOU HAVE AN IDEA OR A CHALLENGE?', '2024-11-08 08:41:50', '2024-11-08 08:41:50'),
(7, 'footer_form_text', 'Let\'s find a way to your success together!', '2024-11-08 08:42:06', '2024-11-08 08:42:06'),
(8, 'footer_background', 'http://3.111.143.152/api/img/1731055603361-6567b40647ad466af7dd3e6e_pop-up-bg 1.png', '2024-11-08 08:47:28', '2024-11-08 08:47:28'),
(9, 'hero_title_1', 'Helping shoulder the weight of change & growth.', '2024-11-11 04:50:22', '2024-11-15 14:16:04'),
(10, 'hero_title_2', 'We help businesses and nonprofits accelerate, sustain and maintain change to inspire growth and innovation.', '2024-11-11 04:51:04', '2024-11-11 04:51:04'),
(11, 'hero_background', 'http://3.111.143.152/api/img/1731310256936-Hero 1.png', '2024-11-11 07:31:12', '2024-11-11 07:31:12'),
(12, 'main_image', 'http://3.111.143.152/api/img/1731311522083-Portraits - Classic Black ï¼ White 1.png', '2024-11-11 07:52:37', '2024-11-11 07:52:37'),
(13, 'hero_text', 'Senior consultant with expertise in tech, marketing, design, and AI.', '2024-11-11 08:04:59', '2024-11-11 08:04:59'),
(14, 'statistics_1_stat', '57%', '2024-11-13 04:52:52', '2024-11-13 04:52:52'),
(15, 'statistics_1_title', 'Customer Satisfaction & Retention', '2024-11-13 04:53:08', '2024-11-13 04:53:08'),
(16, 'statistics_1_description', 'Improved Customer satisfaction and retention 57% across the board making long-term client relationships — instead of one-time sales.', '2024-11-13 04:53:50', '2024-11-13 04:53:50'),
(17, 'statistics_2_stat', '$4.55M', '2024-11-13 04:54:22', '2024-11-13 04:54:22'),
(18, 'statistics_2_title', 'Revenue Growth', '2024-11-13 04:54:37', '2024-11-13 04:55:24'),
(19, 'statistics_2_description', 'Achieved $4.55M revenue growth.', '2024-11-13 04:55:07', '2024-11-13 04:55:07'),
(20, 'statistics_3_stat', '65%', '2024-11-13 04:55:59', '2024-11-13 04:55:59'),
(21, 'statistics_3_title', 'Operational Efficiency', '2024-11-13 04:56:15', '2024-11-13 04:56:48'),
(22, 'statistics_3_description', 'Increased efficiency via process improvements.', '2024-11-13 04:56:38', '2024-11-13 04:56:38'),
(23, 'statistics_4_stat', '40%', '2024-11-13 04:57:20', '2024-11-13 04:58:33'),
(24, 'statistics_4_title', 'Sales & Conversion', '2024-11-13 04:58:22', '2024-11-13 04:58:22'),
(25, 'statistics_4_description', 'Increased sales and conversion stats, by an average of 40%, increasing the pace of business to a great extent. ', '2024-11-13 04:58:59', '2024-11-13 04:58:59'),
(26, 'statistics_4_image', 'http://3.111.143.152/api/img/1731474004052-statistics-4.png', '2024-11-13 05:00:31', '2024-11-13 05:00:31'),
(27, 'statistics_title', 'Solving Your Business Challenges with Practical Strategies', '2024-11-13 05:08:36', '2024-11-13 05:08:36'),
(28, 'statistics_description', 'It’s easy to get results you want with the top-quality partnership', '2024-11-13 05:09:05', '2024-11-13 05:09:05'),
(29, 'section_text_1', 'SUCCESSFUL BUSINESS', '2024-11-15 15:36:18', '2024-11-15 15:40:27'),
(30, 'section_text_2', '- built on working and adoptable processes', '2024-11-15 15:36:43', '2024-11-15 15:36:43'),
(31, 'service_slider_title', 'I am here for you and your business - every step of the way.', '2024-11-18 13:41:42', '2024-11-18 13:42:11'),
(32, 'service_slider_text', 'Here’s how I can help you improve various aspects of your business.', '2024-11-18 13:42:45', '2024-11-18 13:42:45'),
(33, 'service_slider_btn_text', 'Let’s connect', '2024-11-18 13:43:33', '2024-11-18 13:43:33'),
(34, 'service_slider_btn_url', '#', '2024-11-18 13:43:45', '2024-11-18 13:43:45'),
(35, 'case_study_title', 'Successful Leaders Build Successful Firms', '2024-11-18 15:03:56', '2024-11-18 15:03:56'),
(36, 'client_feedback_title', 'Client Feedback', '2024-11-20 14:46:43', '2024-11-20 14:46:43'),
(37, 'award_title', 'Awards & Recognition', '2024-11-20 15:29:16', '2024-11-20 15:29:16'),
(38, 'award_description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis hendrerit diam consectetur suscipit. Pellentesque id mauris eu tellus dapibus euismod. Praesent eu malesuada augue. Nunc massa est, tristique at nisl eu, pharetra volutpat quam.', '2024-11-20 15:29:37', '2024-11-20 15:29:37'),
(39, 'award_rating_text', 'Reviewed by Our Customers', '2024-11-20 15:30:12', '2024-11-20 15:30:12'),
(40, 'award_btn_text', 'LEARN MORE', '2024-11-20 15:30:35', '2024-11-20 15:30:35'),
(41, 'award_btn_url', '#', '2024-11-20 15:30:52', '2024-11-20 15:30:52'),
(42, 'award_1', 'http://3.111.143.152/api/img/1732116758029-award 1.png', '2024-11-20 15:32:49', '2024-11-20 15:32:49'),
(43, 'award_2', 'http://3.111.143.152/api/img/1732116778994-award 2.png', '2024-11-20 15:33:05', '2024-11-20 15:33:05'),
(44, 'award_3', 'http://3.111.143.152/api/img/1732116795856-award 3.png', '2024-11-20 15:33:25', '2024-11-20 15:33:25'),
(45, 'award_4', 'http://3.111.143.152/api/img/1732116828713-award 4.png', '2024-11-20 15:33:58', '2024-11-20 15:43:11'),
(46, 'newsletter_title', 'Sign Up for Our Newsletters', '2024-11-20 16:35:08', '2024-11-20 16:35:08'),
(47, 'newsletter_text', 'Get notified of my the best blogs.', '2024-11-20 16:35:24', '2024-11-20 16:35:24');

-- --------------------------------------------------------

--
-- Table structure for table `navbar`
--

CREATE TABLE `navbar` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `navbar`
--

INSERT INTO `navbar` (`id`, `name`, `link`, `createdAt`, `updatedAt`) VALUES
(1, 'ABOUT ME', '/about-me', '2024-10-24 09:26:48', '2024-10-24 09:26:48'),
(2, 'ACHIEVEMENTS', '/achievements', '2024-10-24 09:26:48', '2024-10-24 09:26:48'),
(3, 'SOLUTIONS', '/solutions', '2024-10-24 09:26:48', '2024-10-24 09:26:48'),
(4, 'BLOG', '/blog', '2024-10-24 09:26:48', '2024-10-24 09:26:48');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_signups`
--

CREATE TABLE `newsletter_signups` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `agreed` tinyint(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter_signups`
--

INSERT INTO `newsletter_signups` (`id`, `name`, `email`, `agreed`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test@gmail.com', 1, '2024-11-20 16:34:06', '2024-11-20 16:34:06');

-- --------------------------------------------------------

--
-- Table structure for table `portfolios`
--

CREATE TABLE `portfolios` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `problem` longtext NOT NULL,
  `solution` longtext NOT NULL,
  `impact_1_title` varchar(255) DEFAULT NULL,
  `impact_1_stats` varchar(255) DEFAULT NULL,
  `impact_2_title` varchar(255) DEFAULT NULL,
  `impact_2_stats` varchar(255) DEFAULT NULL,
  `impact_3_title` varchar(255) DEFAULT NULL,
  `impact_3_stats` varchar(255) DEFAULT NULL,
  `impact_4_title` varchar(255) DEFAULT NULL,
  `impact_4_stats` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portfolios`
--

INSERT INTO `portfolios` (`id`, `title`, `heading`, `problem`, `solution`, `impact_1_title`, `impact_1_stats`, `impact_2_title`, `impact_2_stats`, `impact_3_title`, `impact_3_stats`, `impact_4_title`, `impact_4_stats`, `image`, `createdAt`, `updatedAt`) VALUES
(2, 'Rheingold Edelmetall AG', 'Minting Success with Enhanced Customer Satisfaction', '<p>Rheingold Edelmetall AG, a precious metals trading company, faced challenges in maintaining customer satisfaction due to outdated communication and transaction processes.</p>', '<p>We implemented a state-of-the-art CRM system that integrated all customer interactions and automated follow-ups, ensuring that clients received timely and personalized communication.</p>', 'Customer satisfaction increased by', '35%', 'Transaction processing time reduced by', '50%', 'Boosted sales by', '20%', 'Generating additional revenue of', '$500,000', '1732198175370-Mask group.png', '2024-11-21 14:09:35', '2024-11-21 14:09:35');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemigrations`
--

CREATE TABLE `sequelizemigrations` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemigrations`
--

INSERT INTO `sequelizemigrations` (`name`) VALUES
('01-01-create-user.ts'),
('02-01-create-navbar.ts'),
('03-01-create-labels.ts'),
('04-01-create-brand-logo.ts'),
('05-01-create-client-feedback.ts'),
('06-01-create-newsletter-signup.ts'),
('07-01-create-services.ts'),
('08-01-create-inquiry.ts'),
('09-01-create-case-study copy.ts'),
('10-01-create-portfolio.ts'),
('11-01-create-social-media.ts'),
('12-01-create-category.ts'),
('13-01-create-blog.ts'),
('14-01-case-study-alter.ts'),
('15-01-portfolio-alter.ts');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizeseeders`
--

CREATE TABLE `sequelizeseeders` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizeseeders`
--

INSERT INTO `sequelizeseeders` (`name`) VALUES
('01-01-demo-user.ts'),
('02-01-initial-navbar.ts');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL DEFAULT 'default icon.jpg',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `description`, `icon`, `createdAt`, `updatedAt`) VALUES
(1, 'Solutions Architecture', 'I design scalable, efficient solutions architectures, integrating technologies for seamless performance and future growth.', '1731937180576-Solutions Architecture.png', '2024-11-18 13:39:40', '2024-11-18 13:39:40'),
(2, 'Technology Consulting', 'I provide expert technology consulting, guiding digital transformation, IT strategy development, and technology roadmapping for businesses.', '1731937206446-Technology Consulting.png', '2024-11-18 13:40:06', '2024-11-18 13:40:06'),
(3, 'Fractional CTO Services', 'As a Fractional CTO, I provide part-time executive leadership, strategic guidance, team management, and risk mitigation.', '1731937237865-Fractional CTO Services.png', '2024-11-18 13:40:37', '2024-11-18 13:40:37'),
(4, 'Technology Consulting', 'I provide expert technology consulting, guiding digital transformation, IT strategy development, and technology roadmapping for businesses.', '1731940642587-Technology Consulting.png', '2024-11-18 14:37:22', '2024-11-18 14:37:22');

-- --------------------------------------------------------

--
-- Table structure for table `social_media`
--

CREATE TABLE `social_media` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `social_media`
--

INSERT INTO `social_media` (`id`, `name`, `link`, `logo`, `createdAt`, `updatedAt`) VALUES
(2, 'Facebook', '#', '1731054080363-Vector.svg', '2024-11-07 05:51:48', '2024-11-08 09:03:25'),
(3, 'Twitter', '#', '1731054236781-Vector (1).svg', '2024-11-08 08:23:56', '2024-11-08 09:03:39'),
(4, 'Youtube', '#', '1731054251130-Vector (2).svg', '2024-11-08 08:24:11', '2024-11-08 09:03:51'),
(5, 'Linkedin', '#', '1731054261945-Vector (3).svg', '2024-11-08 08:24:21', '2024-11-08 09:04:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'User', 'admin@example.com', '$2b$10$nOnx6Xs0GRR3.picLOZGLu3gHb5L.ZoxyFtaJkW/vxoZfyy5aRPa2', 'admin', '2024-10-24 09:26:48', '2024-10-24 09:26:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `brand_logos`
--
ALTER TABLE `brand_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `case_studies`
--
ALTER TABLE `case_studies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_feedbacks`
--
ALTER TABLE `client_feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inquiries`
--
ALTER TABLE `inquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `navbar`
--
ALTER TABLE `navbar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsletter_signups`
--
ALTER TABLE `newsletter_signups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemigrations`
--
ALTER TABLE `sequelizemigrations`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `sequelizeseeders`
--
ALTER TABLE `sequelizeseeders`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_media`
--
ALTER TABLE `social_media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brand_logos`
--
ALTER TABLE `brand_logos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `case_studies`
--
ALTER TABLE `case_studies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `client_feedbacks`
--
ALTER TABLE `client_feedbacks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `inquiries`
--
ALTER TABLE `inquiries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `labels`
--
ALTER TABLE `labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `navbar`
--
ALTER TABLE `navbar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `newsletter_signups`
--
ALTER TABLE `newsletter_signups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `social_media`
--
ALTER TABLE `social_media`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

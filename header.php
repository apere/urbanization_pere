<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package urbanization_pere
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<script type="text/javascript" src="<?php echo get_bloginfo('template_directory');?>/assets/jquery-3.1.0.min.js" ></script>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<header id="masthead" class="site-header" role="banner">
		<?php 
			// header here
		?>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
			<div class = "nav-wrapper">
		<nav>
			<img id="office-logo" src="<?php echo get_bloginfo('template_directory');?>/assets/OFFICE_Logo_Final.svg">
			<ul>
				<li data-link="premises">Premises</li>
				<li data-link="positions">Positions</li>
				<li data-link="projects">Projects</li>
				<li data-link="people">People</li>
				<li data-link="publics">Publics</li> 
			</ul>
		</nav>
		<img id="gsd-logo" src="<?php echo get_bloginfo('template_directory');?>/assets/GSD_logo1.svg">
	</div>

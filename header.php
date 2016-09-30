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
<script type="text/javascript" src="<?php echo get_bloginfo('template_directory');?>/js/jquery-3.1.0.min.js" ></script>
<script type="text/javascript" src="<?php echo get_bloginfo('template_directory');?>/js/jquery-ui.js" ></script>
<script type="text/javascript" src="<?php echo get_bloginfo('template_directory');?>/js/jquery.event.move.js" ></script>
<script type="text/javascript" src="<?php echo get_bloginfo('template_directory');?>/js/jquery.event.swipe.js" ></script>
<?php wp_head(); ?>
<script type="text/javascript">
	var templateUrl = '<?= get_bloginfo("template_url"); ?>';
</script>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<header id="masthead" class="site-header" role="banner">
		<?php 
			// header here
		?>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
		<?php get_template_part('nav'); ?>

<?php

get_header(); ?>
	<div class = "nav-wrapper">
		<nav>
			<img id="office-logo" src="<?php echo get_bloginfo('template_directory');?>/assets/OFFICE_Logo_Final.svg">
			<ul>
				<a><li>Premises</li></a>
				<a><li>Positions</li></a>
				<a><li>Projects</li></a>
				<a><li>People</li></a>
				<a><li>Publics</li></a>
			</ul>
		</nav>
		<img id="gsd-logo" src="<?php echo get_bloginfo('template_directory');?>/assets/GSD_logo1.svg">
	</div>
	

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
	 		 // main content info here
		?>
			
			

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

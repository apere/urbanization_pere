<div id="mobile-post-head">
	<img id="mobile-proj-hamburger" src="<?php echo get_bloginfo('template_directory');?>/assets/imgs/mobile-logo.svg">
</div>

<div id="nav-mobile-logo">
	<img id="office-logo-mobile" src="<?php echo get_bloginfo('template_directory');?>/assets/OFFICE_Logo_Final.svg">
</div>

<div class = "nav-wrapper">
		<nav>
			<img id="office-logo" src="<?php echo get_bloginfo('template_directory');?>/assets/OFFICE_Logo_Final.svg">
			<ul>
				<li >
					<div data-link="premises" class="link">Premises</div>
					<?php 
						get_template_part('sections-premises-nav');
					?>
				</li>
				<li >
					<div data-link="positions" class="link">Positions</div>
					<?php 
						get_template_part('sections-positions-nav');
					?>
				</li>
				<li>
					<div data-link="projects" class="link">Projects</div>
					<?php 
						get_template_part('sections-projects-nav');
					?>
				</li>
				<li>
					<div data-link="people" class="link">People</div>
					<?php 
						get_template_part('sections-people-nav');
					?>
				</li>
				<li>
					<div data-link="publics" class="link">Publics</div>
					<?php 
						get_template_part('sections-publics-nav');
					?>
				</li>
				
			</ul>
		</nav>
		<img id="gsd-logo" src="<?php echo get_bloginfo('template_directory');?>/assets/GSD_logo1.svg">
	</div>
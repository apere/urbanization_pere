<section id="projects-nav" class = "nav-section-content">
	<article class="section-content">
		<h1>Projects</h1>
		<main>
			<ul id="project-list" class = "section-list">
			<?php if ( have_posts() ) : ?>
			<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'projects' );
				endwhile;
		endif; ?>
			</ul>
		</main>
	</article>
</section>

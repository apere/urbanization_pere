<section id="projects">
	<article class="section-content">
		<h1>Projects</h1>
		<main>
			<?php if ( have_posts() ) : ?>
			<ul id="project-list" class = "section-list">
				<?php query_posts($query_string . "&order=ASC&posts_per_page=200"); ?>
			<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'projects' );
				endwhile;
		endif; ?>
			</ul>
			
		</main>
	</article>
</section>

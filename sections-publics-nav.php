<section id="publics-nav" class="nav-section-content">
	<article class="nav-section-content">
		<h1>Projects</h1>
		<main>
			<?php if ( have_posts() ) : ?>
			<ul id="public-list" class = "nav-section-list">
			<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'publics' );
				endwhile;
		endif; ?>
			</ul>
		</main>
	</article>
</section>
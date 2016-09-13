<section id="publics-nav" class="nav-section-content">
	<article class="nav-section-content">
		<h1>Publics</h1>
		<main>
			<ul id="public-list" class = "nav-section-list">
				<?php query_posts($query_string . "&order=ASC&posts_per_page=200"); ?>
				<?php if ( have_posts() ) : ?>
				<?php
					while ( have_posts() ) : the_post();
						get_template_part( 'template-parts/content', 'publics' );
					endwhile;
			endif; ?>
			</ul>
		</main>
	</article>
</section>
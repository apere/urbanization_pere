<section id="publics">
	<article class="section-content">
		<h1>Publics</h1>
		<main>
			<?php query_posts($query_string . "&order=ASC&posts_per_page=200"); ?>
			<?php if ( have_posts() ) : ?>
			<ul id="public-list" class = "section-list">
			<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'publics' );
				endwhile;
		endif; ?>
			</ul>
		</main>
	</article>
</section>
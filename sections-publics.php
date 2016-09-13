<section id="publics">
	<article class="section-content">
		<h1>Publics</h1>
		<main>
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
<section id="people">
	<article class="section-content">
		<h1 >People</h1>
		<main>
		<?php query_posts($query_string . "&order=ASC"); ?>
		<?php if ( have_posts() ) : ?>
			<ul id="people-list" class = "section-list">
			<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'people' );
				endwhile;
		endif; ?>
			</ul>
			
			<div id="people-person" class="person-content closed">
			</div>
		</main>
	</article>
</section>

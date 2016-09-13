<section id="people-nav" class = "nav-section-content">
	<article class="nav-section-content">
		<h1 >People</h1>
		<main>
			<ul id="people-list" class = "section-list">
		<?php query_posts($query_string . "&order=ASC"); ?>
		<?php if ( have_posts() ) : ?>
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

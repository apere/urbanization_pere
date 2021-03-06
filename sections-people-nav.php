<section id="people-nav" class = "nav-section-content">
	<article class="nav-section-content">
		<h1 >People</h1>
		<main>
			<ul id="people-list" class = "section-list">
		<?php if ( have_posts() ) : ?>
			<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'people-nav' );
				endwhile;
		endif; ?>
			</ul>
			
			<div id="people-person" class="person-content closed">
			</div>
		</main>
	</article>
</section>

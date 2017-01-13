<section id="people">
	<article class="section-content">
		<h1 >People</h1>
		<main>
			<ul id="people-list" class = "section-list">
		<?php if ( have_posts() ) : ?>
			<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'people' );
				endwhile;
		endif; ?>
			</ul>
			
			<ul id="people-person-content-list" class="person-content">
				<?php if ( have_posts() ) : ?>
						<?php
							while ( have_posts() ) : the_post();
								get_template_part( 'template-parts/content', 'person' );
							endwhile;
					endif; ?>		
			</ul>
		</main>
	</article>
</section>

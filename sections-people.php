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
			
			<ul id="people-person-content-list" class="person-content closed">
				<?php if ( have_posts() ) : ?>
						<?php
							while ( have_posts() ) : the_post();
								get_template_part( 'template-parts/content', 'person' );
							endwhile;
					endif; ?>
				<div class="close-me">^</div>				
			</ul>
		</main>
	</article>
</section>

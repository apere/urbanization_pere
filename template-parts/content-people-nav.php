<?php
/**
 * Template part for displaying results in search pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package urbanization_pere
 */

?>

	<?php if(has_category('People')): ?>
		<li data-posturl="<?php echo(get_permalink()) ?>" class="<?php if( $post->post_content == "" ) {
    echo "person-link-object no-content"; } else {echo "person-link-object";}?>">
				<span><?php the_title() ?></span>
			<div class = "person-content nav-person-content">
				<?php 
					the_content()
				?>
			</div>
		</li>
	<?php endif; ?>
	

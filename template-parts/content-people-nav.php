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
    echo "no-content"; }?>">
				<span><?php the_title() ?></span>
			<div class = "person-content nav-person-content closed">
				<?php 
					the_content()
				?>
				<div class = 'close-me'>^</div>
			</div>
		</li>
	<?php endif; ?>
	

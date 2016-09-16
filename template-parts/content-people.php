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
		<li data-posturl="<?php echo(the_title()) ?>" data-posturl="<?php echo(get_permalink()) ?>" class="<?php if( $post->post_content == "" ) {
    echo "no-content"; }?>">
				<?php the_title() ?>
		</li>
	<?php endif; ?>
	

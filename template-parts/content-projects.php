<?php
/**
 * Template part for displaying results in search pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package urbanization_pere
 */

?>

	<?php if(has_category('Projects')): ?>
		<li><a href ="<?php echo(get_permalink()) ?>"><?php the_title() ?></a></li>
	<?php endif; ?>
	

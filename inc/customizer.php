<?php
/**
 * urbanization_pere Theme Customizer.
 *
 * @package urbanization_pere
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function urbanization_pere_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

}


add_action( 'customize_register', 'urbanization_pere_customize_register' );

/**
* Create Background Images and Upload Control
*/
function urbanization_pere_background_images_upload($wp_customize) {
// add a setting for the background images
$wp_customize->add_setting('urbanization_pere_background_images');
	
// Add a control to upload the images
$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'urbanization_pere_background_images',
array(
	'label' => 'Upload Background Images',
	'description' => 'Upload images for the background of the landing page',
	'section' => 'background_image',
	'settings' => 'urbanization_pere_background_images',
	) ) );
}
add_action('customize_register', 'urbanization_pere_background_images_upload');

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function urbanization_pere_customize_preview_js() {
	wp_enqueue_script( 'urbanization_pere_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'urbanization_pere_customize_preview_js' );


/**
   * Remove stuff that WordPress adds to the customizer.
   *
   * param object $wp_customize An instance of WP_Customize_Manager.
   */
function urbanization_pere_deregister( $wp_customize ) {
	
	$wp_customize -> remove_control( 'display_header_text' ); 
	$wp_customize -> remove_control( 'blogdescription' );
  $wp_customize -> remove_control( 'background_image' ); 
	$wp_customize -> remove_control( 'background_repeat' );
	$wp_customize -> remove_control( 'background_position_x' ); 
	$wp_customize -> remove_control( 'background_attachment' ); 
	
	$wp_customize -> remove_section( 'colors' ); 
  $wp_customize -> remove_section( 'header_image' ); 
	$wp_customize -> remove_section( 'static_front_page' );
	
  $wp_customize -> remove_panel( 'widgets' ); 
	$wp_customize -> remove_panel( 'nav_menus' );  
}

add_action( 'customize_register', 'urbanization_pere_deregister'  );
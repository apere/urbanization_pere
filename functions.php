<?php
/**
 * urbanization_pere functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package urbanization_pere
 */

if ( ! function_exists( 'urbanization_pere_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function urbanization_pere_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on urbanization_pere, use a find and replace
	 * to change 'urbanization_pere' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'urbanization_pere', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );


	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'urbanization_pere_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'urbanization_pere_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function urbanization_pere_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'urbanization_pere_content_width', 640 );
}
add_action( 'after_setup_theme', 'urbanization_pere_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function urbanization_pere_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'sidebar-1', 'urbanization_pere' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'urbanization_pere' )
	) );
}

add_action( 'widgets_init', 'urbanization_pere_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function urbanization_pere_scripts() {
	wp_enqueue_style( 'urbanization_pere-style', get_stylesheet_uri() );

	wp_enqueue_script( 'urbanization_pere-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'urbanization_pere-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	
	wp_enqueue_script('urbanization_pere-people', get_stylesheet_directory_uri() . '/js/people.js');
  wp_localize_script( 'urbanization_pere-people', 'myAjax', array( 'ajaxUrl' => admin_url( 'admin-ajax.php' ) ) );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'urbanization_pere_scripts' );

function do_peopleAjaxFunction()
{
    $post_id = url_to_postid($_POST['post_url']);
    $post = get_post( $post_id, OBJECT);
    $response = apply_filters( 'the_content', $post->post_content );
    echo $response;
    die();
}
add_action( 'wp_ajax_nopriv_myAjaxHandler', 'do_peopleAjaxFunction' );  
add_action( 'wp_ajax_myAjaxHandler', 'do_peopleAjaxFunction' );



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


function change_wp_search_size($queryVars) {
	$queryVars['posts_per_page'] = 300; // Change 10 to the number of posts you would like to show
	$queryVars['order'] = 'ASC';
	return $queryVars; // Return our modified query variables
}
add_filter('request', 'change_wp_search_size'); // Hook our custom function onto the request filter
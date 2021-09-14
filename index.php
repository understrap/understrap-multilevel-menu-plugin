<?php
/*
Plugin Name: Understrap Multilevel Nav Menu
Plugin URI: https://understrap.com	
Description: Create multiple level dropdown navigation menu's
Author: Howard Development & Consulting
Author URI: https://howarddc.com/
Version: 1.0
Text Domain: understrap-multilevel-menu
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/


defined( 'ABSPATH' ) || exit;

require_once dirname( __FILE__ ) . '/understrap-multilevel-bootstrap-nav-walker.php';


function understrap_load_scripts() {
	wp_enqueue_script( 'understrap-multilevel-nav-menu', plugin_dir_url( __FILE__ ). 'js/understrap-multilevel-dropdown.min.js', array('jquery'), 1.0, true );
}

add_action('wp_enqueue_scripts', 'understrap_load_scripts');
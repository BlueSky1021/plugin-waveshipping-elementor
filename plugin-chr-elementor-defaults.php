<?php
/*
Plugin Name: Chromatix Add-ons For Elementor
Plugin URI: https://github.com/ChromatixAU/base-plugin
Description:  Chromatix Add-ons For Elementor Project
Author: Tong Wu
Version: 0.0.1
GitHub Plugin URI: https://github.com/ChromatixAU/test-custom-code-for-elementor
*/
if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! defined( 'CHR_VERSION' ) ) {
  define( 'CHR_VERSION', '0.0.1' );
}

function chr_custom_code_for_elementor() {

	// Load plugin file
	require_once( __DIR__ . '/includes/plugin.php' );

	// Run the plugin
	\Chr_Custom_Code_For_Elementor\Plugin::instance();

}
add_action( 'plugins_loaded', 'chr_custom_code_for_elementor' );

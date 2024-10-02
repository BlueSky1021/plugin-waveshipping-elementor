<?php
namespace Chr_Custom_Code_For_Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

final class plugin {

  /**
	 * Instance
	 *
	 * @since 1.0.0
	 * @access private
	 * @static
	 * @var \Elementor_Test_Addon\Plugin The single instance of the class.
	 */
	private static $_instance = null;

	/**
	 * Instance
	 *
	 * Ensures only one instance of the class is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 * @return \Elementor_Test_Addon\Plugin An instance of the class.
	 */
	public static function instance() {

		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;

	}

  /**
	 * Constructor
	 *
	 * Perform some compatibility checks to make sure basic requirements are meet.
	 * If all compatibility checks pass, initialize the functionality.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {
		add_action( 'elementor/init', [ $this, 'init' ] );
	}


	/**
	 * Initialize
	 *
	 * Load the addons functionality only after Elementor is initialized.
	 *
	 * Fired by `elementor/init` action hook.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function init() {
		add_action( 'elementor/frontend/after_enqueue_styles', [ $this, 'frontend_styles' ] );
		add_action( 'elementor/frontend/after_register_scripts', [ $this, 'frontend_scripts' ] );
	}

	public function frontend_styles() {
		wp_register_style( 'chr-main-styles', plugin_dir_url( __DIR__ ) . 'dist/chr-main-styles.min.css', [], CHR_VERSION );
		wp_enqueue_style( 'chr-main-styles' );
	}

	public function frontend_scripts() {
		wp_register_script( 'chr-scripts', plugin_dir_url( __DIR__ ) . 'dist/chr-scripts.min.js', array('jquery'), CHR_VERSION );
		wp_enqueue_script( 'chr-scripts' );
	}

}

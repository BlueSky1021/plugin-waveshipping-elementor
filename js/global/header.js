const openResponsiveMainMenu = ( $mainMenu ) => {
  $mainMenu.addClass( 'opened' );
};

const closeResponsiveMainMenu = ( $mainMenu ) => {
  $mainMenu.removeClass( 'opened' );
};

const toggleResponsiveMainMenuAction = () => {
  const $body = jQuery( 'body' );
  const $hamburger = jQuery( '.chr-repsonsive-toggle-button' );
  const $mainMenu = jQuery( '.chr-responsive-menu-wrapper' );

  $hamburger.click( () => {
    
    if ( $body.attr( 'data-elementor-device-mode' ) === 'desktop' ) {
      return;
    }

    $hamburger.toggle();

    if ( $mainMenu.hasClass( 'opened' ) ) {
      closeResponsiveMainMenu( $mainMenu );
    } else {
      openResponsiveMainMenu( $mainMenu );
    }

  });

};

jQuery(window).on('elementor/frontend/init', () => {
  toggleResponsiveMainMenuAction();
});

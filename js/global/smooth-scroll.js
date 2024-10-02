import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

const smoothScroll = () => {

  // disable smooth scrolling on elementor editor page
  if ( jQuery( '.elementor-editor-active' ).length ) {
    return;
  }

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
  })

  gsap.ticker.lagSmoothing(0);

};

jQuery( document ).ready( () => {
  smoothScroll();
});

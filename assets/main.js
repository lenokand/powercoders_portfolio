
if($(".p2").length){
    function hero(){
        $(".p2").typed({
          strings: ["DEVELOPER", "CREATIVE", "DESIGNER" ],
          typeSpeed: 50,
          backSpeed: 10,
          backDelay: 2000,
          showCursor: false,
          loop: false
        });
      }
      hero()
      $('.hero-down').mousedown(function() {
        TweenMax.fromTo('.btn-react', 0.25, {
          opacity: 0,
          scale: 0
        }, {
          opacity: 0.25,
          scale: 1,
          onComplete: function() {
            TweenMax.to('.btn-react', 0.25, {
              opacity: 0,
              scale: 0
            });
          }
        });
      }
      );
}

  


  
  /**
   * Porfolio isotope and filter
   */
//   window.addEventListener('load', () => {
//     let portfolioContainer = select('.portfolio-container');
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: '.portfolio-item'
//       });

//       let portfolioFilters = select('#portfolio-flters li', true);

//       on('click', '#portfolio-flters li', function(e) {
//         e.preventDefault();
//         portfolioFilters.forEach(function(el) {
//           el.classList.remove('filter-active');
//         });
//         this.classList.add('filter-active');

//         portfolioIsotope.arrange({
//           filter: this.getAttribute('data-filter')
//         });
//         portfolioIsotope.on('arrangeComplete', function() {
//           AOS.refresh()
//         });
//       }, true);
//     }

//   });

  /**
   * Initiate portfolio lightbox 
   */
//   const portfolioLightbox = GLightbox({
//     selector: '.portfolio-lightbox'
//   });

  /**
   * Animation on scroll
   */
//   window.addEventListener('load', () => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     })
//   });
// AOS.init();




onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    
    clearTimeout(c);
  }, 1000);
};

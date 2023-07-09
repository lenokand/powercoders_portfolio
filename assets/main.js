
console.log($(".font-italic"))

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
  

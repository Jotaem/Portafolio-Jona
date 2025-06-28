// JQuery para interactuar con el DOM y manejar eventos
$(document).ready(function() {

  $('.profile-pic').on('click', function() {
    $('#saludoModal').modal('show');
  });

  $('.navbar-nav a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 800);
    }
  });

  function checkAndShowSections() {
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    $('.section-card').each(function() {
      var $this = $(this);
      var elementTop = $this.offset().top;
      if (elementTop < (windowScrollTop + windowHeight - 100)) { 
        $this.addClass('visible');
      }
    });
  }

  $(window).on('scroll', checkAndShowSections);
  
  checkAndShowSections();

});
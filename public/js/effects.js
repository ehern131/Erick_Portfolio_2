$(document).ready(function() {
  $('.work-overlay').mouseenter(function() {
    $(this).animate({
      height: '+=50px',
    });
  });
  $('#project1').mouseleave(function() {
    $(this).animate({
      height: '-=50px'
    });
  });
});

$(document).ready(function() {
  $('#project1').mouseenter(function() {
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

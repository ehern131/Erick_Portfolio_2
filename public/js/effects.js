// $(document).ready(function() {
//   $('#project1').mouseenter(function() {
//     $(this).animate({height: "+=20" });
//   })
//   $('.work-overlay').mouseleave(function() {
//     $(this).animate({height: "-=20" });
//   })
// });


$(document).ready(function(){
  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 30) {
      $("#workList").css({
        'background-color' : 'white',
        'transition-duration': '.3s',
        'transition-property': 'all',
        'transition-timing-function': 'cubic-bezier(.7,1,.7,1)',
      });
      $("#workList a").css('color', '#515769');
    }
    else {
      $("#workList").css({
        'background-color': 'rgba(0,0,0,0)',
      });
      $("#workList a").css('color', 'white');
    }
  });
});

var videoTop;
var videoHeight;
var windowWidth;
$(document).ready( function(){
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('#vimeo-wrap').outerHeight();
  if (windowWidth > 1020) {
    goDark();
  }
});

$( window ).resize(function() {
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('#vimeo-wrap').outerHeight();
  if (windowWidth > 1020) {
    goDark();
  } else {
    $('body').css('background-color', '#fff')
    $('.subhead').css('opacity', '1')
  }
});

function goDark() {
    var scrollTop = $(this).scrollTop();
      if (scrollTop >= videoTop  - 200 && scrollTop <= videoTop + (videoHeight / 8)) {
        $('body').css('background-color', '#000')
        $('.subhead').css('opacity', '0')
      } else if (scrollTop > videoTop + (videoHeight / 8)) {
        $('body').css('background-color', '#fff')
        $('.subhead').css('opacity', '1')
      } else if (scrollTop < videoTop - 200) {
        $('body').css('background-color', '#fff')
        $('.subhead').css('opacity', '1')
      };
};

$(window).scroll(function(event){
  if (windowWidth > 1020) {
    goDark();
  }
})
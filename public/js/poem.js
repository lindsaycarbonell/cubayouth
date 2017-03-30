$(document).ready(function(){

var sectionId = ["#section-0", "#section-0-img", "#section-1", "#section-1-img", "#section-2", "#section-2-img", "#section-3", "#section-3-img", "#section-4", "#section-4-img", "#section-5", "#section-5-img", "#section-6", "#section-6-img"];
var poemWindowWidth = $(window).width();
$( window ).resize(function() {
  var poemWindowWidth = $(window).width();
});

for (var i in sectionId){
  console.log('for...');
  (function(i){

    if(sectionId[i].includes('img')){

      $(sectionId[i]).waypoint(function() {
        console.log('wayp');
        if (poemWindowWidth > 520) {
          $(sectionId[i]).addClass('fadeInLeft 20s');
          console.log("SUp baby")
        }else{
          $(sectionId[i]).addClass('fadeIn 20s');
        }
      }, { offset: '60%' });
    }else{

      $(sectionId[i]).waypoint(function() {
        if (poemWindowWidth > 520) {
          $(sectionId[i]).addClass('fadeInRight 20s');
        }else{
          $(sectionId[i]).addClass('fadeIn 20s');
        }
      }, { offset: '60%' })
    }
  })(i)


}

});

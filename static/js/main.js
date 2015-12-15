// Project carousel stuff
$(document).on('slide.bs.carousel', '#carousel-example-generic', function(e) {
  var slideIndex = $(e.relatedTarget).index();

  var $projectList = $('.projects')
  $projectList.find('.active').removeClass('active');
  $projectList.children().eq(slideIndex).addClass('active');
});



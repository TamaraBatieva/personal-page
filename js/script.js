$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

// $('.bar-fill').waypoint({
//        handler: function() {
//            $(this).each(function() {
//                $(this).animate({
//                    width: $(this).attr('data-percent')
//                }, 1500);
//            });
//        },
//        offset: '95%'
//    });
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
backspace: function(curString, curStrPos){
    

    setTimeout(function() {

            // check string array position
            // on the first string, only delete one word
            // the stopNum actually represents the amount of chars to
            // keep in the current string. In my case it's 3.
            if (self.arrayPos == 2){
                self.stopNum = 4;
            }
            //every other time, delete the whole typed string
            else{
                self.stopNum = 0;
            };
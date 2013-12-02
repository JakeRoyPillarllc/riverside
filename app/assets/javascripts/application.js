// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(window).load(function() {
  $(".infobar").css("height", $(".content").height()-100);
});



ch = $(".content").height();
$(window).resize(function(){
	
	if (ch != $(".content").height()){
		$(".infobar").css("height", $(".content").height()-100);
	}

});


  function setContainerHeightToWindowHeight(){
	  	var h = windowHeight();
	    $(".container.everything").css("height", h);
    }
  function setContentHeightToImageHeight(){
		var h = windowHeight();
		$(".content").css("height", h-120);
		var h2 = $(".background-image").height();
		$(".content").css("height", h2);
    }
    function setContainerWidthToImageWidth(){
		var w2 = $(".background-image").width();
		$(".container.everything").css("width", w2);
   }


	function windowHeight() {
	  var myHeight = 0;
	  if( typeof( window.innerWidth ) == 'number' ) {
	    //Non-IE
	    myHeight = window.innerHeight;
	  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	    //IE 6+ in 'standards compliant mode'
	    myHeight = document.documentElement.clientHeight;
	  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	    //IE 4 compatible
	    myHeight = document.body.clientHeight;
	  }
	  return myHeight;
	}
	
	function windowWidth() {
	  var myWidth = 0;
	  if( typeof( window.innerWidth ) == 'number' ) {
	    //Non-IE
	    myWidth = window.innerWidth;
	  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	    //IE 6+ in 'standards compliant mode'
	    myWidth = document.documentElement.clientWidth;
	  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	    //IE 4 compatible
	    myWidth = document.body.clientWidth;
	  }
	  return myWidth;
	}
	



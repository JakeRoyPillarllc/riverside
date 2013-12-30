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



    setTimeout(function(){
    	
	if ($(window).height() < ($(".background-image").height() + 80 + 40)) {
		console.log('hi');
	 	var h = $(window).height() - 120;
	 	$(".content").css("height", h);
	 	$(".infobar").css("height", $(".content").height()-100);
	 	// $(".footer").css("position","absolute");
	 	// $(".footer").css("bottom","0");
    }

    },100);

   

	// var h = $(window).height() - 120
	// $(".content").css("height", h);
  

  //var everything_height = $(".content").height() + 80 + 40
	// if ($(window).height() < everything_height) {
	// 	var h = $(window).height() - 120
	// 	$(".content").css("height", h);
	// 	$(".footer").css("position","absolute");
	// 	$(".footer").css("bottom","0");
	// }
	// if ($(window).height() > everything_height) {
	// 	$(".content").css("height", "auto");
	// 	$(".footer").css("position","relative");
	// 	$(".footer").css("bottom","auto");
	// }

	$(".infobar").css("height", $(".content").height()-100);

});

ch = $(".content").height();
var everything_height = ch + 80 + 40;

$(window).resize(function(){
	// var h = $(window).height() - 120
	// 	$(".content").css("height", h);
	//$(".content").css("max-height", $(".background-image").height());

	everything_height = $(".content").height() + 80 + 40;
	console.log("everything height is" + everything_height);
	console.log("window height is" + $(window).height());

	 setTimeout(function(){
	 	if ($(window).height() < everything_height) {
			console.log("window is smaller");
			var h = $(window).height() - 120
			$(".content").css("height", h);
			$(".footer").css("position","absolute");
			$(".footer").css("bottom","0");
	    }	
    },100);

	
	if ($(window).height() >= everything_height) {
		console.log("window is bigger");
		$(".content").css("height", "auto");
		$(".footer").css("position","relative");
		$(".footer").css("bottom","auto");
	}

	if (ch != $(".content").height()){
		$(".infobar").css("height", $(".content").height()-100);
	}
setTimeout(function(){
  $(".infobar").css("height", $(".content").height()-100);
  $("#project-infobar").css("height", $(".content").height()-100);
},200);		
});


 //  function setContainerHeightToWindowHeight(){
	//   	var h = windowHeight();
	//     $(".container.everything").css("height", h);
 //    }
 //  function setContentHeightToImageHeight(){
	// 	var h = windowHeight();
	// 	$(".content").css("height", h-120);
	// 	var h2 = $(".background-image").height();
	// 	$(".content").css("height", h2);
 //    }
 //    function setContainerWidthToImageWidth(){
	// 	var w2 = $(".background-image").width();
	// 	$(".container.everything").css("width", w2);
 //   }


	// function windowHeight() {
	//   var myHeight = 0;
	//   if( typeof( window.innerWidth ) == 'number' ) {
	//     //Non-IE
	//     myHeight = window.innerHeight;
	//   } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	//     //IE 6+ in 'standards compliant mode'
	//     myHeight = document.documentElement.clientHeight;
	//   } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	//     //IE 4 compatible
	//     myHeight = document.body.clientHeight;
	//   }
	//   return myHeight;
	// }
	
	// function windowWidth() {
	//   var myWidth = 0;
	//   if( typeof( window.innerWidth ) == 'number' ) {
	//     //Non-IE
	//     myWidth = window.innerWidth;
	//   } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	//     //IE 6+ in 'standards compliant mode'
	//     myWidth = document.documentElement.clientWidth;
	//   } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	//     //IE 4 compatible
	//     myWidth = document.body.clientWidth;
	//   }
	//   return myWidth;
	// }
	



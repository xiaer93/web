
$(document).ready(function () {
  $("header")
	  .on("click","#mobile-nav-button",function () {
		  $("#nav-wrap").slideDown("normal");
		  $("#mobile-nav-mask").show();
	  })
	  .on("click","#mobile-nav-mask",function () {
		  $("#nav-wrap").slideUp("normal");
		  $("#mobile-nav-mask").hide();
	  });
});

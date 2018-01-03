(function($){
	
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
		  
		  
	  $("#main")
		.on("click",".bds_more",function(event){
			url=$(this).data('url');
			desc=$(this).data('excerpt');
			
		})
		.on("mouseenter",".bds_more",function(){
			url=$(this).data('url');
			desc=$(this).data('excerpt');
		});
	});
	
	var url=undefined,
		desc=undefined;
	window._bd_share_config={
		common:{
				bdDesc : desc,	
				bdUrl : url, 	
				bdSign:true,
				bdMini:1,
				bdMiniList:['tsina','weixin','sqq','evernotecn','copy'],
				onBeforeClick:function(cmd,config){
					config.bdUrl=url;
					config.bdDesc=desc;
				}
			},
				
		share:[{
				"tag":"share_1",
				"bdSize":24
			}]
	};

			/*
	浮窗分享按钮！
	slide:[{	   
		bdImg : 0,
		bdPos : "right",
		bdTop : 100
	}],
	*/
	
})(jQuery);

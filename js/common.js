$(document).ready(function() {
	$('.navbar-toggle').on("click", function(){
		$('#myTogbtn').toggleClass("active");
		var bg = $('.myNavbar').css('background-image');
		if (bg === 'none') {
			$('#carousel-cont').css('display','none');
			$('.myNavbar').css('background-image','url(img/bg-mob.png)');
		} else {
			
			$('.myNavbar').css('background-image','none');
			$('#carousel-cont').css('display','block');
		}
	})
	$('#resetBtn').on('click', function(){
		$('#textfield1').value = "";	
	 })
	$('.fa-search').on('click', function(){
		if (  $( this ).css( "transform" ) == 'none' ){
        	$(this).css("transform","rotate3d(0, 1, 0, 180deg)");
        	$(this).css("color","white");
    	} else {
       		$(this).css("transform","" );
       		$(this).css("color","#8dc63f");
    	}
		$('.search-box').fadeToggle();
	})
	
})


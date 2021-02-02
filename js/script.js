//event pada saat link di klik

$('.page-scroll').on('click',function(e){
	//console.log('ok');

	var tujuan = $(this).attr('href');
	//console.log(href);

	//sekarang tangkep element yang bersangkutan

	var elemenTujuan = $(tujuan);

	 //console.log(elemenTujuan.offset().top);

	$('html,body').animate({
			scrollTop: elemenTujuan.offset().top-60
		},1000,'easeInOutExpo');

	e.preventDefault();


	
});

//menyimpan paralax

//paralax about

$(window).on('load',function(){
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
	//console.log('ok');
});
// paralax jumbotron
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    
    $('.jumbotron img').css({
    	'transform':'translate(0px,'+scroll/4+'%)'
    });

    $('.jumbotron h1').css({
    	'transform':'translate(0px,'+scroll/4+'%)'
    });

    $('.jumbotron p').css({
    	'transform':'translate(0px,'+scroll+'%)'
    });

    //paralax portfolio

    if(scroll>$('.portfolio').offset().top-250){
    	$('.portfolio .img-thumbnail').each(function(i){
    		setTimeout(function() {
    			console.log('ok');
    			$('.portfolio .img-thumbnail').eq(i).addClass('muncul');
    		}, 300*(i+1));
    		});
    	}
    
    	//$('.portfolio .img-thumbnail').addClass('muncul');


   
});
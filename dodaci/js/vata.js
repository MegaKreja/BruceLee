var sound = new Howl({
	src: ['vata.mp3']
});
$(".jedan").on("click", function(){
	sound.play();
});
$(".dva").on("click", function(){
	sound.play();
	$('.desno').show();
    $(".desno").animate({left: "-=150%"}, 5000);
});
$(".tri").on("click", function(){
	sound.play();
	$('.levo').show();
    $(".levo").animate({left: "+=50%"}, 2500);
    $(".levo").animate({left: "-=2000"}, 2500);
    $('.desno').show();
    $(".desno").animate({left: "-=50%"}, 2500);
});

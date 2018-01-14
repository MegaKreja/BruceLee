$(document).ready(function(){
    $('img').css('display', 'none');
	$('img').fadeIn(1000);
});
$(".tbb").on("click", function(){
	$("body").addClass("kontejner");
	$(".kontejner").removeClass("kontejner drugif trecif cetvrtif petif");
	$("body").addClass("prvif");
});
$(".fof").on("click", function(){
	$("body").addClass("kontejner");
	$(".kontejner").removeClass("kontejner prvif trecif cetvrtif petif");
	$("body").addClass("drugif");
});
$(".wod").on("click", function(){
	$("body").addClass("kontejner");
	$(".kontejner").removeClass("kontejner drugif prvif cetvrtif petif");
	$("body").addClass("trecif");
});
$(".etd").on("click", function(){
	$("body").addClass("kontejner");
	$(".kontejner").removeClass("kontejner drugif trecif prvif petif");
	$("body").addClass("cetvrtif");
});
$(".god").on("click", function(){
	$("body").addClass("kontejner");
	$(".kontejner").removeClass("kontejner drugif trecif cetvrtif prvif");
	$("body").addClass("petif");
});
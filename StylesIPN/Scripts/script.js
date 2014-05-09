// JavaScript Document
/*Cuando termina de cargar la página*/
$(document).ready(function() {
	var $SlidActs = $('#SliderIPN ul li:first').addClass('active');
	StartAgenyAnun();
	StartSlider();
});
/*Tiempo de Slider*/
function StartSlider() {
	Slider=setInterval(SliderIPN, 5000 );
}
/*Tiempo de  Agenda y Anuncios*/
function StartAgenyAnun() {
	Agenda=setInterval(AgendaAnuncios, 5000 );
}

var SliderIPN = function slider() { 
	var $SlidAct = $('#SliderIPN ul li.active');
	if ( $SlidAct.length == 0 )$SlidAct = $('#SliderIPN ul li:last');
	var $next =  $SlidAct.next().length ? $SlidAct.next() : $('#SliderIPN ul li:first');
	    $SlidAct.addClass('last-active');
	    $next.css({opacity: 0}).addClass('active').animate({opacity: 1}, 1000, function() {
        $SlidAct.removeClass('active last-active');
	});
}
var AgendaAnuncios = function slideExt() {
    /*Agenda Rotatoria*/
    var Ag = $(".HomeagendaPolitecnica ul");
    if(Ag.find("li").length<=1){
    }else{
    var AgLiFr = $(".HomeagendaPolitecnica ul li:first");
        $(AgLiFr).animate({marginTop:-$(AgLiFr).height()},500,function(){
            $(Ag).find("li:last").after($(Ag).find("li:first"));
            $(this).css({marginTop:0});
    });
    }
    /*Noticias Rotatorias*/
    var Not = $(".NoticiasIPN ul");
    if(Not.find("li").length<=1){
    }else{
    var NotFr = $(".NoticiasIPN ul li:first");
        $(NotFr).animate({marginTop:-$(NotFr).height()},500,function(){
            $(Not).find("li:last").after($(Not).find("li:first"));
            $(this).css({marginTop:0});
    });
    }
}
/*Detiene el Slider*/
$('#SliderIPN ul li span').mouseenter(function(){
clearInterval(Slider);
}).mouseleave(function(){
StartSlider();
});
/*Reset*/

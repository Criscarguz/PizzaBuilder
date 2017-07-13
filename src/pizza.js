// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {

//Seleccionar clase pep y aplicarle fadeToggle
$('.btn-pepperonni').on('click', function(){
	$('[class~=pep]').fadeToggle();
});
$('.btn-mushrooms').on('click', function(){
	$('[class~=mushroom]').fadeToggle();
});
$('.btn-green-peppers').on('click', function(){
	$('[class^=green-pepper]').fadeToggle();
});





});
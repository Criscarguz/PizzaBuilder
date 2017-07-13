// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {

	//Seleccionar clase pep y aplicarle fadeToggle
	$('.btn-pepperonni').on('click', function(){
		$('[class~=pep]').fadeToggle();
		$('.btn-pepperonni').toggleClass('active');
	});
	$('.btn-mushrooms').on('click', function(){
		$('.mushroom').fadeToggle();
		$('.btn-mushrooms').toggleClass('active');
	});
	$('.btn-green-peppers').on('click', function(){
		$('[class^=green-pepper]').fadeToggle();
		$('.btn-green-peppers').toggleClass('active');
	});
	//$ ('.sauce').toggleClass('sauce-white',false);
	$ ('.btn-sauce').on('click', function(){
		$('.sauce').toggleClass('sauce-white');
		$('.btn-sauce').toggleClass('active');
	});
	$ ('.btn-crust').on('click', function(){
		$('.crust').toggleClass('crust-gluten-free');
		$('.btn-crust').toggleClass('active');
	});
	
	$('section').removeClass('sauce-white');
	$('section').removeClass('crust-gluten-free');
	$('.btn-sauce').removeClass('active');
	$('.btn-crust').removeClass('active');
	//$ ('.crust').toggleClass('crust-gluten-free',false);


});
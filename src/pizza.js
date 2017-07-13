// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {

	//Seleccionar clase pep y aplicarle fadeToggle
	$('.btn-pepperonni').on('click', function(){
		$('[class~=pep]').fadeToggle();
	});
	$('.btn-mushrooms').on('click', function(){
		$('[class~=mushroom]').fadeToggle();
		if ($('section').hasClass('mushroom')== true){
		$('btn-mushrooms').toggleClass('active');
		}
	});
	$('.btn-green-peppers').on('click', function(){
		$('[class^=green-pepper]').fadeToggle();
	});
	//$ ('.sauce').toggleClass('sauce-white',false);
	$ ('.btn-sauce').on('click', function(){
		$('.sauce').toggleClass('sauce-white');
	});
	$('section').removeClass('sauce-white');
	$('section').removeClass('crust-gluten-free');

	//$ ('.crust').toggleClass('crust-gluten-free',false);
	$ ('.btn-crust').on('click', function(){
		$('.crust').toggleClass('crust-gluten-free');
	});
	

});
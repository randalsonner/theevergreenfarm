jQuery(document).ready(function($) {

//cycle
$('#slides').cycle({
	fx: 'scrollHorz',
	slides: '.slide_item',
	next: '.next',
	prev: '.prev',
	pagerTemplate: '',
	paused: true,
	 
});


}); //END DOCUMENT
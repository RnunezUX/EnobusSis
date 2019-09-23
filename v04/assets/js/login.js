//jQuery 
$(document).ready(function(){
	$('#sendlogin').click(function() {
    	$('#loginalert').show()
    		.css( {'opacity': 0, 'bottom': '-100px', 'display': 'block' } )
			.animate( { 'opacity': '1', 'bottom' : 0 }, 500 );
  	});
});

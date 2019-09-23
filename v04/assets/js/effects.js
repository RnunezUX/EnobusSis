$(document).ready(function(){
   
    $(function() {
        $(window).resize(function() {
            if(window.innerWidth < 576){
                $('#slideModuleNav').css('left', '-100%');
                $('#openBar').click(function(){
                    $('#slideModuleNav').animate({left: '0px'});
                });
                $('#closeMoluleNav').click(function(){
                    $('#slideModuleNav').animate({left: '-100%'});
                }); 
            }else {
                $('#slideModuleNav').css('left', '0px');
            }
        }).resize();
    });
    
    //Usuario Abrir
    $('#ufUserAvatar').click(function(){
   	    $('#ufSliderBar').animate({right: '0px'});
        $('#ufModalOverlay').show();
    });
    //Usuario Cerrar
    $('#ufCloseBar').click(function(){
   	    $('#ufSliderBar').animate({right: '-333px'});
        $('#ufModalOverlay').hide();
    });

    //Notificaciones Abrir
    $('#nfNotificationBell').click(function(){
   	    $('#nfSliderBar').animate({right: '0px'});
        $('#nfModalOverlay').show();
    });
    // Notificaciones Cerrar
    $('#nfCloseBar').click(function(){
   	    $('#nfSliderBar').animate({right: '-333px'});
        $('#nfModalOverlay').hide();
    });
    

    $('#buttonSupport').click(function(){
	    $('#optionSupport').show();
	});
    $('#closeSupport').click(function(){
        $('#optionSupport').hide();
    });

    //Full-Screen & Minimize-Screen
    $('#clFsMs').click(function(){
        $('#wppModuleScroom').toggleClass('wm-fullscreen');
        $
    });

});



(function() {

    var container = document.getElementById( 'cbp-vm' ),
        optionSwitch = Array.prototype.slice.call( container.querySelectorAll( 'div.cbp-vm-options > a' ) );

    function init() {
        optionSwitch.forEach( function( el, i ) {
            el.addEventListener( 'click', function( ev ) {
                ev.preventDefault();
                _switch( this );
            }, false );
        } );
    }

    function _switch( opt ) {
        // remove other view classes and any any selected option
        optionSwitch.forEach(function(el) { 
            classie.remove( container, el.getAttribute( 'data-view' ) );
            classie.remove( el, 'cbp-vm-selected' );
        });
        // add the view class for this option
        classie.add( container, opt.getAttribute( 'data-view' ) );
        // this option stays selected
        classie.add( opt, 'cbp-vm-selected' );
    }

    init();

})();
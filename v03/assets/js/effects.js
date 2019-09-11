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
    
});
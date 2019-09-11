$(document).ready(function(){

    // Barra de menu personal
    // $('#callOptionBar').click(function() {
    //     $('#notificationsSliderBar').toggleClass('open-wrapper-jobs', [3000]);
    //     $('#userNav').toggleClass('open-user-nav', [3000]);
    // });


    // Menu Principal
    //Abrir
    // $('#openBar').click(function(){
   	//     $('#slideModuleNav').animate({left: '0px'});
    // });

    // $('#closeMoluleNav').click(function(){
   	//     $('#slideModuleNav').animate({left: '-100%'});
    // }); 
   
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
    });
    //Usuario Cerrar
    $('#ufCloseBar').click(function(){
   	    $('#ufSliderBar').animate({right: '-333px'});
    });

    //Notificaciones Abrir
    $('#nfNotificationBell').click(function(){
   	    $('#nfSliderBar').animate({right: '0px'});
    });
    // Notificaciones Cerrar
    $('#nfCloseBar').click(function(){
   	    $('#nfSliderBar').animate({right: '-333px'});
    });
    

    $('#buttonSupport').click(function(){
	    $('#optionSupport').show();
	});
    $('#closeSupport').click(function(){
        $('#optionSupport').hide();
    });
    
});
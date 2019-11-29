$(document).ready(function(){
   
   
        
        $.post("verificar.php",function(respuesta){
            if (respuesta == true) {
                $.mobile.changePage('menu.html', 'pop', true, true);
            }
            else{
                $.mobile.changePage('#pageError', 'pop', true, true);
                /*$("#errorMsg").fadeIn(300);
                $("#errorMsg").css("display", "block");*/
            }
        });
    
});
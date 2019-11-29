  
$(document).ready(function(){
	
		 // capturamos la url
    var loc = document.location.href;
	
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('=')[1];
		//alert(getString);
       $('#id_usuario').val(getString);
    } 

});
function registrar(){
	//alert("fjr");
	var datosFormulario = $("#registrar").serialize();
		//alert(datosFormulario);
		    $.ajax({
       url: 'registrar.php',
         type: 'POST',
       dataType: 'html', 
        data: datosFormulario,
           
        })
		.done(function(respuesta){
			var d = $("#id_usuario").val();
		location.href = "menu.html?num="+d;
		})
       .fail(function(){
		   console.log("error");
	   })
		
		
    }
	
	function can(){
		//alert("ho");
		var d = $("#id_usuario").val();
		location.href = "menu.html?num="+d;
	}
	function valida(){
		//alert("fgdf");
	var num1 = $("#pasword_usuario").val();
	var num2 = $("#pasword_usuario2").val();
	if(num1 == num2)
	{
		registrar();
	}
	else
		alert("la claves no son iguales");
 
}
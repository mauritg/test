
$(document).ready(function() {     

$("#formid").validate({
        rules: {
            nombre: { required: true, minlength: 2, maxlength: 20},
            apellido: { required: true, minlength: 2, maxlength: 50},
            email: { required:true, minlength: 10, maxlength: 25, email: true},
            telefono: { required:true, minlength: 10, maxlength: 15, number:true},
            poblacion: { required:true, minlength: 5, maxlength: 30},
            mensaje: { required:true, minlength: 2, maxlength: 500}
        },
		messages: {
            nombre: "&nbsp;&nbsp;Debe introducir su nombre.",
            apellido: "&nbsp;&nbsp;Debe introducir sus apellidos.",            
            email : "&nbsp;&nbsp;Debe introducir un email v&aacute;lido.",
            telefono : "&nbsp;&nbsp;El n&uacute;mero de tel&eacute;fono introducido no es correcto.",
            poblacion : "&nbsp;&nbsp;Debe introducir su poblaci&oacute;n.",
            mensaje : "&nbsp;&nbsp;El campo Mensaje es obligatorio.",
        },
        submitHandler: function(form){

         /*introduce lo que quieres que se haga cuando se vaya a enviar el 
           formulario, ya sea enviarlo por $.ajax si es este el caso te 
           recomiendo que valides el formulario también en el lado servidor          
		*/
			jQuery.ajax({
		        url:'/sitios/Telmex3/Tienda/servicios.php',
		        type:'post',
		        data:{
		           	nombre:$("#nombre").val(),
		           	apellido:$("#apellido").val(),
		            email:$("#email").val(),
		            telefono:$("#telefono").val(),
		            poblacion:$("#poblacion").val(),
		            mensaje:$("#mensaje").val(),
		            accion:'atencionCliente'
		        }
		 
		    }).done(
		        function(resp)
		        {
		        	$("#nombre").val('');
		           	$("#apellido").val('');
		            $("#email").val('');
		            $("#telefono").val('');
		            $("#poblacion").val('');
		            $("#mensaje").val('');
		            alert(resp);
		        }
		    );
        }
    });

  });
function cargarNoticias() {
    var datosFormulario = "";
    $.ajax({
        type: 'POST',
        url: 'php/cargarNoticias.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#noticias").html("Buscando Noticias ...");
        },
        success: function (json) {
            $("#noticias").html(json.contenido);
        },
        error: function (e) {
            $("#noticias").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function cargarEventos() {
    var datosFormulario = "";
    $.ajax({
        type: 'POST',
        url: 'php/cargarEventos.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#eventos").html("Buscando Eventos ...");
        },
        success: function (json) {
            $("#eventos").html(json.contenido);
        },
        error: function (e) {
            $("#eventos").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
    
}

function cargarNoticiasLink(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarNoticiasLink.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#noticias").html("Buscando Eventos ...");
        },
        success: function (json) {
            $("#noticias").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#noticias").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}


function cargarEventosLink(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarEventosLink.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#eventos").html("Buscando Eventos ...");
        },
        success: function (json) {
            $("#eventos").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#eventos").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}




function recuperarId(direccion){
    var posicion = direccion.indexOf('=');
    var longitud = direccion.length;
    var id = direccion.substring(posicion+1,longitud);
    return id;
}
function recuperarNom(direccion){
    var posicion = direccion.indexOf('=');
    var longitud = direccion.length;
    var nom = direccion.substring(posicion+1,longitud);
    return nom;
}





function cargarBuscador(nom) {
    var datosFormulario = "&nom="+nom;
    $.ajax({
        type: 'POST',
        url: 'php/cargarBuscador.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#buscadores").html("Buscando Link ...");
        },
        success: function (json) {
            $("#buscadores").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#buscadores").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function cargarEventos_1() {
    var datosFormulario = "";
    $.ajax({
        type: 'POST',
        url: 'php/cargarEventos_1.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#eventos1").html("Buscando Eventos ...");
        },
        success: function (json) {
            $("#eventos1").html(json.contenido);
        },
        error: function (e) {
            $("#eventos1").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function cargarCarousels() {
    var datosFormulario = "";
    $.ajax({
        type: 'POST',
        url: 'php/cargarCarousels.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#carousels").html("Buscando Carousels ...");
        },
        success: function (json) {
            $("#carousels").html(json.contenido);
        },
        error: function (e) {
            $("#carousels").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}

function cargarEventosPagina(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarEventosPagina.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#eventopagina").html("Buscando Eventos ...");
        },
        success: function (json) {
            $("#eventopagina").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#eventopagina").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}

function cargarModulares(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarModulares.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#cursosmodulares").html("Buscando Cursos Modulares ...");
        },
        success: function (json) {
            $("#cursosmodulares").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#cursosmodulares").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}


function  cargarNoticiasPagina(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarNoticiasPagina.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#noticiapagina").html("Buscando Eventos ...");
        },
        success: function (json) {
            $("#noticiapagina").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#noticiapagina").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function cargarSlides(){
    var datosFormulario = '';
    $.ajax({
        type: 'POST',
        url: 'php/cargarSlides.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            
        },
        success: function (json) {
            console.log(json);
            $('#slides').html(json.trs);
        },
        error: function (e) {
            console.log('ERROR');
        },
        complete: function (objeto, exito, error) {
            $('.slides').slides({full_width: true});
        }
    });
}
function cargarGalerias() {
    var datosFormulario = '';
    $.ajax({
        type: 'POST',
        url: 'php/cargarGalerias.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            
        },
        success: function (json) {
            console.log(json);
            $('#galerias').html(json.trs);
        },
        error: function (e) {
            console.log('ERROR');
        },
        complete: function (objeto, exito, error) {
            $('.galerias').galerias({full_width: true});
        }
    });
}

function cargarTecnicoTics(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarTecnicoTics.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#cursostecnicotics").html("Buscando Cursos Tecnicos TIC ...");
        },
        success: function (json) {
            $("#cursostecnicotics").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#cursostecnicotics").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function cargarTecnicoModas(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarTecnicoModas.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#cursostecnicomodas").html("Buscando Cursos Técnico de Diseño de Modas ...");
        },
        success: function (json) {
            $("#cursostecnicomodas").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#cursostecnicomodas").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}

function cargarTecnicoMecas(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarTecnicoMecas.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#cursostecnicomecas").html("Buscando Cursos Técnico de Mecatrónica ...");
        },
        success: function (json) {
            $("#cursostecnicomecas").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#cursostecnicomecas").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function cargarAdmitidos(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarAdmitidos.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#admitidos").html("Buscando Lista de Admitidos ...");
        },
        success: function (json) {
            $("#admitidos").html(json.contenido);
            console.log("--->"+json.contenido);
        },
        error: function (e) {
            $("#admitidos").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}

function cargarVideos(id) {
    var datosFormulario = "&id="+id;
    $.ajax({
        type: 'POST',
        url: 'php/cargarVideos.php',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#videos").html("Buscando Videos ...");
        },
        success: function (json) {
            $("#videos").html(json.contenido);
        },
        error: function (e) {
            $("#videos").html("Error de conexión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}


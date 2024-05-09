function buscarClientePorFiltro(filtro) {
    $.ajax({
        url: "http://localhost:8080/api/v1/cliente/busquedafiltro/" + filtro,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["idCliente"]}</td>
                    <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                    <td class="text-center align-middle">${result[i]["numeroDocumento"]}</td>
                    <td class="text-center align-middle">${result[i]["nombreCliente"]}</td>
                    <td class="text-center align-middle">${result[i]["apellidoCliente"]}</td>
                    <td class="text-center align-middle">${result[i]["telefono"]}</td>
                    <td class="text-center align-middle">${result[i]["direccion"]}</td>
                    <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarClienteBandera=false;" data-id="${result[i]["idCliente"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idCliente"]})" data-id="${result[i]["idCliente"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idCliente"]}"></i>
                    </td>
                `;
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición: " + error);
        }
    });
}

function buscarClientePorEstado(estado) {
    if (estado === '') {
        listarMedico(); // Mostrar todos los médicos si estado es vacío
    } else if (estado === 'Activo') {
        // Mostrar solo los clientes habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/cliente/busquedafiltroEstado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["numeroDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["apellidoCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarMClienteBandera=false;" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idCliente"]})" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idCliente"]}"></i>
                        </td>
                    `;
                    cuerpoTabla.appendChild(trRegistro);
                }
            },
            error: function (error) {
                alert("Error en la petición: " + error);
            }
        });
    } else {
        // Mostrar solo los médicos deshabilitados si no es vacío ni 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/cliente/busquedafiltroEstado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["numeroDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["apellidoCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarClienteBandera=false;" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idCliente"]})" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idCliente"]}"></i>
                        </td>
                    `;
                    cuerpoTabla.appendChild(trRegistro);
                }
            },
            error: function (error) {
                alert("Error en la petición: " + error);
            }
        });
    }
}






// URL de la API
var url = "http://localhost:8080/api/v1/cliente/";

// Función para listar los médicos
function listarCliente() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["idCliente"]}</td>
                    <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                    <td class="text-center align-middle">${result[i]["numeroDocumento"]}</td>
                    <td class="text-center align-middle">${result[i]["nombreCliente"]}</td>
                    <td class="text-center align-middle">${result[i]["apellidoCliente"]}</td>
                    <td class="text-center align-middle">${result[i]["telefono"]}</td>
                    <td class="text-center align-middle">${result[i]["direccion"]}</td>
                    <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarClienteBandera=false;" data-id="${result[i]["idCliente"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idCliente"]})" data-id="${result[i]["idCliente"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idCliente"]}"></i>
                    </td>
                `;
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición: " + error);
        }
    });
}

var registrarClienteBandera = true;

// Función para registrar un médico
function registrarCliente() {
    var forData = {
        "tipoDocumento": document.getElementById("tipoDocumento").value,
        "numeroDocumento": document.getElementById("numeroDocumento").value,
        "nombreCliente": document.getElementById("nombreCliente").value,
        "apellidoCliente": document.getElementById("apellidoCliente").value,
        "telefono": document.getElementById("telefono").value,
        "direccion": document.getElementById("direccion").value,
        "ciudad": document.getElementById("ciudad").value,
        "estado": document.getElementById("estado").value,
    };
    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarClienteBandera == true) {
        metodo = "POST";
        urlLocal = url;

    } else {
        metodo = "PUT";
        urlLocal = url + idCliente;
    }
    if (validarCampos()) {
        $.ajax({
            url: urlLocal,
            type: metodo,
            data: forData,
            success: function (result) {
                textoimprimir;
                $('#exampleModal').modal('hide');
                listarCliente();

                textoimprimir = Swal.fire({
                    title: "LISTO",
                    text: "Felicidades, Guardado con éxito",
                    icon: "success"
                });
            },
            error: function (error) {
                textoimprimir = Swal.fire({
                    title: "ERROR",
                    text: responseText,
                    icon: "success"
                });
            }
        });
    } else {
        Swal.fire({
            title: "Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
    }
}

// Función para validar campos
// Función  Documento Identidad
//CORREGIR ESTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
function validarCampos() {
    function validarCampoNumeroDocumento() {
        var numeroDocumento = document.getElementById("numeroDocumento");
        return validarNumeroDocumento(numeroDocumento);
    }

    // Función para validar el documento de identidad
    function validarNumeroDocumento(cuadroNumero) {
        var valor = cuadroNumero.value;
        var valido = true;

        if (valor.length < 5 || valor.length > 13) {
            valido = false;
        }

        if (valido) {
            cuadroNumero.className = "form-control is-valid";
        } else {
            cuadroNumero.className = "form-control is-invalid";
        }

        return valido;
    }


    // Función tipo documento

    function validarValidarCampoTipoDocumento() {
        var tipoDocumento = document.getElementById("tipoDocumento");
        return (tipoDocumento);
    }

    // Función para validar 

    function validarTipoDocumento(cuadroNumero) {
        var valor = cuadroNumero.value;
        var valido = true;

        if (valor.length < 1 || valor.length > 3) {
            valido = false;
        }

        if (valido) {
            cuadroNumero.className = "form-control is-valid";
        } else {
            cuadroNumero.className = "form-control is-invalid";
        }

        return valido;
    }


    // Función nombre cliente

    function validarCampoNombreCliente() {
        var nombreCliente = document.getElementById("nombreCliente");
        return validarNombreCliente(nombreCliente);
    }

    // Función para validar 
    function validarNombreCliente(cuadroNumero) {
        var valor = cuadroNumero.value;
        var valido = true;

        if (valor.length < 1 || valor.length > 45) {
            valido = false;
        }

        if (valido) {
            cuadroNumero.className = "form-control is-valid";
        } else {
            cuadroNumero.className = "form-control is-invalid";
        }

        return valido;
    }


    // Función apellido cliente

    function validarCampoApellidoCliente() {
        var apellidoCliente = document.getElementById("apellidoCliente");
        return validarApellidoCliente(apellidoCliente);
    }

    // Función para validar 
    function validarApellidoCliente(cuadroNumero) {
        var valor = cuadroNumero.value;
        var valido = true;

        if (valor.length < 1 || valor.length > 45) {
            valido = false;
        }

        if (valido) {
            cuadroNumero.className = "form-control is-valid";
        } else {
            cuadroNumero.className = "form-control is-invalid";
        }

        return valido;
    }


    // Función telefono

    function validarCampoTelefono() {
        var telefono = document.getElementById("telefono");
        return validarTelefono(telefono);
    }

    // Función para validar 
    function validarTelefono(cuadroNumero) {
        var valor = cuadroNumero.value;
        var valido = true;

        if (valor.length < 1 || valor.length > 13) {
            valido = false;
        }

        if (valido) {
            cuadroNumero.className = "form-control is-valid";
        } else {
            cuadroNumero.className = "form-control is-invalid";
        }

        return valido;
    }


    // Función Direccion

    function validarCampoDireccion() {
        var direccion = document.getElementById("direccion");
        return validarDireccion(direccion);
    }

    // Función para validar 
    function validarDireccion(cuadroNumero) {
        var valor = cuadroNumero.value;
        var valido = true;

        if (valor.length < 1 || valor.length > 45) {
            valido = false;
        }

        if (valido) {
            cuadroNumero.className = "form-control is-valid";
        } else {
            cuadroNumero.className = "form-control is-invalid";
        }

        return valido;
    }


    // Función ciudad

    function validarCampoCiudad() {
        var ciudad = document.getElementById("ciudad");
        return validarCiudad(ciudad);
    }

    // Función para validar 
    function validarCiudad(cuadroNumero) {
        var valor = cuadroNumero.value;
        var valido = true;

        if (valor.length < 1 || valor.length > 45) {
            valido = false;
        }

        if (valido) {
            cuadroNumero.className = "form-control is-valid";
        } else {
            cuadroNumero.className = "form-control is-invalid";
        }

        return valido;
    }


    // Función Estado

    function validarCampoEstado() {
        var estado = document.getElementById("estado");
        return validarEstado(estado);
    }

    // Función para validar 
    function validarEstado(cuadroNumero) {
        var valor = cuadroNumero.value;
        var valido = true;

        if (valor.length < 1 || valor.length > 45) {
            valido = false;
        }

        if (valido) {
            cuadroNumero.className = "form-control is-valid";
        } else {
            cuadroNumero.className = "form-control is-invalid";
        }

        return valido;
    }

}




// Función para limpiar campos del formulario
function limpiar() {
    document.getElementById("tipoDocumento").value = "";
    document.getElementById("tipoDocumento").className = "form-control";
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("numeroDocumento").className = "form-control";
    document.getElementById("nombreCliente").value = "";
    document.getElementById("nombreCliente").className = "form-control";
    document.getElementById("apellidoCliente").value = "";
    document.getElementById("apellidoCliente").className = "form-control";
    document.getElementById("telefono").value = "";
    document.getElementById("telefono").className = "form-control";
    document.getElementById("direccion").value = "";
    document.getElementById("direccion").className = "form-control";
    document.getElementById("ciudad").value = "";
    document.getElementById("ciudad").className = "form-control";
    document.getElementById("estado").value = "";
    document.getElementById("estado").className = "form-control";
}

var idCliente = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    limpiar();
    idCliente = $(this).data("id");

    $.ajax({
        url: url + idCliente,
        type: "GET",
        success: function (cliente) {
            document.getElementById("tipoDocumento").value = cliente.tipoDocumento;
            document.getElementById("numeroDocumento").value = cliente.numeroDocumento;
            document.getElementById("nombreCliente").value = cliente.nombreCliente;
            document.getElementById("apellidoCliente").value = cliente.apellidoCliente;
            document.getElementById("telefono").value = cliente.telefono;
            document.getElementById("direccion").value = cliente.direccion;
            document.getElementById("ciudad").value = cliente.ciudad;
            document.getElementById("estado").value = cliente.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del cliente: " + error.statusText);
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idCliente = $(this).data("id");
    $.ajax({
        url: url + idCliente,
        type: "DELETE",
        success: function () {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarCliente(); // Actualiza la lista de pacientes en el front-end
        }
    });
});



$(document).on("click", ".eliminar", function () {
    var idCliente = $(this).data("id");
    $.ajax({
        url: url + "eliminarPermanente/" + idCliente,
        type: "DELETE",
        success: function (eliminarPermanente) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registro Eliminado",
                showConfirmButton: false,
                timer: 1500
            });
            listarCliente()
        }
    })
});

// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarCliente();
});
function actualizarListarCliente() {
    listarCliente();
}


function buscarClientePorFiltro(filtro) {
    if (filtro=== '') {
        listarCliente(); // Mostrar todos los médicos si estado es vacío
    }else{
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
    
}

function buscarClientePorEstado(estado) {
    if (estado === '') {
        listarCliente(); // Mostrar todos los médicos si estado es vacío
    } else if (estado === 'H') {
        // Mostrar solo los médicos habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/cliente/busquedafiltroestado/" + estado,
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
    } else {
        // Mostrar solo los médicos deshabilitados si no es vacío ni 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/cliente/busquedafiltroestado/" + estado,
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
    var tipoDocumento = document.getElementById("tipoDocumento");
    var numeroDocumento = document.getElementById("numeroDocumento");
    var nombreCliente = document.getElementById("nombreCliente");
    var apellidoCliente = document.getElementById("apellidoCliente");
    var telefono = document.getElementById("telefono");
    var ciudad = document.getElementById("ciudad");
    var direccion = document.getElementById("direccion");
    var estado = document.getElementById("estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validartipoDocumento(tipoDocumento)) {
        // Mostrar una alerta indicando que todos los campos son obligatorios
        Swal.fire({
            title: "¡Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
        return; // Salir de la función si algún campo está vacío
    }

    var forData = {
        "tipoDocumento": tipoDocumento.value,
        "numeroDocumento": numeroDocumento.value,
        "nombreCliente": nombreCliente.value,
        "apellidoCliente": apellidoCliente.value,
        "telefono": telefono.value,
        "ciudad": ciudad.value,
        "direccion": direccion.value,
        "estado": estado.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarClienteBandera == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Registrado con éxito",
            icon: "success"
        });
    } else {
        metodo = "PUT";
        urlLocal = url + idCliente;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Guardado con éxito",
            icon: "success"
        });
    }

    if (validarCampos()) {
        $.ajax({
            url: urlLocal,
            type: metodo,
            data: forData,
            success: function (response) {
                Swal.fire({
                    title: "Éxito",
                    text: "Felicidades, Guardado con éxito",
                    icon: "success"
                }).then(function () {
                    // Aquí puedes agregar más acciones después del registro exitoso
                    $('#exampleModal').modal('hide');
                    listarCliente();
                });
            },
            error: function (xhr, status, error) {
                Swal.fire({
                    title: "Error",
                    text: "¡El número de documento ya se encuentra registrado!",
                    icon: "error"
                });
            }
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
    }
};

// Función para validar campos
// Función Documento Identidad
function validarCampos() {
    var tipoDocumento = document.getElementById("tipoDocumento");
    return validartipoDocumento(tipoDocumento);
}

// Función para validar el documento de identidad
function validartipoDocumento(cuadroNumero) {
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
    document.getElementById("ciudad").value = "";
    document.getElementById("ciudad").className = "form-control";
    document.getElementById("direccion").value = "";
    document.getElementById("direccion").className = "form-control";
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
        success: function (medico) {
            document.getElementById("tipoDocumento").value = medico.tipoDocumento;
            document.getElementById("numeroDocumento").value = medico.numeroDocumento;
            document.getElementById("nombreCliente").value = medico.nombreCliente;
            document.getElementById("apellidoCliente").value = medico.apellidoCliente;
            document.getElementById("telefono").value = medico.telefono;
            document.getElementById("ciudad").value = medico.ciudad;
            document.getElementById("direccion").value = medico.direccion;
            document.getElementById("estado").value = medico.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del médico: " + error.statusText);
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
    // Obtener el ID del médico desde el atributo data del elemento clicado
    var idCliente = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este medico?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idCliente,
                type: "DELETE",
                success: function (eliminarPermanente) {
                    // Mostrar un mensaje de éxito
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Actualizar la lista de médicos después de eliminar
                    listarCliente();
                },
                error: function (xhr, status, error) {
                    // Manejo de errores
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El registro tiene un ingreso.'
                    });
                }
            });
        }
    });
});




// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarCliente();
});
function actualizarlistarCliente() {
    listarCliente();
}


function buscarProductoPorFiltro(filtro) {
    if (filtro=== '') {
        listarProducto(); // Mostrar todos los médicos si estado es vacío
    }else{
        $.ajax({
            url: "http://localhost:8080/api/v1/producto/busquedafiltro/" + filtro,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";
    
                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["descripcion"]}</td>
                        <td class="text-center align-middle">${result[i]["cantidad"]}</td>
                        <td class="text-center align-middle">${result[i]["precio"]}</td>
                        <td class="text-center align-middle">${result[i]["IVA"]}</td>
                        <td class="text-center align-middle">${result[i]["descuento"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarProductoBandera=false;" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProducto"]})" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProducto"]}"></i>
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

function buscarProductoPorEstado(estado) {
    if (estado === '') {
        listarProducto(); // Mostrar todos los médicos si estado es vacío
    } else if (estado === 'H') {
        // Mostrar solo los médicos habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/producto/busquedafiltroestado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["descripcion"]}</td>
                        <td class="text-center align-middle">${result[i]["cantidad"]}</td>
                        <td class="text-center align-middle">${result[i]["precio"]}</td>
                        <td class="text-center align-middle">${result[i]["IVA"]}</td>
                        <td class="text-center align-middle">${result[i]["descuento"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarProductoBandera=false;" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProducto"]})" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProducto"]}"></i>
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
            url: "http://localhost:8080/api/v1/producto/busquedafiltroestado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["descripcion"]}</td>
                        <td class="text-center align-middle">${result[i]["cantidad"]}</td>
                        <td class="text-center align-middle">${result[i]["precio"]}</td>
                        <td class="text-center align-middle">${result[i]["IVA"]}</td>
                        <td class="text-center align-middle">${result[i]["descuento"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarProductoBandera=false;" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProducto"]})" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProducto"]}"></i>
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
var url = "http://localhost:8080/api/v1/producto/";

// Función para listar los médicos
function listarProducto() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["idProducto"]}</td>
                    <td class="text-center align-middle">${result[i]["nombreProducto"]}</td>
                    <td class="text-center align-middle">${result[i]["descripcion"]}</td>
                    <td class="text-center align-middle">${result[i]["cantidad"]}</td>
                    <td class="text-center align-middle">${result[i]["precio"]}</td>
                    <td class="text-center align-middle">${result[i]["IVA"]}</td>
                    <td class="text-center align-middle">${result[i]["descuento"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarProductoBandera=false;" data-id="${result[i]["idProducto"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProducto"]})" data-id="${result[i]["idProducto"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProducto"]}"></i>
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

var registrarProductoBandera = true;

// Función para registrar un médico
function registrarProducto() {
    var nombreProducto = document.getElementById("nombreProducto");
    var descripcion = document.getElementById("descripcion");
    var cantidad = document.getElementById("cantidad");
    var precio = document.getElementById("precio");
    var IVA = document.getElementById("IVA");
    var descuento = document.getElementById("descuento");
    var estado = document.getElementById("estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validarnombreProducto(nombreProducto)) {
        // Mostrar una alerta indicando que todos los campos son obligatorios
        Swal.fire({
            title: "¡Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
        return; // Salir de la función si algún campo está vacío
    }

    var forData = {
        "nombreProducto": nombreProducto.value,
        "descripcion": descripcion.value,
        "cantidad": cantidad.value,
        "precio": precio.value,
        "IVA": IVA.value,
        "descuento": descuento.value,
        "estado": estado.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarProductoBandera == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Registrado con éxito",
            icon: "success"
        });
    } else {
        metodo = "PUT";
        urlLocal = url + idProducto;
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
                    listarProducto();
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
    var nombreProducto = document.getElementById("nombreProducto");
    return validarnombreProducto(nombreProducto);
}

// Función para validar el documento de identidad
function validarnombreProducto(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 36) {
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
    document.getElementById("nombreProducto").value = "";
    document.getElementById("nombreProducto").className = "form-control";
    document.getElementById("descripcion").value = "";
    document.getElementById("descripcion").className = "form-control";
    document.getElementById("cantidad").value = "";
    document.getElementById("cantidad").className = "form-control";
    document.getElementById("precio").value = "";
    document.getElementById("precio").className = "form-control";
    document.getElementById("IVA").value = "";
    document.getElementById("IVA").className = "form-control";
    document.getElementById("descuento").value = "";
    document.getElementById("descuento").className = "form-control";
    document.getElementById("estado").value = "";
    document.getElementById("estado").className = "form-control";
}

var idProducto = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    limpiar();
    idProducto = $(this).data("id");

    $.ajax({
        url: url + idProducto,
        type: "GET",
        success: function (producto) {
            document.getElementById("nombreProducto").value = producto.nombreProducto;
            document.getElementById("descripcion").value = producto.descripcion;
            document.getElementById("cantidad").value = producto.cantidad;
            document.getElementById("precio").value = producto.precio;
            document.getElementById("IVA").value = producto.IVA;
            document.getElementById("descuento").value = producto.descuento;
            document.getElementById("estado").value = producto.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del producto: " + error.statusText);
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idProducto = $(this).data("id");
    $.ajax({
        url: url + idProducto,
        type: "DELETE",
        success: function () {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarProducto(); // Actualiza la lista de pacientes en el front-end
        }
    });
});



$(document).on("click", ".eliminar", function () {
    // Obtener el ID del médico desde el atributo data del elemento clicado
    var idProducto = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idProducto,
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
                    listarProducto();
                },
                error: function (xhr, status, error) {
                    // Manejo de errores
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El registro tiene una venta.'
                    });
                }
            });
        }
    });
});




// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarProducto();
});
function actualizarlistarCliente() {
    listarProducto();
}


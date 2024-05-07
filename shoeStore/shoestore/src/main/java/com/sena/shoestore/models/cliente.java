package com.sena.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "cliente")
public class cliente {
    
    /*id
     * tipo de identificacion
     * identificacion
     * nombre
     * apellido
     * telefono
     * direccion
     * ciudad
     * estado
     * acciones
     */

     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idCliente", nullable = false, length = 12)
     private String idCliente;

     @Column(name = "tipoDocumento" , nullable = false, length = 10)
     private String tipoDocumento;

     @Column(name = "numeroDocumento", nullable = false, length = 15)
     private String numeroDocumento;

     @Column(name = "nombreCliente", nullable = false, length = 36)
     private String nombreCliente;

     @Column(name = "apellidoCliente", nullable = false, length = 36)
     private String apellidoCliente;
}

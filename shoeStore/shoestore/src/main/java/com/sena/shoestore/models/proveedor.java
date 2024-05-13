package com.sena.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class proveedor {
    

    /*id
     * NIT
     * razon social
     * nombre provedor
     * cargo contacto
     * telefono
     * direccion 
     * estado
     */

     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idProveedor", nullable = false, length = 36)
     private String idProveedor;

     @Column(name = "NIT", nullable = false, length = 9)
     private String NIT;

     @Column(name = "razonSocial", nullable = false, length = 36)
     private String razonSocial;

     @Column(name = "nombreProveedor", nullable = false,length = 45)
     private String nombreProveedor;

     @Column(name = "cargoProveedor", nullable = false, length = 36)
     private String cargoProveedor;

     @Column(name = "telefono", nullable = false, length = 15)
     private String telefono;

     @Column(name = "direccion", nullable = false, length = 36)
     private String direccion;

     @Column(name = "estado", nullable = false,length = 10)
     private String estado;

    public proveedor() {
    }

    public proveedor(String idProveedor, String nIT, String razonSocial, String nombreProveedor, String cargoProveedor,
            String telefono, String direccion, String estado) {
        this.idProveedor = idProveedor;
        NIT = nIT;
        this.razonSocial = razonSocial;
        this.nombreProveedor = nombreProveedor;
        this.cargoProveedor = cargoProveedor;
        this.telefono = telefono;
        this.direccion = direccion;
        this.estado = estado;
    }

    public String getIdProveedor() {
        return idProveedor;
    }

    public void setIdProveedor(String idProveedor) {
        this.idProveedor = idProveedor;
    }

    public String getNIT() {
        return NIT;
    }

    public void setNIT(String nIT) {
        NIT = nIT;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public String getNombreProveedor() {
        return nombreProveedor;
    }

    public void setNombreProveedor(String nombreProveedor) {
        this.nombreProveedor = nombreProveedor;
    }

    public String getCargoProveedor() {
        return cargoProveedor;
    }

    public void setCargoProveedor(String cargoProveedor) {
        this.cargoProveedor = cargoProveedor;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

     
}

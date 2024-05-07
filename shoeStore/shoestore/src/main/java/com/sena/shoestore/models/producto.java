package com.sena.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "producto")
public class producto {
    
    /*id
     * nombre Producto
     * descripcion
     * cantidad
     * precio
     * iva
     * descuento
     * estado
     */

     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idProducto", nullable = false, length = 12)
     private String idProducto;

     @Column(name = "descripcion", nullable = false, length = 800)
     private String descripcion;

     @Column(name = "cantidad", nullable = false, length = 50)
     private int cantidad;

     @Column(name = "precio", nullable = false, length = 50)
     private int precio;

     @Column(name = "descuento", nullable = false, length = 50)
     private int descuento;

     @Column(name = "estado", nullable = false, length = 11)
     private String estado;

    public producto() {
    }

    public producto(String idProducto, String descripcion, int cantidad, int precio, int descuento, String estado) {
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        this.descuento = descuento;
        this.estado = estado;
    }

    public String getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(String idProducto) {
        this.idProducto = idProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public int getDescuento() {
        return descuento;
    }

    public void setDescuento(int descuento) {
        this.descuento = descuento;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

}

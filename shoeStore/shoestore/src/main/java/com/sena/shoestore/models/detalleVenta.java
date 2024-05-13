package com.sena.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity(name = "detalleVenta")
public class detalleVenta {
    
    /*id detalle venta
     * id de venta
     * id producto
     * cantidad
     * precio
     * descuento
     * subtotal
     * 
     */

     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idDetalleVenta", nullable = false,length = 36)
     private String idDetalleVenta;

    @ManyToOne
    @JoinColumn(name = "idVenta")
    private venta venta;

    @ManyToOne
    @JoinColumn(name = "idProducto")
    private producto producto;

    @Column(name = "cantidad", nullable = false,length = 45)
    private String cantidad;

    @Column(name = "precio", nullable = false,length = 45)
    private String precio;

    @Column(name = "descuento", nullable = false, length = 45)
    private String descuento;

    @Column(name = "subTotal", nullable = false, length = 45)
    private String subTotal;

    public detalleVenta() {
    }

    public detalleVenta(String idDetalleVenta, com.sena.shoestore.models.venta venta,
            com.sena.shoestore.models.producto producto, String cantidad, String precio, String descuento,
            String subTotal) {
        this.idDetalleVenta = idDetalleVenta;
        this.venta = venta;
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.descuento = descuento;
        this.subTotal = subTotal;
    }

    public String getIdDetalleVenta() {
        return idDetalleVenta;
    }

    public void setIdDetalleVenta(String idDetalleVenta) {
        this.idDetalleVenta = idDetalleVenta;
    }

    public venta getVenta() {
        return venta;
    }

    public void setVenta(venta venta) {
        this.venta = venta;
    }

    public producto getProducto() {
        return producto;
    }

    public void setProducto(producto producto) {
        this.producto = producto;
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public String getDescuento() {
        return descuento;
    }

    public void setDescuento(String descuento) {
        this.descuento = descuento;
    }

    public String getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(String subTotal) {
        this.subTotal = subTotal;
    }

}

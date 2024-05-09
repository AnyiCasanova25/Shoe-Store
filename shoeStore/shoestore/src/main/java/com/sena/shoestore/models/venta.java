package com.sena.shoestore.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity(name = "venta")
public class venta {
    
    /*id venta
     * id cliente
     * total
     * fecha venta
     * estado
     * acciones
     */

     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idVenta", nullable = false, length = 36)
     private String idVenta;

     @Column(name = "total", nullable = false,length = 10)
     private String total;

     @Column(name = "estado", nullable = false,length = 10)
     private String estado;

     @Column(name = "fechaVenta", nullable = false,length = 10)
     private Date fechaVenta;

     @ManyToOne
     @JoinColumn(name = "idCliente", nullable = false)
     private cliente idCliente;

    public venta() {
    }

    public venta(String idVenta, String total, String estado, Date fechaVenta, cliente idCliente) {
        this.idVenta = idVenta;
        this.total = total;
        this.estado = estado;
        this.fechaVenta = fechaVenta;
        this.idCliente = idCliente;
    }

    public String getIdVenta() {
        return idVenta;
    }

    public void setIdVenta(String idVenta) {
        this.idVenta = idVenta;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Date getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(Date fechaVenta) {
        this.fechaVenta = fechaVenta;
    }

    public cliente getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(cliente idCliente) {
        this.idCliente = idCliente;
    }

}

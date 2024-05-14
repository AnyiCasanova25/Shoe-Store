package com.sena.shoestore.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity(name = "ordenCompra")
public class ordenCompra {

    /*
     * id
     * id proveedor
     * fecha compra
     * estado
     */

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idOrdenCompra", nullable = false, length = 36)
    private String idOrdenCompra;

    @ManyToOne
    @JoinColumn(name = "idProveedor")
    private proveedor proveedor;

    @Column(name = "fechaCompra", nullable = false, length = 36)
    private Date fechaCompra;

    @Column(name = "estado", nullable = false, length = 36)
    private String estado;

    @Column(name = "total", nullable = false, length = 36)
    private String total;

    public ordenCompra() {
    }

    public ordenCompra(String idOrdenCompra, com.sena.shoestore.models.proveedor proveedor, Date fechaCompra,
            String estado, String total) {
        this.idOrdenCompra = idOrdenCompra;
        this.proveedor = proveedor;
        this.fechaCompra = fechaCompra;
        this.estado = estado;
        this.total = total;
    }

    public String getIdOrdenCompra() {
        return idOrdenCompra;
    }

    public void setIdOrdenCompra(String idOrdenCompra) {
        this.idOrdenCompra = idOrdenCompra;
    }

    public proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(proveedor proveedor) {
        this.proveedor = proveedor;
    }

    public Date getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(Date fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

}

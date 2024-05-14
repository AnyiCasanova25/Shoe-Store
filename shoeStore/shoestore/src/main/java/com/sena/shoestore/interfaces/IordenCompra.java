package com.sena.shoestore.interfaces;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.models.ordenCompra;


@Repository
public interface IordenCompra extends CrudRepository <ordenCompra, String>{


    @Query ("SELECT o FROM ordenCompra o WHERE o.fechaCompra = ?1 OR")
    List<ordenCompra> ordenCompraExist(Date fechaCompra);
    
    
    @Query("SELECT o FROM ordenCompra o " 
            +"JOIN o.proveedor pr " 
            +" WHERE pr.nombreProveedor LIKE %?1% " 
            +" OR o.estado LIKE %?2% ")
    List<ordenCompra> filtroOrdenCompra(String filtro);
}

package com.sena.shoestore.interfaces;


import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.models.venta;

@Repository
public interface Iventa extends CrudRepository<venta, String>{
    
    @Query ("SELECT v FROM venta v WHERE v.fechaVenta = ?1 ")
    List<venta>filtroFechaVenta(Date fechaVenta);
    
    @Query("SELECT v FROM cliente v WHERE v.idCliente LIKE %?1%")
    List<venta> filtroVenta(String filtro);

}

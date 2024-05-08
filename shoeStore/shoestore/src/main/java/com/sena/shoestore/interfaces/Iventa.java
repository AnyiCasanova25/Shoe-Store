package com.sena.shoestore.interfaces;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.models.venta;

@Repository
public interface Iventa extends CrudRepository<venta, String>{
    
    // @Query("SELECT v from venta v JOIN v.cliente c WHERE\r\n" + //
    // "c.")
}

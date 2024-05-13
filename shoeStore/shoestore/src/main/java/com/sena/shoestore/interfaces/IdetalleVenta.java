package com.sena.shoestore.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.models.detalleVenta;

@Repository
public interface IdetalleVenta extends CrudRepository<detalleVenta, String>{
    
}

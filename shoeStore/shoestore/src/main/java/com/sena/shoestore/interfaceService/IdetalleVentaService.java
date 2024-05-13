package com.sena.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.sena.shoestore.models.detalleVenta;

public interface IdetalleVentaService {
    
    public String save(detalleVenta detalleVenta);

    public List<detalleVenta> findAll();

    public Optional<detalleVenta> findOne(String id);

    public int deleteForever(String id);
}

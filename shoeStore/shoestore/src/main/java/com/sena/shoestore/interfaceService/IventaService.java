package com.sena.shoestore.interfaceService;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.sena.shoestore.models.venta;

public interface IventaService {
    
    public String save(venta venta);

    public List<venta> findAll();

    public List<venta> filtroVenta(String filtro);
    
    public List<venta> filtroFechaVenta(Date filtro);

    public Optional<venta> findOne(String id);

    public int deleteForever(String id);
}

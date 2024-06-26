package com.sena.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.sena.shoestore.models.producto;

public interface IproductoService {
    
    public String save(producto producto);

    public List<producto> findAll();

    public List<producto> filtroProducto(String filtro);

    public Optional<producto> findOne(String id);

    public int deleteForever(String id);
}

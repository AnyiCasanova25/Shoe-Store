package com.sena.shoestore.interfaceService;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.sena.shoestore.models.ordenCompra;

public interface IordenCompraService {
    
    public String save(ordenCompra ordenCompra);

    public List<ordenCompra> findAll();

    public List<ordenCompra> filtroOrdenCompra(String filtro);

    public List <ordenCompra> ordenCompraExist(Date fechaCompra);

    public Optional<ordenCompra> findOne(String id);

    public int deleteForever(String id);
}

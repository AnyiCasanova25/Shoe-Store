package com.sena.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.sena.shoestore.models.cliente;

public interface IclienteService {
    
    public String save(cliente cliente);

    public List<cliente> findAll();

    public List<cliente> filtroCliente(String filtro);

    public Optional<cliente> findOne(String id);

    public int deleteForever(String id);
}

package com.sena.shoestore.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.interfaceService.IordenCompraService;
import com.sena.shoestore.interfaces.IordenCompra;
import com.sena.shoestore.models.ordenCompra;

@Service
public class ordenCompraService implements IordenCompraService {

    @Autowired
    private IordenCompra data;

    @Override
    public String save(ordenCompra ordenCompra) {
        data.save(ordenCompra);
        return ordenCompra.getIdOrdenCompra();
    }

    @Override
    public List<ordenCompra> findAll() {
        List<ordenCompra> listaOrdenCompra = (List<ordenCompra>) data.findAll();
        return listaOrdenCompra;
    }
    
    @Override
    public List<ordenCompra> filtroOrdenCompra(String filtro) {
        List<ordenCompra> listaOrdenCompra = data.filtroOrdenCompra(filtro);
        return listaOrdenCompra;
    }

    @Override
    public List<ordenCompra> ordenCompraExist(Date fechaCompra) {
        List<ordenCompra> listaOrdenCompra = data.ordenCompraExist(fechaCompra);
        return listaOrdenCompra;
    }

    @Override
    public Optional<ordenCompra> findOne(String id) {
        Optional<ordenCompra> ordenCompra = data.findById(id);
        return ordenCompra;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}

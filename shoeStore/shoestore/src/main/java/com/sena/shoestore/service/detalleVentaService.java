package com.sena.shoestore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.interfaceService.IdetalleVentaService;
import com.sena.shoestore.interfaces.IdetalleVenta;
import com.sena.shoestore.models.detalleVenta;

@Service
public class detalleVentaService implements IdetalleVentaService {

    @Autowired
    private IdetalleVenta data;

    @Override
    public String save(detalleVenta detalleVenta) {
        data.save(detalleVenta);
        return detalleVenta.getIdDetalleVenta();
    }

    @SuppressWarnings("null")
    @Override
    public List<detalleVenta> findAll() {
        List<detalleVenta> listaDetalleVenta = (List<detalleVenta>) data.findAll();
        return listaDetalleVenta;
    }

    @Override
    public Optional<detalleVenta> findOne(String id) {
        Optional<detalleVenta> detalleVenta = data.findById(id);
        return detalleVenta;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}

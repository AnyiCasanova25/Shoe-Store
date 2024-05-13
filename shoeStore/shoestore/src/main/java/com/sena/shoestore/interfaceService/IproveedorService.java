package com.sena.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.sena.shoestore.models.proveedor;

public interface IproveedorService {
    
    public String save(proveedor proveedor);

    public List<proveedor> findAll();

    public List<proveedor> filtroProveedor(String filtro);

    public Optional<proveedor> findOne(String id);

    public int deleteForever(String id);
}

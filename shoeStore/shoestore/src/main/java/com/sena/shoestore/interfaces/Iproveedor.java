package com.sena.shoestore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.models.proveedor;

@Repository
public interface Iproveedor extends CrudRepository<proveedor, String> {
    
    @Query("SELECT pr FROM proveedor pr WHERE pr.NIT LIKE %?1% OR pr.razonSocial LIKE %?1% OR pr.estado LIKE %?1%")
    List<proveedor> filtroProveedor(String filtro);
}

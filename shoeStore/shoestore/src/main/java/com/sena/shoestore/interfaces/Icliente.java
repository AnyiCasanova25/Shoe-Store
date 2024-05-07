package com.sena.shoestore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.models.cliente;

@Repository
public interface Icliente extends CrudRepository<cliente, String> {

    @Query("SELECT c FROM cliente c WHERE c.nombreCliente LIKE %?1% OR c.ciudad LIKE %?1% OR c.estado LIKE %?1%")
    List<cliente> filtroCliente(String filtro);
}

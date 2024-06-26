package com.sena.shoestore.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.interfaceService.IproductoService;
import com.sena.shoestore.models.producto;

@RequestMapping("/api/v1/producto")
@RestController
public class productoController {
    

    @Autowired
    private IproductoService productoService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("producto") producto producto) {
        var listaProducto = productoService.findAll()
                .stream().filter(Producto -> Producto.getNombreProducto()
                        .equals(producto.getNombreProducto()));

        if (listaProducto.count() != 0) {
            return new ResponseEntity<>("Este producto ya existe", HttpStatus.BAD_REQUEST);
        }

        // verificar que el campo documento de identidad sea diferente vacio
        // Añadir campos obligatorios

        if (producto.getNombreProducto().equals("")) {

            return new ResponseEntity<>("El nombre del producto es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (producto.getDescripcion().equals("")) {

            return new ResponseEntity<>("La descripcion del producto es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (producto.getCantidad().equals("")) {

            return new ResponseEntity<>("La cantidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (producto.getPrecio().equals("")) {

            return new ResponseEntity<>("El precio es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (producto.getIVA().equals("")) {

            return new ResponseEntity<>("El IVA es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (producto.getDescuento().equals("")) {

            return new ResponseEntity<>("El descuento es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (producto.getEstado().equals("")) {

            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }


        productoService.save(producto);
        return new ResponseEntity<>(producto, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaProducto = productoService.findAll();
        return new ResponseEntity<>(listaProducto, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltro/{filtro}")
    public ResponseEntity<Object> findFiltro(@PathVariable String filtro) {
        var listaProducto = productoService.filtroProducto(filtro);
        return new ResponseEntity<>(listaProducto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var producto = productoService.findOne(id).get();

        if (producto != null) {
            if (producto.getEstado().equals("Activo")) {

                producto.setEstado("Inactivo");
                productoService.save(producto);
                return new ResponseEntity<>("Se ha inactivado correctamente", HttpStatus.OK);
            } else
            producto.setEstado("Activo");
            productoService.save(producto);
            return new ResponseEntity<>("Se ha activado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        productoService.deleteForever(id);
        return new ResponseEntity<>("Registro eliminado Permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("producto") com.sena.shoestore.models.producto productoUpdate) {
        var producto = productoService.findOne(id).get();

        if (producto != null) {

            producto.setNombreProducto(productoUpdate.getNombreProducto());
            producto.setDescripcion(productoUpdate.getDescripcion());
            producto.setCantidad(productoUpdate.getCantidad());
            producto.setPrecio(productoUpdate.getPrecio());
            producto.setIVA(productoUpdate.getIVA());
            producto.setDescuento(productoUpdate.getDescuento());
            producto.setEstado(productoUpdate.getEstado());

            productoService.save(producto);
            return new ResponseEntity<>(producto, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error producto No encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}

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

import com.sena.shoestore.interfaceService.IdetalleVentaService;
import com.sena.shoestore.models.detalleVenta;

@RequestMapping("/api/v1/detalleVenta")
@RestController
public class detalleVentaController {

    @Autowired
    private IdetalleVentaService detalleVentaService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("detalleVenta") detalleVenta detalleVenta) {

        if (detalleVenta.getCantidad().equals("")) {

            return new ResponseEntity<>("La cantidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (detalleVenta.getPrecio().equals("")) {

            return new ResponseEntity<>("El precio es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (detalleVenta.getDescuento().equals("")) {

            return new ResponseEntity<>("El descuento es un campo Obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (detalleVenta.getVenta().equals("")) {

            return new ResponseEntity<>("El campo venta es un campo obligatorio", HttpStatus.BAD_REQUEST);

        }

        if (detalleVenta.getProducto().equals("")) {

            return new ResponseEntity<>("El producto es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (detalleVenta.getSubTotal().equals("")) {

            return new ResponseEntity<>("El subtotal es un campo  obligatorio", HttpStatus.BAD_REQUEST);
        }

        detalleVentaService.save(detalleVenta);
        return new ResponseEntity<>(detalleVenta, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaDetalleVenta = detalleVentaService.findAll();
        return new ResponseEntity<>(listaDetalleVenta, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        detalleVentaService.deleteForever(id);
        return new ResponseEntity<>("Registro Eliminado permanentemente", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Object> update(@PathVariable String id,
            @ModelAttribute("detalleVenta") detalleVenta detalleVentaUpdate) {
        var detalleVenta = detalleVentaService.findOne(id).get();

        if (detalleVenta != null) {

            detalleVenta.setVenta(detalleVentaUpdate.getVenta());
            detalleVenta.setPrecio(detalleVentaUpdate.getPrecio());
            detalleVenta.setCantidad(detalleVentaUpdate.getCantidad());
            detalleVenta.setDescuento(detalleVentaUpdate.getDescuento());
            detalleVenta.setProducto(detalleVentaUpdate.getProducto());
            detalleVenta.setSubTotal(detalleVentaUpdate.getSubTotal());

            detalleVentaService.save(detalleVenta);
            return new ResponseEntity<>(detalleVenta, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error registro NO encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}

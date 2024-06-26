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

import com.sena.shoestore.interfaceService.IventaService;
import com.sena.shoestore.models.venta;

@RequestMapping("/api/v1/venta")
@RestController
public class ventaController {
    
    @Autowired
    private IventaService ventaService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("venta") venta venta) {
     
        if (venta.getTotal().equals("")) {
            
            return new ResponseEntity<>("El total es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (venta.getFechaVenta().equals("")) {

            return new ResponseEntity<>("La fecha de la venta es un campo obligatorio",HttpStatus.BAD_REQUEST);
            
        }

        if (venta.getEstado().equals("")) {

            return new ResponseEntity<>("El estado es un campo obligatorio",HttpStatus.BAD_REQUEST);
            
        }

        ventaService.save(venta);
        return new ResponseEntity<>(venta, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaVenta = ventaService.findAll();
        return new ResponseEntity<>(listaVenta, HttpStatus.OK);
    }

        @GetMapping("/busquedafiltro/{filtro}")
    public ResponseEntity<Object> findFiltro(@PathVariable String filtro) {
        var listaVenta = ventaService.filtroVenta(filtro);
        return new ResponseEntity<>(listaVenta, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var venta = ventaService.findOne(id).get();

        if (venta != null) {
            if (venta.getEstado().equals("Activo")) {

                venta.setEstado("Inactivo");
                ventaService.save(venta);
                return new ResponseEntity<>("Se ha inactivado correctamente", HttpStatus.OK);
            } else
            venta.setEstado("Activo");
            ventaService.save(venta);
            return new ResponseEntity<>("Se ha activado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        ventaService.deleteForever(id);
        return new ResponseEntity<>("Registro eliminado Permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("venta") venta ventaUpdate) {
        var venta = ventaService.findOne(id).get();

        if (venta != null) {

            venta.setTotal(ventaUpdate.getTotal());
            venta.setFechaVenta(ventaUpdate.getFechaVenta());
            venta.setEstado(ventaUpdate.getEstado());
            

            ventaService.save(venta);
            return new ResponseEntity<>(venta, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error venta No encontrada", HttpStatus.BAD_REQUEST);
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})


export class ProductoComponent implements OnInit{

producto: Producto = new Producto();
productos : Producto[] =[];
bandera: boolean = false;


constructor(private productoService:ProductoService){
  this.producto=new Producto();
}

ngOnInit(): void {
this.productoService.productos().subscribe( (data:Producto[]) => {
  this.productos = data

})
  this.producto = new Producto();
}


guardarProducto() {
    if (this.bandera == false) {
      this.productoService.guardarProducto(this.producto).subscribe( (data:Producto) => {
        this.productos.push(data)
        this.producto = new Producto();
      });


    } else {

      //actualizar persona
      this.productoService.actualizarProducto(this.producto).subscribe( (data:Producto) => {
        this.productos.push(data)
        this.bandera = false
        window.location.reload()
      });

    }

  }


  eliminarProducto(producto: Producto) {
    this.productoService.eliminarProducto(producto.id).subscribe( (data:Producto) => {
      this.productos = this.productos.filter(p => p !== producto)
    });
  }


modificarProducto(p:Producto){
this.producto = p
this.bandera=true
}

}

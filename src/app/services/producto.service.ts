import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  productos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${this.urlEndPoint}/productos`
    );  // <!-- conectar backend con fronted -->
  }

  //consum post Api
  guardarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(
      `${this.urlEndPoint}/guardarproducto`, producto
    );
  }


  //consume put api
  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.urlEndPoint}/actualizarproducto`, producto)
  }

  //consume get api by id
  obtenerProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.urlEndPoint}/productos/${id}`)
  }


  //consume delete api
  eliminarProducto(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.urlEndPoint}/eliminarproducto/${id}`)
  }

}



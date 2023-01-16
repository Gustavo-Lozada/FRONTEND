import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../model/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private urlEndPoint: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  empresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(
      `${this.urlEndPoint}/empresas`
    );  // <!-- conectar backend con fronted -->
  }

  //consum post Api
  guardarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(
      `${this.urlEndPoint}/guardarempresa`, empresa
    );
  }


  //consume put api
  actualizarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.urlEndPoint}/actualizarempresa`, empresa)
  }

  //consume get api by id
  obtenerEmpresa(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.urlEndPoint}/empresas/${id}`)
  }

}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlEndPoint: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  personas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(
      `${this.urlEndPoint}/personas`
    );  // <!-- conectar backend con fronted -->
  }

  //consum post Api
  guardarPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(
      `${this.urlEndPoint}/guardarpersona`, persona
    );
  }


  //consume put api
  actualizarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.urlEndPoint}/actualizarpersona`, persona)
  }


  //consume delete api
  eliminarPersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(`${this.urlEndPoint}/eliminarpersona/${id}`)
  }

}

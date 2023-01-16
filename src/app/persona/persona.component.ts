import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})


export class PersonaComponent implements OnInit {

persona: Persona = new Persona();
personas : Persona[] =[];
bandera: boolean = false;

constructor(private personaService:PersonaService){
  this.persona=new Persona();
}

ngOnInit(): void {
this.personaService.personas().subscribe( (data:Persona[]) => {
  this.personas = data

})
  this.persona = new Persona();
}


guardarPersona() {
    if (this.bandera == false) {
      this.personaService.guardarPersona(this.persona).subscribe( (data:Persona) => {
        this.personas.push(data)
        this.persona = new Persona();
      });


    } else {

      //actualizar persona
      this.personaService.actualizarPersona(this.persona).subscribe( (data:Persona) => {
        this.personas.push(data)
        this.bandera = false
        window.location.reload()
      });

    }

  }



  eliminarPersona(persona: Persona) {
    this.personaService.eliminarPersona(persona.id).subscribe( (data:Persona) => {
      this.personas = this.personas.filter(p => p !== persona)
    });
  }


modificarPersona(p:Persona){
this.persona = p
this.bandera=true
}

}

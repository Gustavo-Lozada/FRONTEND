import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  {path: 'persona', component: PersonaComponent },
  {path: 'calculadora', component: CalculadoraComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

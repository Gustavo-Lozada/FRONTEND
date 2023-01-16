import { Component, OnInit } from '@angular/core';
import { Empresa } from '../model/empresa';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})



export class EmpresaComponent implements OnInit{

empresa: Empresa = new Empresa();
empresas : Empresa[] =[];
bandera: boolean = false;
empresaSeleccionada: Empresa = new Empresa();

constructor(private empresaService: EmpresaService) {}

ngOnInit() {
  this.empresaService.empresas().subscribe((data: Empresa[]) => {
    this.empresas = data;
  });
  this.empresaService.obtenerEmpresa(1).subscribe((data: Empresa) => {
    this.empresaSeleccionada = data;
  });

  this.empresa = new Empresa();
}

public guardar() {
  console.log('se dio click');
}



guardarEmpresa(){
  if (this.bandera == false) {
    this.empresaService.guardarEmpresa(this.empresa).subscribe( (data:Empresa) => {
      this.empresas.push(data)
      this.empresa = new Empresa();
    });


  } else {

    //actualizar persona
    this.empresaService.actualizarEmpresa(this.empresa).subscribe( (data:Empresa) => {
      this.empresas.push(data)
      this.bandera = false
      window.location.reload()
    });

  }

}



}

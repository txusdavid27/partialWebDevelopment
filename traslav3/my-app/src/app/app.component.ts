import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  datos;
  datos_;
  // Seleccionamos o iniciamos el valor '0' del <select>

  select_1!: string[];
  select_2!: string[];
  aux!: string[];

  constructor(){
      this.datos = ['Pollo','Carne','Tomate','Lechuga'];
      this.datos_ = ['Pan'];
  }
  selectChangeHandler (event: any) {
    console.log(this.select_1)
  }

  agregar():void{
    var i,j;
    try{
      for (i = 0; i < this.select_1.length; i++)
      {
        if(this.select_1[i]!=''){
          this.datos_.push(this.select_1[i]);
          for(j = 0; j < this.datos.length; j++){
            if(this.datos[j]==this.select_1[i]){
              delete this.datos[j];
              break;
            }
          }
        }
      }
      this.select_1=['']
      this.aux=[]

      for(j = 0; j < this.datos.length; j++){
        if(this.datos[j]!=null){
          this.aux.push(this.datos[j]);
        }
      }
      this.datos=[]
      this.datos=this.aux;
    }catch(err){};
  }


  remover():void{
    var i,j;
    try{
      for (i = 0; i < this.select_2.length; i++)
      {
        if(this.select_2[i]!=''){
          this.datos.push(this.select_2[i]);
          for(j = 0; j < this.datos_.length; j++){
            if(this.datos_[j]==this.select_2[i]){
              delete this.datos_[j];
              break;
            }
          }
        }
      }
      this.select_2=['']
      this.aux=[]

      for(j = 0; j < this.datos_.length; j++){
        if(this.datos_[j]!=null){
          this.aux.push(this.datos_[j]);
        }
      }
      this.datos_=[]
      this.datos_=this.aux;

    }catch(err){};
  }
}
/*
var select_1 = document.getElementById('izquierda');
var select_2 = document.getElementById('derecha');

function agregar(){
    var i;
    for (i = 0; i < select_1.options.length; i++)
    {
      if (select_1.options[i].selected)
      {
        select_2.add(select_1.options[i]);
        i=0
      }
    }
    agregar()
}

function remover(){
    var i;
    for (i = 0; i < select_2.options.length; i++)
    {
      if (select_2.options[i].selected)
      {
        select_1.add(select_2.options[i]);
        i=0
      }
    }
    remover()
}

*/

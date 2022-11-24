import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public fotos: any = [];
  selurl : string="";
  constructor(private rest: RestService){}
  ngOnInit(): void {
    this.getArray();
  }
  getArray(){
    this.rest.getFotos().subscribe({
      next: (data)=>{this.show(data)},error:(error) =>{}
    });
  }
  show(data: any){
    this.fotos=data
  }
  onClick(img:any){
    this.selurl=img.url;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variavelGlobal = 'oi de novo';

  constructor() { }



  ngOnInit(): void {
    this.meuMetodo();
  }

  meuMetodo(){
    let variavel = 'tchau';
    console.log('oi');
    console.log(variavel);
    console.log(this.variavelGlobal);
  }

}

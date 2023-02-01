import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Serios } from './serios';
import { SeriosService } from './serios.service';

@Component({
  selector: 'app-form-serios',
  templateUrl: './form-serios.component.html',
  styleUrls: ['./form-serios.component.css']
})
export class FormSeriosComponent implements OnInit {
  serios:Serios = new Serios();
  titulo:string="Registro de estudiantes";
  constructor(private estudianteServices:SeriosService, private router:Router) { }

  ngOnInit(): void {}

  create():void{
    console.log(this.serios);
    this.estudianteServices.create(this.serios).subscribe(res=>this.router.navigate(['/serios']));
    
  }
}

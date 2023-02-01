import { Component, OnInit } from '@angular/core';
import { Serios } from './serios';
import { SeriosService } from './serios.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  titulo: string = "Prueba APIREST";
  prueba: string = "LISTA DE JUEGOS SESIONES"

  serios: Serios[];

  constructor(private seriosService: SeriosService) { }

  ngOnInit(): void {
    this.seriosService.getAll().subscribe(e => this.serios = e);

    
    function handleCheckboxChange(event: Event) {
      let checkbox = event.target as HTMLInputElement;
      if (checkbox.checked) {
        console.log(checkbox.value + " is checked");
      } else {
        console.log(checkbox.value + " is not checked");
      }
    }
    let checkboxes = document.querySelectorAll('.my-checkbox');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', handleCheckboxChange);
}
  }
  
}

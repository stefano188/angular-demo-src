import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  pipeObj = {
    rating: 4.9745,
    students: 30975,
    price: 190.95,
    releaseDate: new Date(2020, 2, 11),
    title: `Esce Pink Floyd, “The Later Years 1987-2019”, 
    dedicato come si evince dal titolo all’ultimo periodo della band, 
    che arriva a tre anni dal precedente box intitolato “The Early Years 1965-1972”.
    Il contenuto di questa nuova, ghiotta strenna natalizia floydiana è stato anticipato in agosto dai Pink Floyd. 
    La confezione comprenderà cinque cd audio, due vinili e cinque DVD, 
    replicati anche in versione Blu-Ray (che saranno sei, compreso materiale aggiuntivo) 
    per un totale di 18 dischetti a 350€ circa`,
  }

}

import { Component } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne-liste',
  templateUrl: './personne-liste.component.html',
  styleUrls: ['./personne-liste.component.css']
})
export class PersonneListeComponent {
  personnes!: Personne[];
  constructor(private personneService: PersonneService){

  };
  
  ngOnInit(): void {
    
    this.personneService.getAllPersonneFromServer() .subscribe(personnes => {
      this.personnes = personnes;
    });;
  }
}

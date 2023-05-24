import { Component, Input } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent {
  @Input()personne!: Personne;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  nom!:string;
  prenom!:string;
  dateDerniereConnexion!:Date;

  ngOnInit(): void {
    this.nom = 'testNom';
    this.prenom = 'testPrenom';
    this.dateDerniereConnexion= new Date();
  }

}

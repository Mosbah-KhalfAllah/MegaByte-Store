// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;


  a = "acceuil"
  c = "content"
  con = "Contactez-nous"
  login = "login"
  cat = 'Catégorie'
  insc = 'inscrire'
  connexion = 'connexion'
}
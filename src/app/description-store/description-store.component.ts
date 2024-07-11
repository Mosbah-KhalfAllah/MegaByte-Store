// src/app/description-store/description-store.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description-store',
  templateUrl: './description-store.component.html',
  styleUrls: ['./description-store.component.css']
})
export class DescriptionStoreComponent {

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/categorie']);
  }
}
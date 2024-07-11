import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DescriptionStoreComponent } from './description-store/description-store.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ErreurComponent } from './erreur/erreur.component';

const routes: Routes = [
  { path: '', component: DescriptionStoreComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'inscrire', component: InscrireComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
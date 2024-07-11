import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoverComponent } from './cover/cover.component';
import { CategorieComponent } from './categorie/categorie.component';
import { DescriptionStoreComponent } from './description-store/description-store.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ErreurComponent } from './erreur/erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    CoverComponent,
    CategorieComponent,
    AppComponent,
    DescriptionStoreComponent,
    ConnexionComponent,
    InscrireComponent,
    ErreurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

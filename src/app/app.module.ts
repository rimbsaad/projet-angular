import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AccueilComponent } from './accueil/accueil.component';
import { ActivitiesComponent } from './activities/activities.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';
import { ContactComponent } from './contact/contact.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CondidatureComponent } from './contact/condidature/condidature.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ActivitiesComponent,
    OrganigrammeComponent,
    ContactComponent,
    MainNavComponent,
    CondidatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CondidatureComponent } from './contact/condidature/condidature.component';
import { ContactComponent } from './contact/contact.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'organigramme', component: OrganigrammeComponent},
  {path: 'condidature', component: CondidatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

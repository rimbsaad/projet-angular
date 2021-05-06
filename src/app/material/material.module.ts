import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';

import{MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatGridListModule} from '@angular/material/grid-list';




const material = [
  MatSidenavModule,
  MatToolbarModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MaterialFileInputModule,
  MatGridListModule,
  
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { };

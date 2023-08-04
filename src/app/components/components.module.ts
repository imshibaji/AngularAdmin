import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Mat Modules
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {LayoutModule} from '@angular/cdk/layout';

// Components
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';
import { TableComponent } from './table/table.component';
import { BaseComponent } from './base/base.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TemplateComponent,
    TableComponent,
    BaseComponent,
    GridComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    LayoutModule
  ],
  exports: [
    //Components
    HeaderComponent,
    TemplateComponent,
    TableComponent,
    BaseComponent,
    GridComponent,
  ]
})
export class ComponentsModule { }

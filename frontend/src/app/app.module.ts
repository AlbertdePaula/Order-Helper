import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineListComponent } from './components/engines/engine-list/engine-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { PartsComponent } from './components/parts/parts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EngineCreateComponent } from './components/engines/engine-create/engine-create.component';
import { EngineDetailComponent } from './components/engines/engine-detail/engine-detail.component';
import { EngineUpdateComponent } from './components/engines/engine-update/engine-update.component';
import { EngineDeleteComponent } from './components/engines/engine-delete/engine-delete.component';

import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    EngineListComponent,
    NavBarComponent,
    PartsComponent,
    OrdersComponent,
    EngineCreateComponent,
    EngineDetailComponent,
    EngineUpdateComponent,
    EngineDeleteComponent
  ],
  imports: [
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    NgbModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    AccordionModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

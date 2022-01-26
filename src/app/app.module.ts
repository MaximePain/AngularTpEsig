import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { MessagerieListComponent } from './messagerie-list/messagerie-list.component';
import { MessagerieFormComponent } from './messagerie-form/messagerie-form.component';
import { VaisseauxListComponent } from './vaisseaux-list/vaisseaux-list.component';
import { VaisseauxDataComponent } from './vaisseaux-data/vaisseaux-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FormulaireComponent,
    AccueilComponent,
    MessagerieListComponent,
    MessagerieFormComponent,
    VaisseauxListComponent,
    VaisseauxDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

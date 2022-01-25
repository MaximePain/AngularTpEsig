import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { MessagerieListComponent } from './messagerie-list/messagerie-list.component';
import { MessagerieFormComponent } from './messagerie-form/messagerie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FormulaireComponent,
    AccueilComponent,
    MessagerieComponent,
    MessagerieListComponent,
    MessagerieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MessagerieListComponent } from './messagerie-list/messagerie-list.component';

const routes: Routes = [
      { path: '', component: AccueilComponent},
      { path: 'exo1', component: FormulaireComponent},
      { path: 'exo2', component: CalculatorComponent},
      { path: 'exo3', component: MessagerieListComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

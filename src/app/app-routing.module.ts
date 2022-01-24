import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
      { path: '', component: AccueilComponent},
      { path: 'exo1', component: FormulaireComponent},
      { path: 'exo2', component: CalculatorComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

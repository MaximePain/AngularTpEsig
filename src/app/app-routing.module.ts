import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MessagerieListComponent } from './messagerie-list/messagerie-list.component';
import { TpguardGuard } from './tpguard.guard';
import { VaisseauxListComponent } from './vaisseaux-list/vaisseaux-list.component';

const routes: Routes = [
      { path: '', component: AccueilComponent},
      { path: 'exo1', component: FormulaireComponent, canActivate: [TpguardGuard]},
      { path: 'exo2', component: CalculatorComponent, canActivate: [TpguardGuard]},
      { path: 'exo3', component: MessagerieListComponent, canActivate: [TpguardGuard]},
      { path: 'exo5', component: VaisseauxListComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './screens/start/start.component';
import { CombatComponent } from './screens/combat/combat.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch:'full' },
  { path: 'start', component: StartComponent},
  { path: 'combat', component: CombatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

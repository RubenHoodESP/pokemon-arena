import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './screens/start/start.component';
import { BattleComponent } from './screens/battle/battle.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch:'full' },
  { path: 'start', component: StartComponent},
  { path: 'battle', component: BattleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

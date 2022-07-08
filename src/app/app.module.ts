import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './screens/start/start.component';
import { CombatComponent } from './screens/combat/combat.component';
import { SoundsComponent } from './components/sounds/sounds.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CombatComponent,
    SoundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

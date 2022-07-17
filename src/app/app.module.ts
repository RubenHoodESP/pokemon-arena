import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './screens/start/start.component';
import { SoundsComponent } from './components/sounds/sounds.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { BattleComponent } from './screens/battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SoundsComponent,
    OpenCloseComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

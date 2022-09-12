import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  title = 'pokemon-arena';
  constructor (private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }
}

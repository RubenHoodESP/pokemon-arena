import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css']
})
export class UiButtonComponent implements OnInit {

  @Input() battle: boolean = false;
  @Input() settings: boolean = false;
  @Input() start: boolean = true;
  @Input() languages: boolean = false;
  @Input() theme: string = "primary";

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  goSettings(){
    this.start = false;
    this.languages = false;
    this.settings = true;
  }

  goStart(){
    this.settings = false;
    this.languages = false;
    this.start = true;
  }

  goLanguages(){
    this.settings = false;
    this.start = false;
    this.languages = true;
  }

  useLanguage(language: string): void{
    this.translate.use(language);
  }
}

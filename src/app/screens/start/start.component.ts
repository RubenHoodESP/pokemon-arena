import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-start',
  animations: [
    trigger('appear', [
      state('on', style({
        width: '60%',
        opacity: 1
      })),
      state('off', style({
        width: '50%',
        opacity: 0
      })),
      transition('on => off', [
        animate('1.5s')
      ]),
      transition('off => on', [
        animate('1.5s')
      ]),
    ]),
    trigger('display', [
      state('yes', style({
        display: 'block',
        opacity: '1'
      })),
      state('no', style({
        display: 'none',
        opacity: '0'
      })),
      transition('yes => no', [
        animate('1.5s')
      ]),
      transition('no => yes', [
        animate('1.5s')
      ]),
    ])
  ],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  isOn = false;
  isDisplayed = true;

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.isOn = !this.isOn;
    this.isDisplayed = !this.isDisplayed;
  }

}

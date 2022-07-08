import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.css']
})
export class SoundsComponent implements OnInit {

  sound = new Howl({
    src: ['../../../assets/sounds/opening.mp3'],
    autoplay: true,
    loop: true
  });

  constructor() {
  }

  ngOnInit() {
   // Play the sound.
   this.sound.play();

   // Change global volume.
   Howler.volume(0.5);
  }

}

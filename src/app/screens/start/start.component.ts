import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  isOn = false;
  isDisplayed = true;
  start = true;
  settings = false;
  languages = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // this.pokemonService.getPokemonByName("bulbasaur");
  }

  toggle() {
    this.isOn = !this.isOn;
    this.isDisplayed = !this.isDisplayed;
  }

  toggleSettings() {
    this.settings = true;
  }
}

import { Injectable } from '@angular/core';
import Pokedex from 'pokedex-promise-v2'

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  P = new Pokedex();

  constructor() { }
  
  /**
   * 
   * @param name 
   * @returns Información del pokémon según su nombre.
   */
  getPokemonByName(name: string) {
    return this.P.getPokemonByName(name)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  /**
   * 
   * @param id 
   * @returns Información del pokémon según su id.
   */
  getPokemonById(id: number) {
    return this.P.getPokemonByName(id)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

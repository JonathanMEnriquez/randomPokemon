import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  getRandomPokemon() {
    let randomNumber = Math.floor(Math.random() * 248 + 1);
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);
  }
}

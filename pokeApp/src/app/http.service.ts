import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRandomPokemon() {
    let randomNumber = Math.floor(Math.random() * 248 + 1);
    let tempObservable = this._http.get(`http://pokeapi.co/api/v2/pokemon/${randomNumber}/`);
    tempObservable.subscribe(data => console.log(data));
  }
}

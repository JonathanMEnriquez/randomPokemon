import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-rand-poke',
  templateUrl: './rand-poke.component.html',
  styleUrls: ['./rand-poke.component.css']
})
export class RandPokeComponent implements OnInit {

  public pokemon: any;
  loadedPokemon: Boolean = false;
  isLoading: Boolean = false;

  constructor(private _ApiService: ApiService) { 
    this.isLoading = true;
    this._ApiService.getRandomPokemon().
    subscribe((data:any)=>{
      this.isLoading = false;
      console.log(data);
      this.pokemon = data;
      this.loadedPokemon = true;
    })
  }

  ngOnInit() {
  }

}

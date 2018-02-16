import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service'


import { AppComponent } from './app.component';
import { RandPokeComponent } from './rand-poke/rand-poke.component';


@NgModule({
  declarations: [
    AppComponent,
    RandPokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

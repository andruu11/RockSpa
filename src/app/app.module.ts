import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumsService } from './services/albums.service';
import { AlbumComponent } from './components/album/album.component';
import { SafePipe } from './model/safe.pipe';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AlbumTarjetaComponent } from './components/album-tarjeta/album-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumComponent,
    SafePipe,
    BuscadorComponent,
    AlbumTarjetaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

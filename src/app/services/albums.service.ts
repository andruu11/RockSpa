import { Injectable } from '@angular/core';
import { Albums } from '../model/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albums: Albums[] = [
    {
      nombreDisco: "Kill 'Em All",
      banda: "Metallica",
      fechaLanzamiento: "25-08-1983",
      genero: "Thrash metal",
      portada: "assets/img/1met.jpg",
      cancionesDestacadas: ["Hit the lights", "Motorbreath", "The Four Hoursemen"],
      urlAlbum: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=14581190&app_id=1"

    },
    {
      nombreDisco: "Hardwired... to Self-Destruct",
      banda: "Metallica",
      fechaLanzamiento: "18-11-2016",
      genero: "Thrash metal",
      portada: "assets/img/3met.jpg",
      cancionesDestacadas: ["Hardwired", "Am I Savage?", "Dream no more"],
      urlAlbum: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=14581202&app_id=1"

    },

    {
      nombreDisco: "Master of Puppets",
      banda: "Metallica",
      fechaLanzamiento: "3-04-1986",
      genero: "Thrash metal",
      portada: "assets/img/2met.jpg",
      cancionesDestacadas: ["Master of Puppets", "Welcome Home", "Damage, Inc"],
      urlAlbum: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=51001232&app_id=1"
    },

    {
      nombreDisco: "Get a trip",
      banda: "Aerosmith",
      fechaLanzamiento: "20-04-1993",
      genero: "Hard rock",
      portada: "assets/img/1ae.jpg",
      cancionesDestacadas: ["Amazing", "Crazy", "Criying"],
      urlAlbum: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=103242&app_id=1"


    },
    {
      nombreDisco: "Nine Lives",
      banda: "Aerosmith",
      fechaLanzamiento: "12-03-1997",
      genero: "Hard rock",
      portada: "assets/img/2ae.jpg",
      cancionesDestacadas: ["Hole in my Soul", "Pink", "Nine Lives"],
      urlAlbum: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=1207337&app_id=1"

    },
    {
      nombreDisco: "Just Push Play",
      banda: "Aerosmith",
      fechaLanzamiento: "5-03-2001",
      genero: "Hard rock",
      portada: "assets/img/3ae.jpg",
      cancionesDestacadas: ["Jaded", "Fly Away From Here", "Outta Your Head"],
      urlAlbum: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=1134197&app_id=1"

    },

    {
      nombreDisco: "Sticky Fingers",
      banda: "Rolling Stones",
      fechaLanzamiento: "23-04-1971",
      genero: "Rock and roll",
      portada: "assets/img/1roll.jpg",
      cancionesDestacadas: ["Wild Horses", "Dead Flowers", "Brown Sugar"],
      urlAlbum: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=10472932&app_id=1"
    },

    {
      nombreDisco: "Nevermind",
      banda: "Nirvana",
      fechaLanzamiento: "24-10-1991",
      genero: "Grunge",
      portada: "assets/img/1ni.jpg",
      cancionesDestacadas: ["Smell Like Teens Spirit", "Lithium", "Come as you are"],
      urlAlbum: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=1262014&app_id=1"

    },

  ];
  constructor() { 
    console.log("Listo para usar");
  }

  getAlbums():Albums[]{
    return this.albums;
  }

  getAlbum(idx:string){
    return this.albums[idx];
  }

  buscarAlbum( termino:string ){
    let albumsArr:Albums[] = [];
    termino.toLowerCase();

    for (let i= 0; i< this.albums.length; i++) {
        let album = this.albums[i];
        let nombreDisco = album.nombreDisco.toLowerCase();
        if (nombreDisco.indexOf(termino) >= 0) {
          album.idx = i;
          albumsArr.push( album );
        }
    }
    return albumsArr;
  }
}

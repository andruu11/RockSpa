import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  albums:any[] = [];
  termino:string;
  constructor(private activatedRoute:ActivatedRoute, private _albumsService:AlbumsService) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.albums = this._albumsService.buscarAlbum( params['termino'] );
    });
  }

}

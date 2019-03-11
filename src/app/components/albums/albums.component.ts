import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { Albums } from '../../model/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums:Albums[] = [];

  constructor( private _albumsService: AlbumsService ) { }

  ngOnInit() {
    this.albums = this._albumsService.getAlbums();
  }

}

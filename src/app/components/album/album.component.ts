import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Albums } from '../../model/albums';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  album:any = {};

  constructor( private activatedRoute: ActivatedRoute, private _albumsService: AlbumsService) { 

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.album = this._albumsService.getAlbum(params['id']);

    })
  }

}

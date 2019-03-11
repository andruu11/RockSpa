import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-tarjeta',
  templateUrl: './album-tarjeta.component.html',
  styleUrls: ['./album-tarjeta.component.scss']
})
export class AlbumTarjetaComponent implements OnInit {

  @Input() album: any = {};
  @Input() index: number;
  i:number;

  constructor() { }

  ngOnInit() {
    this.i = this.index;
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTarjetaComponent } from './album-tarjeta.component';

describe('AlbumTarjetaComponent', () => {
  let component: AlbumTarjetaComponent;
  let fixture: ComponentFixture<AlbumTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongslistComponent } from './songslist.component';

describe('SongslistComponent', () => {
  let component: SongslistComponent;
  let fixture: ComponentFixture<SongslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

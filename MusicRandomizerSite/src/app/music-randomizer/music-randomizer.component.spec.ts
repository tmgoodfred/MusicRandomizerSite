import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicRandomizerComponent } from './music-randomizer.component';

describe('MusicRandomizerComponent', () => {
  let component: MusicRandomizerComponent;
  let fixture: ComponentFixture<MusicRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicRandomizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

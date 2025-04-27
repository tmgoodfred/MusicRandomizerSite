import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicRandomizerComponent } from './music-randomizer/music-randomizer.component';
import { MusicService } from './music.service';
import { MusicDataService } from './music-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MusicRandomizerComponent
  ],
  providers: [MusicService, MusicDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
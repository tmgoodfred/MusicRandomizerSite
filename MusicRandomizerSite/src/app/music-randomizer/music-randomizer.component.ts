import { Component } from '@angular/core';
import { MusicService } from '../music.service';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-music-randomizer',
  templateUrl: './music-randomizer.component.html',
  styleUrls: ['./music-randomizer.component.css']
})
export class MusicRandomizerComponent {
  genre = '';
  bpm = 0;
  selectedKey = '';
  notesInKey: string[] = [];
  chordProgression: string[] = [];
  chordsDisplay = '';
  vibe = '';
  melody = '';

  constructor(private musicService: MusicService, public musicData: MusicDataService) {}

  randomize() {
    this.genre = this.getRandomGenre();
    console.log(this.genre);
    this.bpm = this.musicService.getRandomBPM(this.genre as keyof typeof this.musicData.genreBPMRanges);
    this.selectedKey = this.getRandomKey();
    this.notesInKey = this.musicData.musicalKeys[this.selectedKey as keyof typeof this.musicData.musicalKeys];
    this.chordProgression = this.musicService.generateChordProgression(this.notesInKey);
    this.chordsDisplay = this.musicService.generateChordsDisplay(this.chordProgression, this.notesInKey);
    this.vibe = this.musicService.generateRandomVibe();
  }

  getRandomGenre(): string {
    const genres = Object.keys(this.musicData.genreBPMRanges);
    return genres[Math.floor(Math.random() * genres.length)];
  }

  getRandomKey(): string {
    const keys = Object.keys(this.musicData.musicalKeys);
    return keys[Math.floor(Math.random() * keys.length)];
  }

  createMelody() {
    this.melody = this.generateMelody(this.chordProgression, this.notesInKey);
  }

  generateMelody(chordProgression: string[], notesInKey: string[]): string {
    const melodyLines: string[] = [];
    const beatsPerBar = 8;
    const totalBars = 4;

    notesInKey.forEach(note => {
      const noteLabel = note.length === 1 ? `${note} : ` : `${note}: `;
      melodyLines.push(noteLabel);
    });

    for (let bar = 0; bar < totalBars; bar++) {
      for (let beat = 0; beat < beatsPerBar; beat++) {
        let notePlaced = false;
        let noteToPlay: string = '';

        if (Math.random() > 0.5) {
          noteToPlay = notesInKey[Math.floor(Math.random() * notesInKey.length)];
          const noteIndex = notesInKey.indexOf(noteToPlay);

          melodyLines[noteIndex] += "o ";
          notePlaced = true;
        }

        melodyLines.forEach((line, i) => {
          if (!notePlaced || i !== notesInKey.indexOf(noteToPlay)) {
            melodyLines[i] += ". ";
          }
        });
      }

      melodyLines.forEach((line, i) => {
        melodyLines[i] += "| ";
      });
    }

    melodyLines.forEach((line, i) => {
      melodyLines[i] = line.trimEnd().replace(/\|$/, '');
    });

    return melodyLines.join('\n');
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicRandomizerComponent } from './music-randomizer/music-randomizer.component';

const routes: Routes = [
  { path: '', redirectTo: '/music-randomizer', pathMatch: 'full' },
  { path: 'music-randomizer', component: MusicRandomizerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

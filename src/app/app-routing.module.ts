import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episodes/:id', component: EpisodeDetailComponent },
  { path: 'character/:id', component: CharacterDetailComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

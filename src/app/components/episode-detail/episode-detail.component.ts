import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit {
  episode: any;
  characters: string[] = [];
  c_id: string[]= [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://rickandmortyapi.com/api/episode/${id}`)
      .subscribe((episode: any) => {
        this.episode = episode;
        episode.characters.forEach((characterUrl: string) => {
          console.log(characterUrl);
          this.http.get(characterUrl).subscribe((character: any) => {
            this.characters.push(character.name);
            this.c_id.push(character.id);
            console.log(this.c_id);
          });
        });
      });
  }
}
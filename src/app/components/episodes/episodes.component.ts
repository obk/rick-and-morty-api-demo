import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let myNumber: number;
myNumber = 1;

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.http.get('https://rickandmortyapi.com/api/episode/')
      .subscribe(data => {
        this.episodes = data;
        console.log(this.episodes);
      });
  }
}
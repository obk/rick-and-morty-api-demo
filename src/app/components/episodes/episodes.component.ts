import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes(page: number = 1) {
    this.http.get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .subscribe((data: any) => {
        this.episodes = [...this.episodes, ...data.results];

        if (data.info.next !== null) {
          this.getEpisodes(page + 1);
        }
      });
  }
}
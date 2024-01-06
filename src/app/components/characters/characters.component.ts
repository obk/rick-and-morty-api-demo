import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})

export class CharactersComponent implements OnInit {
  characters: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.http.get('https://rickandmortyapi.com/api/character/')
      .subscribe(data => {
        this.characters = data;
        console.log(this.characters);
      });
  }
}
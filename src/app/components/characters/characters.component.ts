import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page: number) {
    this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .subscribe((data: any) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
      });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getCharacters(this.currentPage);
    }
  }
}
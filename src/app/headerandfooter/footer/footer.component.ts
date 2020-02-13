import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'rgb(255, 187, 0)'},
    {text: 'Two', cols: 1, rows: 1, color: 'rgb(255, 187, 0)'},
    {text: 'Three', cols: 1, rows: 1, color: 'rgb(255, 187, 0)'},
    {text: 'Four', cols: 1, rows: 1, color: 'rgb(255, 187, 0)'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
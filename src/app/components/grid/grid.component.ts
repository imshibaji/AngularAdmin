import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', img: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', img: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', img: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', img: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Five', cols: 1, rows: 2, color: 'lightblue', img: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Six', cols: 3, rows: 1, color: 'skyblue', img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Seven', cols: 1, rows: 1, color: 'lightpink', img: 'https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Eight', cols: 2, rows: 1, color: '#DDBDF1', img: 'https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Nine', cols: 3, rows: 1, color: 'lightblue', img: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Ten', cols: 1, rows: 2, color: 'lightgreen', img: 'https://images.pexels.com/photos/583848/pexels-photo-583848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Eleven', cols: 1, rows: 1, color: 'lightpink', img: 'https://images.pexels.com/photos/311039/pexels-photo-311039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {text: 'Twelve', cols: 2, rows: 1, color: '#DDBDF1', img: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  ];
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img: string;
}

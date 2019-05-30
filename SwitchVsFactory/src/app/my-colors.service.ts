import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyColorsService {

  displayColors: string[] = [];

  constructor() { }

  setColors(colors: string[]){
    this.displayColors = colors;
  }

  addColor(color: string){
    this.displayColors.push(color);
  }
}

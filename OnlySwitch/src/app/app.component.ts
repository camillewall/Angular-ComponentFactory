import { Component } from '@angular/core';
import { MyColorsService } from './my-colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  availableColors: string[] = [
    'plum',
    'mauve',
    'carnation',
    'olympic'
  ];

  // displayColors: string[] = [];

  constructor(private colors: MyColorsService){
    for(let i=1; i<=500; i++){
      var item = this.availableColors[Math.floor(Math.random()*this.availableColors.length)];
      // this.displayColors.push(item);
      this.colors.addColor(item);
    }
  }
}

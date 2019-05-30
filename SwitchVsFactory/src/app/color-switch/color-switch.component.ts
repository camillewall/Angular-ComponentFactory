import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MyColorsService } from '../my-colors.service';
import { PerfumeAfterViewInit } from 'perfume.js/angular';


@Component({
    selector: 'app-color-switch',
    templateUrl: './color-switch.component.html',
    styleUrls: ['./color-switch.component.scss']
})
@PerfumeAfterViewInit('ColorFactoryComponent')
export class ColorSwitchComponent implements OnInit, AfterViewInit {

    displayColors: string[];

    constructor(private colors: MyColorsService) {
        this.displayColors = this.colors.displayColors;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

}

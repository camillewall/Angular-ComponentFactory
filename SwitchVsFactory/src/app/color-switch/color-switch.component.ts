import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgPerfume } from 'perfume.js/angular';
import { MyColorsService } from '../my-colors.service';


@Component({
    selector: 'app-color-switch',
    templateUrl: './color-switch.component.html',
    styleUrls: ['./color-switch.component.scss']
})
// @PerfumeAfterViewInit('ColorFactoryComponent')
export class ColorSwitchComponent implements OnInit, AfterViewInit {

    displayColors: string[];

    constructor(private colors: MyColorsService, public perfume: NgPerfume) {
        this.displayColors = this.colors.displayColors;
        this.perfume.start('ColorSwitchComponentAfterPaint');
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.perfume.endPaint('ColorSwitchComponentAfterPaint');
    }

}

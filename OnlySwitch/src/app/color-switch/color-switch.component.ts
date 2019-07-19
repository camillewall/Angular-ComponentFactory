import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgPerfume } from 'perfume.js/angular';
import { MyColorsService } from '../my-colors.service';


@Component({
    selector: 'app-color-switch',
    templateUrl: './color-switch.component.html',
    styleUrls: ['./color-switch.component.scss']
})
// @PerfumeAfterViewInit('ColorSwitchComponent')
export class ColorSwitchComponent implements OnInit, AfterViewInit {

    displayColors: string[];

    constructor(private colors: MyColorsService, public perfume: NgPerfume) {
        this.displayColors = this.colors.displayColors;
        this.perfume.start('SwitchComponentAfterPaint');
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.perfume.endPaint('SwitchComponentAfterPaint');
    }

}

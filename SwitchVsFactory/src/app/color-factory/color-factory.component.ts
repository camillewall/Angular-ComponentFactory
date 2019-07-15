import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgPerfume } from 'perfume.js/angular';
import { MyColorsService } from '../my-colors.service';

@Component({
    selector: 'app-color-factory',
    templateUrl: './color-factory.component.html',
    styleUrls: ['./color-factory.component.scss']
})
// @PerfumeAfterViewInit('ColorFactoryComponent')
export class ColorFactoryComponent implements OnInit, AfterViewInit {

    displayColors: string[];

    constructor(private colors: MyColorsService, public perfume: NgPerfume) {
        this.displayColors = this.colors.displayColors;
        this.perfume.start('ColorFactoryComponentAfterPaint');
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.perfume.endPaint('ColorFactoryComponentAfterPaint');
    }

}

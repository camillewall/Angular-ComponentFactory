import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgPerfume } from 'perfume.js/angular';

@Component({
    selector: 'app-color-factory',
    templateUrl: './color-factory.component.html',
    styleUrls: ['./color-factory.component.scss']
})
// @PerfumeAfterViewInit('ColorFactoryComponent')
export class ColorFactoryComponent implements OnInit, AfterViewInit {

    constructor(public perfume: NgPerfume) {
        this.perfume.start('ColorFactoryComponentAfterPaint');
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.perfume.endPaint('ColorFactoryComponentAfterPaint');
    }

}

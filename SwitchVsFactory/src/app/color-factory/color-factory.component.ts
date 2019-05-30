import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MyColorsService } from '../my-colors.service';
import {
    NgPerfume,
    PerfumeModule,
    PerfumeAfterViewInit
} from 'perfume.js/angular';

@Component({
    selector: 'app-color-factory',
    templateUrl: './color-factory.component.html',
    styleUrls: ['./color-factory.component.scss']
})
@PerfumeAfterViewInit('ColorFactoryComponent')
export class ColorFactoryComponent implements OnInit, AfterViewInit {

    displayColors: string[];

    constructor(private colors: MyColorsService,
        // public perfume: NgPerfume
    ) {
        this.displayColors = this.colors.displayColors;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

}

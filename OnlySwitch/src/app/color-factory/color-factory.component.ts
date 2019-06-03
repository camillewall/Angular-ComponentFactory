import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PerfumeAfterViewInit} from 'perfume.js/angular';

@Component({
    selector: 'app-color-factory',
    templateUrl: './color-factory.component.html',
    styleUrls: ['./color-factory.component.scss']
})
@PerfumeAfterViewInit('ColorFactoryComponent')
export class ColorFactoryComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

}

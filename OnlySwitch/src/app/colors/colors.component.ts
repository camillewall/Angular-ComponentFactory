import { Component, Input } from '@angular/core';
import { ColorBox } from '../color-box';

@Component({
    selector: 'app-colors',
    template: `<div class="plum">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements ColorBox {
    color = 'Plum';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-mauve',
    template: `<div class="mauve">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class MauveComponent implements ColorBox {
    color = 'Mauve';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-carnation',
    template: `<div class="carnation">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class CarnationComponent implements ColorBox {
    color = 'Carnation';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-olympic',
    template: `<div class="olympic">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class OlympicComponent implements ColorBox {
    color = 'Olympic';
    @Input() index = 0;
    constructor() { }
}

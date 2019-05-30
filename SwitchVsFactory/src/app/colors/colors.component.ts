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
    selector: 'app-thistle',
    template: `<div class="thistle">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class ThistleComponent implements ColorBox {
    color = 'Thistle';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-floral',
    template: `<div class="floral">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class FloralComponent implements ColorBox {
    color = 'Floral';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-lollipop',
    template: `<div class="lollipop">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class LollipopComponent implements ColorBox {
    color = 'Lollipop';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-teal',
    template: `<div class="teal">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class FuchsiaComponent implements ColorBox {
    color = 'Fuchsia';
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
    selector: 'app-bubblegum',
    template: `<div class="bubblegum">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class BubblegumComponent implements ColorBox {
    color = 'Bubble gum';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-ruby',
    template: `<div class="ruby">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class RubyComponent implements ColorBox {
    color = 'Ruby';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-lawn',
    template: `<div class="lawn">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class LawnComponent implements ColorBox {
    color = 'Lawn';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-honeydew',
    template: `<div class="honeydew">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class HoneydewComponent implements ColorBox {
    color = 'Honeydew';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-mindaro',
    template: `<div class="mindaro">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class MindaroComponent implements ColorBox {
    color = 'Mindaro';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-pistachio',
    template: `<div class="pistachio">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class PistachioComponent implements ColorBox {
    color = 'Pistachio';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-yellow',
    template: `<div class="yellow">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class YellowComponent implements ColorBox {
    color = 'Yellow';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-cream',
    template: `<div class="cream">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class CreamComponent implements ColorBox {
    color = 'Cream';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-banana',
    template: `<div class="banana">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class BananaComponent implements ColorBox {
    color = 'Banana';
    @Input() index = 0;
    constructor() { }
}

@Component({
    selector: 'app-trombone',
    template: `<div class="trombone">{{color}} {{index}}</div>`,
    styleUrls: ['./colors.component.scss']
})
export class TromboneComponent implements ColorBox {
    color = 'Trombone';
    @Input() index = 0;
    constructor() { }
}
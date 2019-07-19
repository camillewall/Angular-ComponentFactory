import { Component, ComponentFactoryResolver, ComponentRef, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ColorBox } from '../color-box';

@Component({
    selector: 'app-color-factory-wrapper',
    templateUrl: './color-factory-wrapper.component.html',
    styleUrls: ['./color-factory-wrapper.component.scss']
})
export class ColorFactoryWrapperComponent implements OnChanges, OnDestroy, OnInit {

    @ViewChild('target', { read: ViewContainerRef, static: true }) target: ViewContainerRef;
    @Input() type: string;
    @Input() index: number;
    cmpRef: ComponentRef<ColorBox>;
    private isViewInitialized: boolean = false;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.isViewInitialized = true;
        this.updateComponent();
    }

    updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }

        if (this.cmpRef) {
            // when the `type` input changes we destroy a previously 
            // created component before creating the new one
            this.cmpRef.destroy();
        }

        // let componentType: Type<ColorBox> = ColorsComponent;
        // switch (this.type) {
        //     case 'plum': { componentType = ColorsComponent; break; }
        //     case 'mauve': { componentType = MauveComponent; break; }
        //     case 'carnation': { componentType = CarnationComponent; break; }
        //     case 'olympic': { componentType = OlympicComponent; break; }
        //     default: {
        //         componentType = ColorsComponent;
        //         break;
        //     }
        // }

        // // make a factory with the correct component type
        // let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        // // create the component and assign to target div element
        // this.cmpRef = this.target.createComponent(factory);
        // // to access the created instance use
        // this.cmpRef.instance.index = this.index;
    }
    
    ngOnChanges() {
        this.updateComponent();
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}

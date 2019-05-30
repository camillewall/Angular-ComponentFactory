import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorSwitchComponent } from './color-switch/color-switch.component';
import { ColorFactoryComponent } from './color-factory/color-factory.component';
import { ColorsComponent, ThistleComponent, FuchsiaComponent, LollipopComponent, LawnComponent, RubyComponent, BubblegumComponent, CarnationComponent, HoneydewComponent, MindaroComponent, PistachioComponent, YellowComponent, CreamComponent, BananaComponent, TromboneComponent, FloralComponent } from './colors/colors.component';
import { ColorFactoryWrapperComponent } from './color-factory-wrapper/color-factory-wrapper.component';
import { PerfumeModule } from 'perfume.js/angular';

// Perfume.js config, supports AOT and DI
export const PerfumeConfig = {
    firstContentfulPaint: true,
    firstInputDelay: true,
};

@NgModule({
    declarations: [
        AppComponent,
        ColorSwitchComponent,
        ColorFactoryComponent,
        ColorsComponent,
        ThistleComponent,
        LollipopComponent,
        FloralComponent,
        FuchsiaComponent,
        LawnComponent,
        RubyComponent,
        BubblegumComponent,
        CarnationComponent,
        HoneydewComponent,
        MindaroComponent,
        PistachioComponent,
        YellowComponent,
        CreamComponent,
        BananaComponent,
        TromboneComponent,
        ColorFactoryWrapperComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PerfumeModule.forRoot(PerfumeConfig)
    ],
    providers: [],
    entryComponents: [
        ColorsComponent,
        ThistleComponent,
        LollipopComponent,
        FloralComponent,
        FuchsiaComponent,
        LawnComponent,
        RubyComponent,
        BubblegumComponent,
        CarnationComponent,
        HoneydewComponent,
        MindaroComponent,
        PistachioComponent,
        YellowComponent,
        CreamComponent,
        BananaComponent,
        TromboneComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

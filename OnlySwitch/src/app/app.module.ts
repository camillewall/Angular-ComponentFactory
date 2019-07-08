import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorSwitchComponent } from './color-switch/color-switch.component';
import { ColorFactoryComponent } from './color-factory/color-factory.component';
import { ColorsComponent, MauveComponent, OlympicComponent, CarnationComponent } from './colors/colors.component';
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
        MauveComponent,
        OlympicComponent,
        CarnationComponent,
        ColorFactoryWrapperComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PerfumeModule.forRoot(PerfumeConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

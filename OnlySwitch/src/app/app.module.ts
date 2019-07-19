import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PerfumeModule } from 'perfume.js/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorFactoryWrapperComponent } from './color-factory-wrapper/color-factory-wrapper.component';
import { ColorFactoryComponent } from './color-factory/color-factory.component';
import { ColorSwitchComponent } from './color-switch/color-switch.component';
import { CarnationComponent, ColorsComponent, MauveComponent, OlympicComponent } from './colors/colors.component';


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
    bootstrap: [AppComponent],
    entryComponents: [
        
    ],
})
export class AppModule { }

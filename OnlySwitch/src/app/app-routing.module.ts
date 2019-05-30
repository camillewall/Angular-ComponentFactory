import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorSwitchComponent } from './color-switch/color-switch.component';
import { ColorFactoryComponent } from './color-factory/color-factory.component';

const routes: Routes = [
  { path: 'switch', component: ColorSwitchComponent },
  { path: 'factory', component: ColorFactoryComponent },
  { path: '', redirectTo: '/switch', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

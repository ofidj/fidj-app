import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppPage } from './app.page';

import { AppPageRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AppPage }]),
    AppPageRoutingModule,
  ],
  declarations: [AppPage]
})
export class AppPageModule {
}

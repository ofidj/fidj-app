import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PubPageRoutingModule } from './pub-routing.module';

import { PubPage } from './pub.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PubPageRoutingModule
  ],
  declarations: [PubPage]
})
export class PubPageModule {}

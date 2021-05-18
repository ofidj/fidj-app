import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppsPage } from './apps.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AppsPageRoutingModule } from './apps-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AppsPage }]),
    AppsPageRoutingModule,
  ],
  declarations: [AppsPage]
})
export class AppsPageModule {
}

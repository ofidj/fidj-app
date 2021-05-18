import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdprPage } from './gdpr.page';

const routes: Routes = [
  {
    path: '',
    component: GdprPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GdprPageRoutingModule {}

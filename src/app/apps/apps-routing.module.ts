import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsPage } from './apps.page';

const routes: Routes = [
  {
    path: '',
    component: AppsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsPageRoutingModule {}

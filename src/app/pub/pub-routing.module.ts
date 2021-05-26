import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PubPage} from './pub.page';

const routes: Routes = [
    {
        path: '',
        component: PubPage,
        children: [
            {
                path: ':appId',
                loadChildren: () => import('./app/app.module').then(m => m.AppPageModule)
            },
            {
                path: '',
                redirectTo: '/pub/fidj',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/pub/fidj',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PubPageRoutingModule {
}

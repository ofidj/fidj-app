import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyPage} from './my.page';

const routes: Routes = [
    {
        path: '',
        component: MyPage,
        children: [
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'gdpr',
                loadChildren: () => import('../gdpr/gdpr.module').then(m => m.GdprPageModule)
            },
            {
                path: 'apps',
                loadChildren: () => import('../apps/apps.module').then(m => m.AppsPageModule)
            },
            {
                path: '',
                redirectTo: '/my/profile',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/my/profile',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyPageRoutingModule {
}

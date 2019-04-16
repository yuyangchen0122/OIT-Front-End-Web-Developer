import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path        : 'dashboards/project',
        loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    },
    {
        path        : 'mail',
        loadChildren: './mail/mail.module#MailModule'
    },
    {
        path        : 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#MailNgrxModule'
    },
    {
        path        : 'todo',
        loadChildren: './todo/todo.module#TodoModule'
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class AppsModule
{
}

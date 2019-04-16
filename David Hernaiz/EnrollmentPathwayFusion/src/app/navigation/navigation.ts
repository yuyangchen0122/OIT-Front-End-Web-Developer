import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'analytics',
                title    : 'HomePage',
                translate: 'NAV.DASHBOARDS',
                icon     : 'home',
                type     : 'item',
                url      : '/apps/dashboards/analytics'
            },
            {
                id       : 'project',
                title    : 'Project',
                translate: 'NAV.DASHBOARDS',
                type     : 'item',
                icon     : '3d_rotation',
                url      : '/apps/dashboards/project',
                badge    : {
                    title: '5',
                    bg   : '#FF6F00',
                    fg   : '#FFFFFF'
                }
            },
            {
                id       : 'to-do',
                title    : 'To-Do',
                translate: 'NAV.TODO',
                type     : 'item',
                icon     : 'check_box',
                url      : '/apps/todo',
                badge    : {
                    title: '3',
                    bg   : '#FF6F00',
                    fg   : '#FFFFFF'
                }
            }
        ]
    }
];

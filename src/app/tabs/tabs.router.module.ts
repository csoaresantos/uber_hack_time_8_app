import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'my-events',
        children: [
          {
            path: '',
            loadChildren: '../pages/my-events/my-events.module#MyEventsPageModule'
          }
        ]
      },
      {
        path: 'relative-detail',
        children: [
          {
            path: '',
            loadChildren: '../pages/relative-detail/relative-detail.module#RelativeDetailPageModule'
          }
        ]
      },
      {
        path: 'next-events',
        children: [
          {
            path: '',
            loadChildren: '../pages/next-events/next-events.module#NextEventsPageModule'
          }
        ]
      },
      {
        path: 'companion-detail',
        children: [
          {
            path: '',
            loadChildren: '../pages/companion-detail/companion-detail.module#CompanionDetailPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/my-events',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/my-events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

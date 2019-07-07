import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './login/login-screen/login-screen.module#LoginScreenPageModule' },
  { path: 'login', loadChildren: './login/login-screen/login-screen.module#LoginScreenPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'companion-detail', loadChildren: './pages/companion-detail/companion-detail.module#CompanionDetailPageModule' },
  { path: 'relative-detail', loadChildren: './pages/relative-detail/relative-detail.module#RelativeDetailPageModule' },
  { path: 'elderly-detail', loadChildren: './pages/elderly-detail/elderly-detail.module#ElderlyDetailPageModule' },
  { path: 'my-events', loadChildren: './pages/my-events/my-events.module#MyEventsPageModule' },
  { path: 'next-events', loadChildren: './pages/next-events/next-events.module#NextEventsPageModule' },
  { path: 'event-detail', loadChildren: './pages/event-detail/event-detail.module#EventDetailPageModule' },
  { path: 'login-screen', loadChildren: './login/login-screen/login-screen.module#LoginScreenPageModule' },
  { path: 'send-event', loadChildren: './pages/send-event/send-event.module#SendEventPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

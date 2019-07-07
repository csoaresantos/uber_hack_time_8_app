import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'companion-detail', loadChildren: './pages/companion-detail/companion-detail.module#CompanionDetailPageModule' },
  { path: 'relative-detail', loadChildren: './pages/relative-detail/relative-detail.module#RelativeDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

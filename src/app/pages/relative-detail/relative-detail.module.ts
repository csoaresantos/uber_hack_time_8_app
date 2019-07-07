import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelativeDetailPage } from './relative-detail.page';
import { ElderlyListComponent } from 'src/app/components/elderly-list/elderly-list.component';

const routes: Routes = [
  {
    path: '',
    component: RelativeDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelativeDetailPage, ElderlyListComponent]
})
export class RelativeDetailPageModule {}

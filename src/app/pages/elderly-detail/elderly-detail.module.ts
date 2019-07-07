import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElderlyDetailPage } from './elderly-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ElderlyDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElderlyDetailPage]
})
export class ElderlyDetailPageModule {}

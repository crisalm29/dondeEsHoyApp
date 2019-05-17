import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: 'main-tabs',
    component: MainTabsPage,
    children: [
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapPageModule'
          }
        ]
      },
      {
        path: 'promos',
        children: [
          {
            path: '',
            loadChildren: '../promos/promos.module#PromosPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/main-tabs/map',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main-tabs/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainTabsPage]
})
export class MainTabsPageModule {}

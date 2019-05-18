import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/main-tabs/main-tabs.module#MainTabsPageModule' },
  { path: 'place-page', loadChildren: './place-page/place-page.module#PlacePagePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'promos', loadChildren: './pages/promos/promos.module#PromosPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'main-tabs', loadChildren: './pages/main-tabs/main-tabs.module#MainTabsPageModule' },
  { path: 'promo-detail/:id', loadChildren: './pages/promo-detail/promo-detail.module#PromoDetailPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'user-list', loadChildren: './pages/user-list/user-list.module#UserListPageModule' }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

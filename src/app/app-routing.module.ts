import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service'

const routes: Routes = [
  { path: '', loadChildren: './pages/main-tabs/main-tabs.module#MainTabsPageModule', canActivate: [AuthGuard]  },
  { path: 'place-page', loadChildren: './place-page/place-page.module#PlacePagePageModule', canActivate: [AuthGuard]  },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'promos', loadChildren: './pages/promos/promos.module#PromosPageModule', canActivate: [AuthGuard]  },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule', canActivate: [AuthGuard]  },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard]  },
  { path: 'main-tabs', loadChildren: './pages/main-tabs/main-tabs.module#MainTabsPageModule', canActivate: [AuthGuard] },
  { path: 'promo-detail/:id', loadChildren: './pages/promo-detail/promo-detail.module#PromoDetailPageModule', canActivate: [AuthGuard]  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  { path: 'user-list', loadChildren: './pages/user-list/user-list.module#UserListPageModule', canActivate: [AuthGuard]  },  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

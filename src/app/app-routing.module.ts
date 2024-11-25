import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'listar-pets',
    loadChildren: () => import('./listar-pets/listar-pets.module').then( m => m.ListarPetsPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'form-pet',
    loadChildren: () => import('./form-pet/form-pet.module').then( m => m.FormPetPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'paseo',
    loadChildren: () => import('./paseo/paseo.module').then( m => m.PaseoPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'loginPage',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perro',
    loadChildren: () => import('./perro/perro.module').then( m => m.PerroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

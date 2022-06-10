import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'profilo', loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule) }, { path: 'profilo', loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  {path :'', pathMatch:'full',component:DisplayComponent},
  {path : 'compA',pathMatch:'full',component:CompAComponent},
  {path : 'compB',pathMatch:'full',component:CompBComponent},
  {path : 'compC',pathMatch:'full',component:CompCComponent},
  {path : '404',pathMatch:'full',component:NotFoundComponent},
  {path : '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'

import {CrisisListComponent} from './crisis-list/crisis-list.component'
import {HeroesListComponent} from './heroes-list/heroes-list.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const appRoutes: Routes =[
  {path: 'crisis-list', component:CrisisListComponent},
  {path: 'heroes-list', component:HeroesListComponent},
  {path:'', redirectTo:'/heroes-list', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes, 
      {enableTracing: true} //For debugging purposes only
      ),
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {CrisisListComponent} from './crisis-list/crisis-list.component'
import {HeroesListComponent} from './heroes-list/heroes-list.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const appRoutes: Routes =[
  {path: 'crisis-center', component:CrisisListComponent},
  {path: 'heroes', component:HeroesListComponent},
  {path:'', redirectTo:'/heroes-list', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [    
    RouterModule.forRoot(
      appRoutes, 
      {enableTracing: true} //For debugging purposes only
      ),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

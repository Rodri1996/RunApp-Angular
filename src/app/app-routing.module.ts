import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { SearchRoutinesComponent } from './components/search-routines/search-routines.component'

const routes:Routes = [
  { path:'login',component:LoginComponent },
  { path:'searchRoutines',component:SearchRoutinesComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

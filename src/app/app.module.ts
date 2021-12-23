import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { FooterComponent } from './components/footer/footer.component'
import { SearchRoutinesComponent } from './components/search-routines/search-routines.component'
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms'
import { DeleteWarningComponent } from './components/delete-warning/delete-warning.component';
import { BurgerComponent } from './components/burger/burger.component';
import { PerfilComponent } from './components/perfil/perfil.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SearchRoutinesComponent,
    LoginComponent,
    DeleteWarningComponent,
    BurgerComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

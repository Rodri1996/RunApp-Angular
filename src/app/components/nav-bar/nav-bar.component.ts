import { Component } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isLogin=()=>this.location.path()=='/login'

  constructor(private location:Location){

  }
}

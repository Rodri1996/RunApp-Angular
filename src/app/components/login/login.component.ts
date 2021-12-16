import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/domain/user'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User("","","")
  errorMessage!:string

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }

  loginUser(){
    localStorage.removeItem('userLogueado')
    this.user.validateUser()
    const userLogeado = this.userService.searchUser(this.user)
    localStorage.setItem('userLogueado',JSON.stringify(this.user))
  }

}

import { Injectable } from '@angular/core'
import { User, user1, user2 } from '../domain/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[]
  public userLogeado!:any

  constructor() { 
    this.users=[
      user1,
      user2
    ]
  }

  searchUser(user: User){
    return this.users.find((element:User)=>element.username==user.username)
  }
}


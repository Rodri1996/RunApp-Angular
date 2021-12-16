import { Injectable } from '@angular/core';
import { User } from '../domain/user';

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

export const user1 = new User(0,'Rodrigo','Rodri1996','1234')
export const user2 =new User(1,'Pedro','NoobMaster69','1010')
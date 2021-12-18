import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {

  showBurguer=true

  constructor(){
    console.log(this.showBurguer)
  }

  occultBurger(){
    this.showBurguer=false
  }

}

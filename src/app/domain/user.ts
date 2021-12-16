export class User{
  
    errorMessage:string=""

    constructor(public username:string,public password:string){

    }

    validateUser() {
        if(this.username==="" && this.password===""){
            this.errorMessage="¡Debe ingresar un nombre de usuario y una contraseña!"
        }
        else if(this.username==="" || this.password===""){
            this.errorMessage="¡Nombre de usuario o contraseña no ingresado!"
        }else{
            this.errorMessage=""
        }
    }

}
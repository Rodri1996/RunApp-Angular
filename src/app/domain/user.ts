export class User{
    
    errorMessage:string=""

    constructor(public id:number,public name:string,public username:string,public password:string){

    }

    static fromJson(userJson:any):User{
        const user =Object.assign(
            new User(0,'','',''),
            userJson,
            {
                
            }
        )
        return user
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
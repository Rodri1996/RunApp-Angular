import { Routine } from "./routine"

export class User{
    
    errorMessage:string=""
    favoriteRoutines:string[]=[]

    constructor(public name:string,public username:string,public password:string){

    }

    static fromJson(userJson:any):User{
        const user =Object.assign(
            new User('','',''),
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

    putFavoriteRoutine(routine:string){
        this.favoriteRoutines.push(routine)
    }

    adoraLaRutina(routine: Routine): boolean{
        console.info(this.favoriteRoutines.includes(routine.name))
        return this.favoriteRoutines.includes(routine.name)
    }
}

export const user1 = new User('Rodrigo','Rodri1996','1234')
export const user2 =new User('Pedro','NoobMaster69','1010')
user1.putFavoriteRoutine('Abdominales')
user1.putFavoriteRoutine('Correr')
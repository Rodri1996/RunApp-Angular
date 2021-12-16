import { User } from "./user"

export class Routine{
    
    id!:number
    duration!:number

    constructor(public name:string,public creador:User,public duracion:number){}
    
    static fromJson(routineJson:any) {
        const routine = Object.assign(
            new Routine('',new User('','',''),0),
            routineJson,
            {
                id:routineJson.id,
                creador:routineJson.user,
                duration:routineJson.duration
            }
        )
        return routine
    }
}
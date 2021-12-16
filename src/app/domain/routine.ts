import { User } from "./user"

export class Routine{
    
    duration!:number

    constructor(public name:string,public creador:User,public duracion:number){}
    
    static fromJson(routineJson:any) {
        const routine = Object.assign(
            new Routine('',new User('','',''),0),
            routineJson,
            {
                creador:routineJson.user,
                duration:routineJson.duration
            }
        )
        return routine
    }
}
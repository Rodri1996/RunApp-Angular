import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  constructor(private http:HttpClient) { }

  // async getRoutines(){
  //   const routines = await this.http.get('http://localhost:8080/rutinas')
  // }
  getRoutines(){
    
  }
}

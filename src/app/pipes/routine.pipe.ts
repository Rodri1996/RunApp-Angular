import { Pipe, PipeTransform } from '@angular/core';
import { Routine } from '../domain/routine';

@Pipe({
  name: 'routine'
})
export class RoutinePipe implements PipeTransform {

  transform(routines: Routine[], patron:string): Routine[] {
    return routines.filter(routine=>routine.name.toLowerCase().match(patron));
  }

}

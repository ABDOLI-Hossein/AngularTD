import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Activite {
      objectifs : string[] = []
      removeItem(index:number){
        this.objectifs.splice(index);
      }
      editItem(index:number, newValue:string){
        this.objectifs[index] = newValue;
      }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../services/activite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consult-act',
  imports: [FormsModule],
  templateUrl: './consult-act.html',
  styleUrl: './consult-act.scss',
})
export class ConsultAct {
  param :number= 0
  param2 = null
  monService: Activite;
  enModification: boolean = false;
  nouveauTexte: string = '';
  

  supprimeElem(index: number){
    this.monService.removeItem(index);
    this.myRouter.navigate(['/'])
  }
  modifElem(index:number, newValue:string){
    this.monService.editItem(index, newValue)
    this.myRouter.navigate(['/'])
  }

  modeModif():void{
    this.enModification = true;
  }

  constructor(private myRouter: Router, private actRoute: ActivatedRoute,  unAct :Activite){
    this.param = actRoute.snapshot.params['idAct']
    this.param2 = actRoute.snapshot.params['idSec']
    this.monService = unAct;
  }
}

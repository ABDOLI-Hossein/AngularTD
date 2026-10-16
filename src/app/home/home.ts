import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { About } from '../about/about';
import { Activite } from '../services/activite';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    nbItems: number = 4;
    btnText: string = "Envoyer";
    objectifText: string = "";

    monActService: Activite;


    ngOnInit() : void{
      this.nbItems = this.monActService.objectifs.length;
    }

    ajoutItem() : void  {
      this.monActService.objectifs.push(this.objectifText);
      this.nbItems = this.monActService.objectifs.length;
      this.objectifText = '';
    }

    

    constructor(private myRouter:Router,private unService: Activite){
      // setTimeout(()=>{
      //   this.myRouter.navigate(['about2'])
      // }, 10000)

      this.monActService = unService
      
    }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Activite } from '../services/activite';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  monService: Activite;

  constructor(private unAct: Activite){
    this.monService = unAct;
  }
}

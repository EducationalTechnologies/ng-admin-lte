import { Component, OnInit } from '@angular/core';
import { ICardOptions } from '../../modules/ng-admin-lte/card/card.component';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  public cardOptionsCloseMe: ICardOptions;
  public cardOptionsNewProject: ICardOptions;

  constructor() {
    this.cardOptionsCloseMe = { button: [ { icon: {'fa': true, 'fa-times': true} }] }
    this.cardOptionsNewProject = { button: [{ label: "New Project", id:"newProjectBtn" } ] }
  }

  ngOnInit() {
  }

  clickHeaderButton(val) {
    console.log("Clicked "+val.id)
  }
}

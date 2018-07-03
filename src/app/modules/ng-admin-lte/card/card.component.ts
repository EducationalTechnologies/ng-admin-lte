import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'lte-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("title") title:string;
  @Input() public options:ICardOptions = {};

  @Output() public btnClick:EventEmitter<IHeaderButton> = new EventEmitter();


  showCardTools :boolean = false;


  constructor() { }

  ngOnInit() {
    console.log(this.options);
    if (this.options.button && this.options.button.length >0) {
      this.showCardTools =true;
    }
  }

  clickButton(btn:IHeaderButton){
    this.btnClick.emit(btn);
  }

}


export interface ICardOptions {
  button?: IHeaderButton[];
  description?: string;
  done?: boolean;
}

export interface IHeaderButton {
  label?:string;
  icon?:any;
  id?:string;
}
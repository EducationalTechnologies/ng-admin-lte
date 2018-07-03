import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Credentials} from "../model/credentials"
@Component({
  selector: 'lte-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input() title;
  @Output() credentials = new EventEmitter<Credentials>();
  public model =  new Credentials( '', '');
  constructor() { }

  ngOnInit() {
  }

  onClickMe(){
    
    this.credentials.emit(this.model)
  };

}

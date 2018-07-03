import { Component, OnInit, Input, HostBinding } from '@angular/core';



@Component({
  selector: '[lte-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input("hasChildren") hasChildren:boolean;
  @Input("router") router:string;
  @HostBinding('class.nav-item') someField: boolean = true;

  @Input("title") title:string;
  constructor() { }

  ngOnInit() {
  }

}

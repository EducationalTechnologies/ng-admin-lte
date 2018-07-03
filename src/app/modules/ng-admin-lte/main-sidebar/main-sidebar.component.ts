import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lte-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {
@Input("logo") logo :string;
@Input("brand") brand :string;
@Input("link") link :string;
  constructor() { }

  ngOnInit() {
  }

}

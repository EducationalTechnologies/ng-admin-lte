import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lte-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  @Input("title") title :string;
  @Input("breadcrumb") breadcrumb:boolean;

  constructor() { }

  ngOnInit() {
  }

}

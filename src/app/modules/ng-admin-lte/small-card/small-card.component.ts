import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lte-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input("showBottomLink") showBottomLink :boolean;
  @Input("bottomLinkText") bottomLinkText :string;
  @Input("faIcon") faIcon :string;
  @Input("style") style :string;
  @Input("router") router:string;
  
  public marcus:any = 'toffe peer';

  iconObject : any;
  styleObject : any;
  constructor() { }


  setMarcus(){
    this.marcus= "marcus is set"
  }
  ngOnInit() {
    this.marcus = 5;
    this.iconObject = {'fa':true}
    this.iconObject[this.faIcon] = true;
    this.styleObject = {'small-box':true}
    this.styleObject[this.style] = true;
  }

}

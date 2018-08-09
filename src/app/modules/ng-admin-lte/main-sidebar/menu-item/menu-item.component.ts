import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "[lte-menu-item]",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"]
})
export class MenuItemComponent implements OnInit {
  @Input("hasChildren")
  hasChildren: boolean;
  @Input("router")
  router: string;
  @Input("title")
  title: string;
  @Input("routerLinkActiveClass")
  routerLinkActiveClass: string;

  @HostBinding("class.nav-item")
  someField: boolean = true;

  constructor() {}

  ngOnInit() {}
}

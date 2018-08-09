import { Component, ViewEncapsulation } from '@angular/core';
import { Credentials } from './modules/ng-admin-lte/model/credentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';

  test( arg: Credentials) {
    console.log("credentials invoked", arg.password);
  }
}

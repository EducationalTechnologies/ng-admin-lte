import { Component } from '@angular/core';
import { Credentials } from './modules/ng-admin-lte/model/credentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  test( arg: Credentials) {
    console.log("credentials invoked", arg.password);
  }
}

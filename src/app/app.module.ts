import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgAdminLteModule } from './modules/ng-admin-lte/ng-admin-lte.module';
// import { Credentials } from './modules/header/model/credentials';
import { RouterModule, CanActivate } from '@angular/router';
import { CardComponent } from './kitchensink/card/card.component';
import { TableComponent } from './kitchensink/table/table.component';
import { ArlearnHomeComponent } from './kitchensink/arlearn-home/arlearn-home.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CardComponent,
    TableComponent,
    ArlearnHomeComponent
    
  ],
  imports: [
    BrowserModule,NgAdminLteModule,
    RouterModule.forRoot([
      { path: '', component: CardComponent },
      { path: 'card', component: CardComponent },
      { path: 'table', component: TableComponent },
      { path: 'arlearn', component: ArlearnHomeComponent }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

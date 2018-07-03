import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentRowComponent } from './content-row/content-row.component';
import { CardComponent } from './card/card.component';
import { MenuItemComponent } from './main-sidebar/menu-item/menu-item.component';
import { RouterModule, RouterLink } from '@angular/router';
import { SmallCardComponent } from './small-card/small-card.component';
import { TableComponent } from './table/table/table.component';
import { LoginComponent } from './login/login.component';

import { FormsModule }   from '@angular/forms';
import { Credentials } from './model/credentials';


@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [HeaderComponent, MainSidebarComponent, ContentHeaderComponent, 
    ContentRowComponent, CardComponent, MenuItemComponent, SmallCardComponent, 
    TableComponent, LoginComponent],
  exports: [HeaderComponent, MainSidebarComponent, ContentHeaderComponent, 
    ContentRowComponent, CardComponent, MenuItemComponent, SmallCardComponent,
    TableComponent, LoginComponent]
})
export class NgAdminLteModule { }

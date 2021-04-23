import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule}  from '@angular/forms';
import { DummyComponent } from './dummy/dummy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { ShopNavbarComponent } from './shop-navbar/shop-navbar.component';
import { NewProductComponent } from './new-product/new-product.component';
import { from } from 'rxjs';
//import { BsModalRef } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    DummyComponent,
    SidebarComponent, 
    NavbarComponent, 
    AdminSidebarComponent, 
    AdminBodyComponent,
    AdminBodyComponent, 
    ShopSidebarComponent, 
    ShopNavbarComponent, NewProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DummyComponent,
    SidebarComponent,
    NavbarComponent,
    AdminSidebarComponent,
    AdminBodyComponent,
    ShopNavbarComponent,
    ShopSidebarComponent
  ]
})
export class ComponentsModule { }
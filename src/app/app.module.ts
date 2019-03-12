import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerReadComponent } from './customer-read/customer-read.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    CustomerCreateComponent,
    CustomerReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

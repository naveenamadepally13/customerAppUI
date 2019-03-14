import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerReadComponent } from './customer-read/customer-read.component';
import {CustomerServiceService} from './customer-service.service';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

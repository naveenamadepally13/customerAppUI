import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  angForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerServiceService) {
  }
  addCustomer(event) {
    const customerDetail = {
        firstName: event.firstName,
        lastName: event.lastName,
        emailAddress: event.emailAddress,
        address: event.address,
        phoneNo: event.phoneNo
    };
    this.customerService.postCustomer(customerDetail)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }
}

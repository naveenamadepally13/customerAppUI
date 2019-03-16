import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private router: Router, public customerService: CustomerServiceService) {
  }
  onUpdateCustomer(event) {
    const customerDetail = {
      firstName: event.firstName,
      lastName: event.lastName,
      emailAddress: event.emailAddress,
      address: event.address,
      phoneNo: event.phoneNo
    };
    this.customerService.updateCustomerData( this.customerService.id, customerDetail)
      .subscribe(res => {
        this.router.navigateByUrl('customers');
      }, (err) => {
        console.log(err);
      });
  }
  ngOnInit() {
    console.log(this.customerService.editdata);
  }

}

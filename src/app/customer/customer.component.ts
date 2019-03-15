import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router, private customerService: CustomerServiceService) { }
  customers: any;
  // public i = 0;

  open() {
    this.router.navigateByUrl('customer-create');
  }
  edit(customerData) {
    this.customerService.editdata = customerData;
    this.customerService.id = customerData._id;
    this.router.navigateByUrl('customer-update');
  }
  delete(customerData) {
    this.customerService.deleteCustomer(customerData._id)
      .subscribe(res => {
        this.customerService.getCustomers().subscribe(res1 => {
          this.customers = res1;
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(res => {
        console.log(res);
        this.customers = res;
      }, err => {
        console.log(err);
      });
  }

}

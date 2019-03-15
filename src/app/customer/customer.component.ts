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
  open() {
    this.router.navigateByUrl('customer-create');
  }
  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(res => {
        console.log(res);
        this.customers = res[0];
      }, err => {
        console.log(err);
      });
  }

}

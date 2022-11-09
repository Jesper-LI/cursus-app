import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  name = '';
  customers:[] = [];
  
  constructor() {

  }

  ngOnInit(): void {
    this.name = 'Henk';
    this.customers = ['Marcohard','guugle','feeboek','tweeeter'];
  }

}

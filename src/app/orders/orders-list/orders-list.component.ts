import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, } from '@angular/material';
import { DataSource } from '@angular/cdk/table';


//data 
const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    orderDescription: '21 kls of meat',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 15.99,
    orderDescription: '10 kls of cheese',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 10.99,
    orderDescription: '12 beers',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 103,
    total: 49.99,
    orderDescription: '20 kls of rice',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 15.99,
    orderDescription: '10 kls of cheese',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 10.99,
    orderDescription: '12 beers',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 103,
    total: 49.99,
    orderDescription: '20 kls of rice',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 15.99,
    orderDescription: '10 kls of cheese',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 10.99,
    orderDescription: '12 beers',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 103,
    total: 49.99,
    orderDescription: '20 kls of rice',
    isChecked: false
  },
];


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.sass']
})
export class OrdersListComponent implements OnInit {
  //crear columns
  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  //crear sort
  
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  constructor() { }

  ngOnInit() {
   this.dataSource.sort = this.sort;

  }

  selectAll(){
    for (var element of ELEMENT_DATA) 
    {
      element.isChecked = !element.isChecked
    }
  }

}

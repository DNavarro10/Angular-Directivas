import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, } from '@angular/material';
import { DataSource } from '@angular/cdk/table';


//data 
const ELEMENT_DATA = [
  {
    orderDAta: new Date(),
    oderNumber: 100,
    total: 29.99,
    description: '21 kilos of meat',
    isCheked: false
  },
  {
    orderDAta: new Date(),
    oderNumber: 101,
    total: 15.99,
    description: '10 kils of cheese',
    isCheked: false
  },
  {
    orderDAta: new Date(),
    oderNumber: 102,
    total: 10.99,
    description: '12 beers',
    isCheked: true
  },
  {
    orderDAta: new Date(),
    oderNumber: 103,
    total: 49.99,
    description: '20 kilos of rice',
    isCheked: true
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
  
  @ViewChild( MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
   this.dataSource.sort = this.sort;

  }

}

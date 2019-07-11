import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, PageEvent} from '@angular/material';



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
  //columnas y datos
  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource:MatTableDataSource<object>; //cargar datos - los nuevos seran con el loadData
  
  //propiedades del paginator
    length:number = ELEMENT_DATA.length;
    pageIndex:number = 0;
    pageSize:number = 10;
    pageSizeOptions:Array<number> = [1,2,5,10];
    

    pageEvent:PageEvent; //objeto event

  //observer para el sort
  @ViewChild( MatSort, {static: false}) sort: MatSort;
  

  constructor() { }

  ngOnInit() {
    this.loadData(0, this.pageSize);this.dataSource.sort = this.sort;

  }

  //funcion para el checkbox, selecionar todos
  selectAll(){
    for (var element of ELEMENT_DATA) 
    {
      element.isChecked = !element.isChecked
    }
  }
  //funcion para cargar el page desde x punto
  loadData(pageIndex,pageSize)  
  {
    this.dataSource = new MatTableDataSource<Object>(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize)); // p + pS para ver el incremento del array
  }
  onPageChange(e){

    this.pageIndex = e.pageIndex * this.pageSize;

    this.pageSize = e.pageSize;

    this.loadData(this.pageIndex, this.pageSize);

  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import { ServiciosService } from '../../services/servicios.service';  //importar servicios




//data 


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.sass'],
  providers:[ServiciosService]  // necesario para llamar servicios
})
export class OrdersListComponent implements OnInit {
 
 //datos desde serviciios
 public ELEMENT_DATA = []; 
 
  //columnas y datos
  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource:MatTableDataSource<object>; //cargar datos - los nuevos seran con el loadData
   
  
  //propiedades del paginator
    length:Array<number> = this.ELEMENT_DATA;  //this. pora referir al public
    pageIndex:number = 0;
    pageSize:number = 10;
    pageSizeOptions:Array<number> = [1,2,5,10];
    

    pageEvent:PageEvent; //objeto event

  //observer para el sort
  @ViewChild( MatSort, {static: false}) sort: MatSort;
  
  //se declara servicio usando  _Nombre + servicio
  constructor( private _servicio: ServiciosService) { }

  ngOnInit() {
    //se debe iniciar los datos en el init
    this.ELEMENT_DATA = this._servicio.getDatos();
    
    this.loadData(0, this.pageSize);this.dataSource.sort = this.sort;

    console.log(typeof this.ELEMENT_DATA);
  }

  //funcion para el checkbox, selecionar todos
  selectAll(){
    for (var element of this.ELEMENT_DATA) 
    {
      element.isChecked = !element.isChecked
    }
  }
  //funcion para cargar el page desde x punto
  loadData(pageIndex,pageSize)  
  {
    this.dataSource = new MatTableDataSource<Object>(this.ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize)); // p + pS para ver el incremento del array
  }
  onPageChange(e){

    this.pageIndex = e.pageIndex * this.pageSize;

    this.pageSize = e.pageSize;

    this.loadData(this.pageIndex, this.pageSize);

  }
}

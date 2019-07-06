import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.sass']
})
export class MessageNewComponent implements OnInit {
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  

  myControl = new FormControl();
  departmentCtrl = new FormControl();

  priorities:string[] = ['High', 'Medium', 'Low'];

  departments:object[] = [
  {
    id:1,
    name: 'Complaints'
  },
  {
    id:2,
    name: 'Loyalty'
  },
  {
    id:3,
    name: 'Promotions'
  }
  ];
 
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      priorityCtrl: ['', Validators.required],
      myControlDeparment:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
      
    });
 
  }
  getDepartmentName(departments:object){
    return departments ? departments['name'] :undefined;
  }
}

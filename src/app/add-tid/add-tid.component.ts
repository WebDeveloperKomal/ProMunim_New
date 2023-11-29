import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTIDModel } from './add-tid.component.model';

@Component({
  selector: 'app-add-tid',
  templateUrl: './add-tid.component.html',
  styleUrls: ['./add-tid.component.css']
})
export class AddTIDComponent {
  complianceForm !: FormGroup;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: AddTIDModel[] = [];
  currentPage: number = 1;
  countries: AddTIDModel[] | undefined;
  collectionSize =100;

  constructor(private formBuilder: FormBuilder) {

    this.complianceForm = this.formBuilder.group({
      tempcustname: ['', Validators.required], // Add validation if needed
      taxLink: ['', Validators.required], // Add validation if needed
      complianceDueDate: ['', Validators.required] // Add validation if needed
    });
    

  }
}

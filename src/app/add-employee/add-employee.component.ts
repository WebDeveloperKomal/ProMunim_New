import { Component } from '@angular/core';
import { AddNewCustModel } from '../add-new-customer/add-new-customer.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  SearchText: any;

  page = 1;
  pageSize = 10;
  dataarray: AddNewCustModel[] = [];
  currentPage: number = 1;
  countries: AddNewCustModel[] | undefined;
  collectionSize = 100;
  addnewcustomer !: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addnewcustomer = this.formBuilder.group({
      companyname: ['', Validators.required],
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      contactno: ['', Validators.required],
      altcontactno: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      constofcompany: ['', Validators.required],
      segment: ['', Validators.required],
      natureofbus: ['', Validators.required],
      maintitr: ['', Validators.required],
      leadtype: ['', Validators.required],
      leadstatus: ['', Validators.required],
      product: ['', Validators.required],
    });
  }

  applyFilter(): void {
    const searchString = this.SearchText.toLowerCase();
    const filteredData = [...this.dataarray];
    // this.dataarray = filteredData.filter((data) =>
    //   data.branchname.toLowerCase().includes(searchString) ||
    //   data.branchcode.toLowerCase().includes(searchString) ||
    //   data.branchcity.toLowerCase().includes(searchString) ||
    //   data.branchaddress.toLowerCase().includes(searchString)
    // );
  }
  refreshCountries() {
    this.countries = this.dataarray
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}

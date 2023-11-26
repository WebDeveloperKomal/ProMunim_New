import { Component } from '@angular/core';
import { DocumentCategoryModel } from '../documentcategory/documentcategory.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-document-category',
  templateUrl: './edit-document-category.component.html',
  styleUrls: ['./edit-document-category.component.css']
})
export class EditDocumentCategoryComponent {
  complianceForm !: FormGroup;
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: DocumentCategoryModel [] = [];
  currentPage: number = 1;
  countries: DocumentCategoryModel [] | undefined;
  collectionSize =100;
  constructor( private formBuilder: FormBuilder) {
    this.complianceForm = this.formBuilder.group({
      complianceName: ['', Validators.required], // Add validation if needed
      taxLink: ['', Validators.required], // Add validation if needed
      complianceDueDate: ['', Validators.required] // Add validation if needed
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
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}
}

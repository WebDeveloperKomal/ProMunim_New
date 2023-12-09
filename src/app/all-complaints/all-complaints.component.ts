import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { allComplaintModel } from './all-complaints.component.model';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.css']
})
export class AllComplaintsComponent {
  SearchText : any ;
 
  page = 1;
  pageSize = 10 
  dataarray:allComplaintModel[] = [];
  currentPage: number = 1;
  countries: allComplaintModel[] | undefined;
  collectionSize =100;

  complianceForm !: FormGroup;
  
  // dataarray: any[] = [];
  constructor(private formBuilder: FormBuilder) {

    // this.complianceForm = this.formBuilder.group({
    //   complianceName: ['', Validators.required], // Add validation if needed
    //   taxLink: ['', Validators.required], // Add validation if needed
    //   complianceDueDate: ['', Validators.required] // Add validation if needed
    // });
  
}

applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
  this.dataarray = filteredData.filter((data) =>
    data.branchname.toLowerCase().includes(searchString) ||
    data.branchcode.toLowerCase().includes(searchString) ||
    data.branchcity.toLowerCase().includes(searchString) ||
    data.branchaddress.toLowerCase().includes(searchString)
  );
}


refreshCountries() {
  this.countries = this.dataarray
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}

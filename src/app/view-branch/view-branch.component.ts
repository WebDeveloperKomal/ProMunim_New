import { Component } from '@angular/core';
import { ViewAddDailyvisitModel } from '../view-add-dailyvisit/view-add-dailyvisit.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.css']
})
export class ViewBranchComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: ViewAddDailyvisitModel[] = [];
  currentPage: number = 1;
  countries: ViewAddDailyvisitModel[] | undefined;
  collectionSize =100;
  viewbranchForm !: FormGroup;
  activeTab: string = 'tab1';
  constructor(private formBuilder: FormBuilder) {
    this.viewbranchForm = this.formBuilder.group({
      location: ['', Validators.required], // Add validation if needed
      maindepartment: ['', Validators.required], // Add validation if needed
      product: ['', Validators.required] // Add validation if needed
     
    });
  
    
}

applyFilter(): void {
  // const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.dataarray];
  // this.dataarray = filteredData.filter((data) =>
  //   data.branchname.toLowerCase().includes(searchString) ||
  //   data.branchcode.toLowerCase().includes(searchString) ||
  //   data.branchcity.toLowerCase().includes(searchString) ||
  //   data.branchaddress.toLowerCase().includes(searchString)
  // );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}


changeTab(tabId: string) {
  this.activeTab = tabId;
}

switchTabBasedOnId(id: string) {
  if (id === 'tab1') {
    this.activeTab = 'tab1';
  } else if (id === 'tab2') {
    this.activeTab = 'tab2';
  }
}
}

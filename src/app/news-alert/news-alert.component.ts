import { Component } from '@angular/core';
import { NewsalertModel } from './news-alert.component.model';

@Component({
  selector: 'app-news-alert',
  templateUrl: './news-alert.component.html',
  styleUrls: ['./news-alert.component.css']
})
export class NewsAlertComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: NewsalertModel[] = [];
  currentPage: number = 1;
  countries: NewsalertModel[] | undefined;
  collectionSize =100;
  constructor() {
  this.dataarray = [
    {branchid : 1,branchcode :'2019-11-18' , branchcity :'Revision of Fees for Rural' , branchaddress:'Dear Team, Our revised schedule of charges which will be applicable w.e.f 18.11.2019 for all the New Business and Existing Dormant and Close accounts which will be activate from today. Note: Current Live Customers are excluded from this schedule of charges. Regards, Finance Team'  },
    {branchid : 2,branchcode :'2018-06-19' , branchcity :'CRM Updation.' , branchaddress:'Dear IBG-iens, Updation of CRM across departments are compulsory including Daily customer Interactions (Personal Visits/ Telephonic Interaction) FPA Leads by across department, Account Finalized reports by accounts team Tax Challans by Compliance team daily Transactions by finance team, customer Complaints etc. Violation of process will be led to action against the defaulter. Regards, Director - Support'  },
   ]
}

applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
  this.dataarray = filteredData.filter((data) =>
    // data.branchname.toLowerCase().includes(searchString) ||
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
delete(){
  confirm("Are you sure to delete this record")
}
}

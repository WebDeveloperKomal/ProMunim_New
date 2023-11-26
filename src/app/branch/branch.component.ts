import { Component } from '@angular/core';
import { UserModel } from './branch.component.model';
import { ApiService } from '../api.service';

interface BranchData {
  branchid: number;
  branchname: string;
  branchcode: string;
  branchcity: string;
  branchaddress: string;
}
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: UserModel[] = [];
  currentPage: number = 1;
  countries: UserModel[] | undefined;
  collectionSize =100;

  branchList:UserModel[] = [];

  constructor(private service:ApiService) {}

  ngOnInit(){
    this.service.allBranches().subscribe(
      ( data: any) => {

        this.branchList=data.data;
        console.log('Response successful!');
      },
      (error:any) => {
        console.error('API Error:', error);
      }
    );
  }



applyFilter(): void {
//   const searchString = this.SearchText.toLowerCase();
//   const filteredData = [...this.dataarray];
//   this.dataarray = filteredData.filter((data) =>
//   console.log("fndfngn")
//     // data.branchname.toLowerCase().includes(searchString) ||
//     // data.branchcode.toLowerCase().includes(searchString) ||
//     // data.branchcity.toLowerCase().includes(searchString) ||
//     // data.branchaddress.toLowerCase().includes(searchString)
//   );
}
refreshCountries() {
//   this.countries = this.dataarray
//     .map((country, i) => ({id: i + 1, ...country}))
//     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}
delete(){
  confirm("Are you sure to delete this record")
}

}


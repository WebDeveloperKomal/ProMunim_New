import { Component } from '@angular/core';
import { BranchModel } from './branch.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: BranchModel[] = [];
  currentPage: number = 1;
  countries: BranchModel[] | undefined;
  collectionSize =100;

  branchList:BranchModel[] = [];
  branch: BranchModel = new BranchModel();

  constructor(private service:ApiService, private router:Router) {}

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

  delete(id:any){
    confirm("Are you sure to delete this record");
    this.service.deleteBranch(id).subscribe(
      (response:any)=>{
        console.log(response.data);
        window.location.reload();
        Swal.fire('Deleted Successfully!');
      },
      (error:any)=>{
        console.error(error);
      }
    );
  }

  edit(id:any){
    this.router.navigate([`/set/view-branch/`+id])
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


}


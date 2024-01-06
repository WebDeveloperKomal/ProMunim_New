import { Component } from '@angular/core';
import { AllTIDModel } from './all-tid.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-all-tid',
  templateUrl: './all-tid.component.html',
  styleUrls: ['./all-tid.component.css']
})
export class AllTIDComponent {
  SearchText : any ;
 
  page = 1;
  pageSize = 10 ;
  dataarray: AllTIDModel[] = [];
  currentPage: number = 1;
  countries: AllTIDModel[] | undefined;
  collectionSize =100;

  TIDList:AllTIDModel[] = [];

  employeeForm !: FormGroup;

  constructor(private service:ApiService , private router:Router ) { }
 
  ngOnInit(){
    this.service.allTID().subscribe(
      ( data: any) => {

        this.TIDList=data.data;
        console.log('Response successful!',data.data);
      },
      (error:any) => {
        console.error('API Error:', error);
      }
    );
  }

  delete(id:number){
    console.log('ID :::::',id );
    this.service.deleteTID(id).subscribe(
      (response:any)=>{
        console.log(response.data);
        window.location.reload();
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

    edit(id : any){
      this.router.navigate(['/set/tidgeneration/'+id]);
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


// function refreshCountries() {
//   throw new Error('Function not implemented.');
// }
}

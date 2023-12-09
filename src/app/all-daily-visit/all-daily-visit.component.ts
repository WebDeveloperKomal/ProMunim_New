import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllDailyVisitModel } from './all-daily-visit.component.model';
import { ApiService } from '../api.service';
import { UserModel } from '../branch/branch.component.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-all-daily-visit',
  templateUrl: './all-daily-visit.component.html',
  styleUrls: ['./all-daily-visit.component.css']
})
export class AllDailyVisitComponent {
  SearchText: any;

  page = 1;
  pageSize = 10;
  dataarray: AllDailyVisitModel[] = [];
  currentPage: number = 1;
  countries: AllDailyVisitModel[] | undefined;
  collectionSize = 100;


  visitList:AllDailyVisitModel[] = [];

  constructor(private service: ApiService , private router:Router) { }

  ngOnInit(){
    this.service.alldailyVisits().subscribe(
      ( data: any) => {
        this.visitList=data.data;
        console.log('Response successful!');
      },
      (error:any) => {
        console.error('API Error:', error);
      }
    );
  }

  edit(id:any){
    this.router.navigate(['/set/view-add-dailyvisits/'+id]);
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


}
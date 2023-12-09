import { Component } from '@angular/core';
import { TechSupportModel } from './tech-support.component.model';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.css']
})
export class TechSupportComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: TechSupportModel[] = [];
  currentPage: number = 1;
  countries: TechSupportModel[] | undefined;
  collectionSize =100;
  
  id!:number;

  techSupportList:TechSupportModel[] = [];

  constructor(private formBuilder: FormBuilder , private api : ApiService , private router:Router) {
  
}

edit(id:any){
  this.router.navigate(['/set/view-techsupport/'+id]);
}

ngOnInit(){
  this.api.allTechSupport().subscribe(
    ( data: any) => {

      this.techSupportList=data.data;
      console.log('Response successful!');
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );
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

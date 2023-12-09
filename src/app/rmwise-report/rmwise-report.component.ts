import { Component } from '@angular/core';
import { RmWiseModel } from './rmwise-report.component.model';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rmwise-report',
  templateUrl: './rmwise-report.component.html',
  styleUrls: ['./rmwise-report.component.css']
})
export class RMWiseReportComponent {
  SearchText : any ;
 
  page = 1;
  pageSize = 10 ;
  dataarray: RmWiseModel[] = [];
  currentPage: number = 1;
  countries: RmWiseModel[] | undefined;
  collectionSize =100;

  rmlist:RmWiseModel[]=[];

// rmlist: RmWiseModel = new RmWiseModel();

  constructor(private formBuilder: FormBuilder, private api:ApiService) {
}

ngOnInit(){
  this.api.allrmwisereport().subscribe(
    ( data: any) => {
      this.rmlist=data.data;
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

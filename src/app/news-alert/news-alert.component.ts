import { Component } from '@angular/core';
import { NewsalertModel } from './news-alert.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-alert',
  templateUrl: './news-alert.component.html',
  styleUrls: ['./news-alert.component.css']
})
export class NewsAlertComponent {
  SearchText: any;

  page = 1;
  pageSize = 10;
  dataarray: NewsalertModel[] = [];
  currentPage: number = 1;
  countries: NewsalertModel[] | undefined;
  collectionSize = 100;

  NewsAlertList: NewsalertModel[] = [];

  constructor(private api: ApiService , private router: Router) {

  }

  ngOnInit() {
    this.api.allNewsAlert().subscribe(
      (data: any) => {
        this.NewsAlertList = data.data;
        console.log('Response successful!');
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    )
  }

  edit(id: number) {
    this.router.navigate(['/set/view-news-alert/' + id]);
  }

  delete(newsAlertId: number) {
    console.log('ID :::::', newsAlertId);
    this.api.deleteNewsAlert(newsAlertId).subscribe(
      (response: any) => {
        console.log(response.data);
        window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  applyFilter(): void {
    // const searchString = this.SearchText.toLowerCase();
    // const filteredData = [...this.dataarray];
    // this.dataarray = filteredData.filter((data) =>
    //   // data.branchname.toLowerCase().includes(searchString) ||
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
  // delete(){
  //   confirm("Are you sure to delete this record")
  // }
}

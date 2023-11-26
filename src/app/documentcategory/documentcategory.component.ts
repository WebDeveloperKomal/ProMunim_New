import { Component } from '@angular/core';
import { DocumentCategoryModel } from './documentcategory.component.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-documentcategory',
  templateUrl: './documentcategory.component.html',
  styleUrls: ['./documentcategory.component.css']
})
export class DocumentcategoryComponent {
  SearchText : any ;
  
  page = 1;
  pageSize = 10 ;
  dataarray: DocumentCategoryModel[] = [];
  currentPage: number = 1;
  countries: DocumentCategoryModel [] | undefined;
  collectionSize =100;

  DocumentCategoriesList:DocumentCategoryModel[]=[];
  
  constructor(private apiService:ApiService) {}

  ngOnInit(){
    this.apiService.allDocumentCategories().subscribe(
      (response:any)=>{
        console.log(response);
        this.DocumentCategoriesList=response.docCategory;
      },
      (error:any)=>{
        console.error(error);        
      }
    )
  }



applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
  // this.dataarray = filteredData.filter((data) =>
  //   data.branchname.toLowerCase().includes(searchString) ||
  //   data.branchcode.toLowerCase().includes(searchString) ||
  //   data.branchcity.toLowerCase().includes(searchString) ||
  //   data.branchaddress.toLowerCase().includes(searchString)
  // );
}
refreshCountries() {
  this.countries = this.dataarray
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}

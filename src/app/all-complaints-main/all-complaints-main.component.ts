import { Component } from '@angular/core';
import { AllCOmplaintsMainModel } from './all-complaints-main.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-all-complaints-main',
  templateUrl: './all-complaints-main.component.html',
  styleUrls: ['./all-complaints-main.component.css']
})
export class AllComplaintsMainComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: AllCOmplaintsMainModel[] = [];
  currentPage: number = 1;
  countries: AllCOmplaintsMainModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  users : any;
  constructor(private formBuilder: FormBuilder , private api : ApiService) {




    {
      this.api.users().subscribe((data)=> {
        console.log('data', data);
        this.users = data
      })
    }

    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], // Add validation if needed
      maindepartment: ['', Validators.required], // Add validation if needed
      department: ['', Validators.required] // Add validation if needed
     
    });
  this.dataarray = [
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION	' , branchaddress:'Tentative statement delayed',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Daund',emiid : 'A1000' , branchname: 'Hadapsar'  },
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Tentative statement delayed',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Daund',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Daund' ,emiid : 'A1000', branchname: 'Hadapsar' },
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Tentative statement delayed' ,emiid : 'A1000' , branchname: 'Hadapsar'},
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Daund',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Tentative statement delayed',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Tentative statement delayed',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Daund' ,emiid : 'A1000' , branchname: 'Hadapsar'},
    {branchid : 10601400000001, branchcustname :'#CDE-699-63750' ,branchcode :'18-Sep-2023' , branchcity :'OM SAINATH CONSTRUCTION' , branchaddress:'Tentative statement delayed',emiid : 'A1000' , branchname: 'Hadapsar' },
    // {branchid : 12, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'18-Sep-2023' , branchaddress:'Daund',emiid : 'A1000'  },
    // {branchid : 13, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028',emiid : 'A1000' , branchname: 'Hadapsar' },
    // {branchid : 14, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028' ,emiid : 'A1000' , branchname: 'Hadapsar'},
   ]
}

applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
  this.dataarray = filteredData.filter((data) =>
    data.branchname.toLowerCase().includes(searchString) ||
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

}

import { Component } from '@angular/core';
import { AllCustomerListModel } from './all-customer-list.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-customer-list',
  templateUrl: './all-customer-list.component.html',
  styleUrls: ['./all-customer-list.component.css']
})
export class AllCustomerListComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: AllCustomerListModel[] = [];
  currentPage: number = 1;
  countries: AllCustomerListModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], // Add validation if needed
      maindepartment: ['', Validators.required], // Add validation if needed
      department: ['', Validators.required] // Add validation if needed
     
    });
  this.dataarray = [
    {branchid : 1695021922, branchcustname :'DILEEP' ,branchcode :'18-Sep-2023' , branchcity :'AOFProcessing	' , branchaddress:'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 1695021922, branchcustname :'MANOJ SATISH RAIKAR' ,branchcode :'18-Sep-2023' , branchcity :'Running' , branchaddress:'Daund',emiid : 'A1000' , branchname: 'Hadapsar'  },
    {branchid : 1695021922, branchcustname :'VIKRAM BHOSLE / SUJATA BHOSALE' ,branchcode :'18-Sep-2023' , branchcity :'Complete' , branchaddress:'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 1695021922, branchcustname :'MANOJ SATISH RAIKAR' ,branchcode :'18-Sep-2023' , branchcity :'Pending' , branchaddress:'Daund',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 1695021922, branchcustname :'MANOJ SATISH RAIKAR' ,branchcode :'18-Sep-2023' , branchcity :'Running' , branchaddress:'Daund' ,emiid : 'A1000', branchname: 'Hadapsar' },
    {branchid : 1695021922, branchcustname :'VIKRAM BHOSLE / SUJATA BHOSALE' ,branchcode :'18-Sep-2023' , branchcity :'Running' , branchaddress:'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx' ,emiid : 'A1000' , branchname: 'Hadapsar'},
    {branchid : 1695021922, branchcustname :'MANOJ SATISH RAIKAR' ,branchcode :'18-Sep-2023' , branchcity :'Pending' , branchaddress:'Daund',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 1695021922, branchcustname :'VIKRAM BHOSLE / SUJATA BHOSALE' ,branchcode :'18-Sep-2023' , branchcity :'AOFProcessing' , branchaddress:'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 1695021922, branchcustname :'MANOJ SATISH RAIKAR' ,branchcode :'18-Sep-2023' , branchcity :'Running' , branchaddress:'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx',emiid : 'A1000' , branchname: 'Hadapsar' },
    {branchid : 1695021922, branchcustname :'MANOJ SATISH RAIKAR' ,branchcode :'18-Sep-2023' , branchcity :'Pending' , branchaddress:'Daund' ,emiid : 'A1000' , branchname: 'Hadapsar'},
    {branchid : 1695021922, branchcustname :'VIKRAM BHOSLE / SUJATA BHOSALE' ,branchcode :'18-Sep-2023' , branchcity :'Pending' , branchaddress:'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx',emiid : 'A1000' , branchname: 'Hadapsar' },
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

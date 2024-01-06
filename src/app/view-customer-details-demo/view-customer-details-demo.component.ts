import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ViewCustomerdetailModel } from '../view-customer-details/view-customer-details.component.model';

@Component({
  selector: 'app-view-customer-details-demo',
  templateUrl: './view-customer-details-demo.component.html',
  styleUrls: ['./view-customer-details-demo.component.css']
})
export class ViewCustomerDetailsDemoComponent {

  

  employeeForm !: FormGroup;
   employeeForm1 !:FormGroup;
   addform !: FormGroup;
   SearchText : any ;
   branchid : number | undefined;
   branchname : any;
   branchcode: any;
   branchcity: any;
   branchaddress : any;
   page = 1;
   pageSize = 10 ;
  
   currentPage: number = 1;
   // countries: ViewCustomerdetailModel[] | undefined;
   collectionSize =100;
   activeTab: string = 'tab1';
 
   ReadMore:boolean = true;
 visible:boolean = true;
 visible1:boolean = true;
 visible2:boolean = true;
 visible3:boolean = true;
 visible4:boolean = true;
 visible5:boolean = true;
 visible6:boolean = true;
 visible7:boolean = true;
 visible8:boolean = true;
 visible9:boolean = true;
 visible10:boolean = true;
 visible11:boolean = true;
 visible15:boolean = true;
 visible16 : boolean = false;
 showdata: boolean = true;
   showdata1 : boolean = false;
   showdata2: boolean = true;
   showdata3 : boolean = false;
   showdata4 : boolean = false;
   showdata5 : boolean = false;
   showdatacust: boolean = true;
   showdatacust1 : boolean = false;
 customeraccountdetails:  ViewCustomerdetailModel = new ViewCustomerdetailModel;
 // getcompanyusedetails : ViewCustomerdetailModel[] = [];
 //  getproddetails : ViewCustomerdetailModel = new ViewCustomerdetailModel;
 
   constructor(private formBuilder: FormBuilder , private apiService:ApiService) {
 
     
     this.addform = this.formBuilder.group({
       organizationname: ['', Validators.required], 
       dateofincorp: ['', Validators.required], 
       pan: ['', Validators.required],
       adhar :  ['', Validators.required]
     });
 
     this.employeeForm1 = this.formBuilder.group({
       productName: ['', Validators.required], 
       assignDate: ['', Validators.required], 
       expiryDate: ['', Validators.required],
       dueDate :  ['', Validators.required]
     });
 // this.updaeproductdetail = this.formBuilder.group({
 
 // })
 
 }
 
 ngOnInit(){ 
 
  //  this.getproductdetails(8888888888);
 }
 
 applyFilter(): void {
   const searchString = this.SearchText.toLowerCase();
   // const filteredData = [...this. customeraccountdetails];
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
 
 
 changeTab(tabId: string) {
   this.activeTab = tabId;
 }
 
 switchTabBasedOnId(id: string) {
   if (id === 'tab1') {
     this.activeTab = 'tab1';
   } else if (id === 'tab2') {
     this.activeTab = 'tab2';
   }else if (id === 'tab3') {
     this.activeTab = 'tab3';
   }
 }
 delete(){
   confirm("Are you sure to delete this record")
 }
 AddInvoice(){
   // confirm("Please Select Customer")
   this.showdata2 = !this.showdata2;
   this.showdata3 = !this.showdata3
 }
 AddInvoice1(){
   this.showdata2 = true  ;
   this.showdata3 = false;
 }
 AddInvoice2(){
   // confirm("Please Select Customer")
   this.showdata4 = !this.showdata4;
   this.showdata2 = !this.showdata2
 }
 AddInvoice3(){
   this.showdata2= true  ;
   this.showdata4 = false;
 }
 AddInvoice4(){
   this.showdata2= true  ;
   this.showdata5 = false;
 }
 
 
 view(){
   this.showdata5 = !this.showdata5;
   this.showdata2 = !this.showdata2
 }
 customerinteraction(){
   this.showdatacust = !this.showdatacust;
   this.showdatacust1 = !this.showdatacust1;
 }
 customerinteraction1(){
   this.showdatacust = true  ;
   this.showdatacust1 = false;
 }
 
 AddAccountWritting(){
   confirm("Please Select Customer")
 }
 
 
 
 
 onclick()
 {
   this.ReadMore = !this.ReadMore; //not equal to condition
   this.visible = !this.visible;
   
 }
 
 
 onclick1()
 {
   this.visible1 = !this.visible1;
 }
 
 
 onclick2()
 {
   this.visible2 = !this.visible2;
 }
 
 onclick3()
 {
   this.visible3 = !this.visible3;
 }
 
 onclick4()
 {
   this.visible4 = !this.visible4;
 }
 
 onclick5()
 {
   this.visible5 = !this.visible5;
 }
 
 onclick6()
 {
   this.visible6 = !this.visible6;
 }
 
 onclick7()
 {
   this.visible7 = !this.visible7;
 }
 
 onclick8()
 {
   this.visible8 = !this.visible8;
 }
 
 onclick9()
 {
   this.visible9 = !this.visible9;
 }
 
 onclick10()
 {
   this.visible10 = !this.visible10;
 }
 
 onclick11()
 {
   this.visible11 = !this.visible11;
 }
 
 // onclick15(){
 //   this.visible15 = !this.visible15;
 //   this.visible16 = !this.visible16;
 
 // }
 
 shownewrole(){
   this.showdata = !this.showdata;
   this.showdata1 = !this.showdata1
 }
 shownewrole1(){
   this.showdata = true  ;
   this.showdata1 = false;
 }
 
 
//  getproductdetails(accountno:any){
   
//    this.apiService.getProductSer(8888888888).subscribe(
//      (res:any)=>{
//        this.customeraccountdetails =res.data
//  console.log("dataaaa", res.data);
//  // this.getproddetails = res.data ;
 
//      },
//      (error:any)=>{console.error(error);
//      }
//    )
 
//  }
 
 // UpdateProductDetails(){
 //   this.apiService.updateProductSer(){
 
 //   }
 // }
 
//  onSubmit()
//  {
//      let comp = {
//                // productName : this.customeraccountdetails.productName,
//                assignDate: this.customeraccountdetails.assignDate,
//                expiryDate: this.customeraccountdetails.expiryDate,
//                dueDate: this.customeraccountdetails.dueDate,
//                // nextInvoiceDate : "2023-12-03" ,
//                invoiceId: this.customeraccountdetails.invoiceId,
//                productId: this.customeraccountdetails.productId,
//                id : this.customeraccountdetails.id,
//                accountNo:this.customeraccountdetails.accountNo
//              };
 
//      this.apiService.updateProductSer(comp).subscribe(
//      (response:any)=>{
//        console.log(response.data);
//        Swal.fire({
//          title: "Record Updated!",
//          icon: "success"
//        });
//      },
//      (error:any)=>{
//        console.error(error);
//        Swal.fire({
//          title: "Error!",
//          icon: "error"
//        });
//      }
//    );
//    // setInterval(()=>{window.location.reload()},1000);
//  }
 
 // gettype(tid:any){
   
 //   this.apiService.gettype(tid:any).subscribe(
 //     (res:any)=>{this.customeraccountdetails =res.data
 
 //     },
 //     (error:any)=>{console.error(error);
 //     }
 //   )
 
 
 // }
 
 // getoccupationincomedetails(){
   
 //   this.apiService.getoccupationincomedetails().subscribe(
 //     (res:any)=>{this.customeraccountdetails =res.data
 
 //     },
 //     (error:any)=>{console.error(error);
 //     }
 //   )
 
 // }
 
 // getoccupationincomedetailsbytid(tid:any){
   
 //   this.apiService.getoccupationincomedetailsbytid(tid:any).subscribe(
 //     (res:any)=>{this.customeraccountdetails =res.data
 
 //     },
 //     (error:any)=>{console.error(error);
 //     }
 //   )
 
 // }
 // getcustomeraccount(){
   
 //   this.apiService.getcustomerAccount().subscribe(
 //     (res:any)=>{this.customeraccountdetails =res.data
 
 //     },
 //     (error:any)=>{console.error(error);
 //     }
 //   )
 
 // }
 
 // getcompanyuse(tid:any){
   
 //   this.apiService.getcompanyuse(tid:any).subscribe(
 //     (res:any)=>{this.getcompanyusedetails =res.data
 
 //     },
 //     (error:any)=>{console.error(error);
 //     }
 //   )
 
 // }
 
 // getcustomerPro(tid:any){
   
 //   this.apiService.getcustomerPro(tid:any).subscribe(
 //     (res:any)=>{this.customeraccountdetails =res.data
 
 //     },
 //     (error:any)=>{console.error(error);
 //     }
 //   )
 
 // }
}

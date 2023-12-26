import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewCustomerdetailNewModel } from './view-customer-details.component.model';


import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TidService } from '../tid.service';
import { ProductModel } from './product.model';
import { accountModel } from './account.model';
import { complianceModel } from './compliance.model';
import { billingModel } from './billing.model';
import { ProfileModel } from './profile.model';
import { ViewCustomerdetailModelNew } from './viewnew.model';
import Swal from 'sweetalert2';
import { acWriting } from '../view-customer-details-new/accountwrittingModel';
import { kycModel } from '../view-customer-details-new/kycModel';
import { bankStatementListModel } from '../view-customer-details-new/bankstatementlistModel';
import { CustomerDocs } from '../view-customer-details-new/customerdocsModel';
import { AuthorisedSignatoryModel } from '../view-customer-details-new/authorisedsigntoryModel';
import { transactionModel } from '../view-customer-details-new/transactionModel';
import { VoucherModel } from '../view-customer-details-new/voucherModel';
import { AofTwomodel } from '../accountopening-form/aofmodel2';
import { ViewCustomerdetailModel } from '../view-customer-details-new/view-customer-details-new.model';
import { CustInteractionModel } from '../view-customer-details-new/customerinteractionModel';
import { TaxPlanningModel } from '../view-customer-details-new/taxplanningModel';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css']
})
export class ViewCustomerDetailsComponent {
 
  step1 !: FormGroup;
  step2 !: FormGroup;
  employeeForm !: FormGroup;
  employeeForm1 !: FormGroup;
  addform !: FormGroup;
  SearchText: any;
  branchid: number | undefined;
  branchname: any;
  branchcode: any;
  branchcity: any;
  branchaddress: any;

  addvoucher !: FormGroup;

  page = 1;
  pageSize = 10;

  currentPage: number = 1;
  countries: ViewCustomerdetailModel[] | undefined;
  collectionSize = 100;
  activeTab: string = 'tab1';

  ReadMore: boolean = true;
  visible: boolean = true;
  visible1: boolean = true;
  visible2: boolean = true;
  visible3: boolean = true;
  visible4: boolean = true;
  visible5: boolean = true;
  visible6: boolean = true;
  visible7: boolean = true;
  visible8: boolean = true;
  visible9: boolean = true;
  visible10: boolean = true;
  visible11: boolean = true;
  visible15: boolean = true;
  visible16: boolean = false;
  showdata: boolean = true;
  showdata1: boolean = false;
  addcustInteractionForm !: FormGroup ;
 UpdatecustInteractionForm !: FormGroup ;
 showdatacust: boolean = true;
 showdatacust1 : boolean = false;
 showdatacust2 : boolean = false;
 addTaxPlanning !: FormGroup ;
 UpdateTaxPlanning !: FormGroup ;
 addAccountWritting !: FormGroup ;
  customeraccountdetails1:  ViewCustomerdetailModel = new ViewCustomerdetailModel;
  customeraccountdetails: ViewCustomerdetailModel[] = [];
  getcompanyusedetails: ViewCustomerdetailModel[] = [];
  Newdata: ViewCustomerdetailModelNew = new ViewCustomerdetailModelNew();
  Newdata1: ViewCustomerdetailNewModel = new ViewCustomerdetailNewModel();
  signitury: ViewCustomerdetailNewModel[] = [];
  productList: ProductModel = new ProductModel();
  accountList: accountModel = new accountModel();
  compliancesList: complianceModel = new complianceModel();
  BillingList: billingModel = new billingModel();

  ProfileList: ProfileModel = new ProfileModel();
  acWritingList: acWriting[] = [];
  customerinteractiondetails : CustInteractionModel [] = [];
customerinteractiondetailsobj : CustInteractionModel = new CustInteractionModel() ;

  kycList: kycModel [] =[];
  bankStatementList: bankStatementListModel[] = [];
  getDocList: CustomerDocs = new CustomerDocs();


  SignatoryList: AuthorisedSignatoryModel[] = [];

  transactionList: transactionModel[] = [];
  voucherdetails: VoucherModel[] = [];
  taxplanningdetails : TaxPlanningModel[] = [] ;
  AOF2: AofTwomodel = new AofTwomodel();

  id!: number;
  tidData = {
    tid: 0
  }
  accdata = {
    accountNo: 0
  }

  URL: any;
  photo!: File;
  sign!: File;

  // receiptImage!: File;

  // onReceiptImage(event: any) {
  //   this.receiptImage = event.target.files[0];
  // }

  onPhotoSelected(event: any) {
    this.photo = event.target.files[0];
  }

  onSignSelected(event: any) {
    this.sign = event.target.files[0];
  }


  company = [{
    RMCode: "",
    approveBy: "",
    SerAccWrite: "",
    RMEmpCode: "",
    complianceManagerCode: "",
    LGC: "",
    SerInvPlan: 0,
    accFreqState: "",
    branch: "",
    tid: 0,
    sourceCode: "",
    collectionManagerCode: "",
    operationMode: 0,
    SerTaxPlan: 0,
    empCode: "",
    accountsManagerCode: "",
    acc_source_date: "",
    id: 0,
    tempCustLeadConvertorCode: "",
    SerFinPlan: "",
    // acc_source_date: ""

  }]

  constructor(private formBuilder: FormBuilder, private apiservice: ApiService, private sharedService: TidService, private route: ActivatedRoute, private router: Router) {


    this.step1 = this.formBuilder.group({
      tid: ['', Validators.required],
      branchId: ['', Validators.required],
      aofNo: ['', Validators.required],
      tempCustUIN: ['', Validators.required],
      tempCustApplicantName: ['', Validators.required],
      tempCustdorordob: ['', Validators.required],
      organization_individual_details_id: ['', Validators.required],
      tempCustPanNumber: ['', Validators.required],
      adharno: ['', Validators.required],
      tempCustRegAddress: ['', Validators.required],
      tempCustCity: ['', Validators.required],
      tempCustRegMobile: ['', Validators.required],
      tempCustRegPIN: ['', Validators.required],
      tempCustRegTelephone: ['', Validators.required],
      tempCustRegMailID: ['', Validators.required],
      tempCustMailingAddress: ['', Validators.required],
      tempCustMailingAddressCity: ['', Validators.required],
      tempCustMailingAddressPin: ['', Validators.required],
      tempCustMailingAddressMobileNo: ['', Validators.required],
      tempCustMailingAddressTelephone: ['', Validators.required],
      mailingaddress: ['', Validators.required],
      city1: ['', Validators.required],
      pin1: ['', Validators.required],
      mobileno1: ['', Validators.required],
      telephoneno1: ['', Validators.required],
    });

    this.addform = this.formBuilder.group({
      // tids :  this.id,
      // org_ind_details_id: ['', Validators.required],
      // date: ['', Validators.required],
      // pan: ['', Validators.required],
      // aadhaar: ['', Validators.required],
      // tan: ['', Validators.required],
      // pt: ['', Validators.required],
      // gst: ['', Validators.required],
      // uin: ['', Validators.required],
      // tasc: ['', Validators.required],
      // email: ['', Validators.required],
      // address: ['', Validators.required],
      // maddress: ['', Validators.required],


      // city: ['', Validators.required],
      // mcity: ['', Validators.required],
      // pin: ['', Validators.required],
      // mpin: ['', Validators.required],
      // telephone: ['', Validators.required],
      // mTelephone: ['', Validators.required],
      // mobileNumber: ['', Validators.required],
      // mMobile: ['', Validators.required],
      // whatsAppNo: ['', Validators.required],
      tids: localStorage.getItem('tidprofile'),
      applicantName: ['', Validators.required],
      incorporationRegistrationDob: ['', Validators.required],
      pan_No: ['', Validators.required],
      aadhaarNo: ['', Validators.required],
      tanNo: ['', Validators.required],
      ptNo: ['', Validators.required],
      gstNo: ['', Validators.required],
      uin: ['', Validators.required],
      tascNo: ['', Validators.required],
      emailId: ['', Validators.required],
      address: ['', Validators.required],
      maAddress: ['', Validators.required],

      city: ['', Validators.required],
      m_city: ['', Validators.required],
      pin: ['', Validators.required],
      m_pin: ['', Validators.required],
      telephoneNo: ['', Validators.required],
      m_telephoneNo: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      m_mobileNumber: ['', Validators.required],
      whatsAppNo: ['', Validators.required],
    });

    this.employeeForm1 = this.formBuilder.group({
      Product: ['', Validators.required],
      assigndate: ['', Validators.required],
      expirydate: ['', Validators.required],
      duedate: ['', Validators.required]
    });


    this.step2 = this.formBuilder.group({
      tid: ['', Validators.required],
      name: ['', Validators.required],
      shortName: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      religion: ['', Validators.required],
      motherName: ['', Validators.required],
      designation: ['', Validators.required],
      mobile: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      serFinanPlan: ['', Validators.required],
      serAccWrite: ['', Validators.required],
      serInvestPlan: ['', Validators.required],
      serTaxPlan: ['', Validators.required]
      // tid :  ['', Validators.required]
    });

    this.addvoucher = this.formBuilder.group({
      accountNo : localStorage.getItem('accountNo'),
      // accountNo : this.voucherdetails.accountNo ,
      // accountNo: ['', Validators.required],
      voucherDate: ['', Validators.required],
      paymentDate: ['', Validators.required],
      amount: ['', Validators.required],
      paymentMode: ['', Validators.required],
      description: ['', Validators.required],
      // receiptImage:['',Validators.required]
    })


    this.addcustInteractionForm = this.formBuilder.group({
      accountNo : ['', Validators.required],
      branchId : ['', Validators.required],
      status :['', Validators.required],
      followupType :['', Validators.required],
      followupByWhom:['', Validators.required],
      date: ['', Validators.required],
      discription : ['', Validators.required],
      nextDate : ['', Validators.required],
      isVisited : false
     
     })
     
     this.UpdatecustInteractionForm = this.formBuilder.group({
      accountNo : ['', Validators.required],
      branchId : ['', Validators.required],
      status :['', Validators.required],
      followupType :['', Validators.required],
      followupByWhom:['', Validators.required],
      date: ['', Validators.required],
      discription : ['', Validators.required],
      nextDate : ['', Validators.required],
      isVisited : false ,
      // followupId : ['', Validators.required]
      followupId : localStorage.getItem("followupId")
     
     })

     
this.addTaxPlanning= this.formBuilder.group({
  // accountNo : localStorage.getItem("acccountNo") ,
  accountNo : this.route.snapshot.params['accountNo'],
  taxName : ['', Validators.required],
  fromDate : ['', Validators.required],
  toDate :['', Validators.required],
  paidDate :['', Validators.required],
  paidAmount:['', Validators.required],
  description:['', Validators.required],
 
 
 })

  }

  applyFilter(): void {
    const searchString = this.SearchText.toLowerCase();
    const filteredData = [...this.customeraccountdetails];
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
    } else if (id === 'tab3') {
      this.activeTab = 'tab3';
    }
  }


  delete(id: number) {
    console.log('ID :::::', id);
    this.apiservice.deleteAuthorisedSignatory(id).subscribe(
      (response: any) => {
        console.log(response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }
  

  deleteBankStatements(id : number){
    confirm("Are you sure to delete this record...")

    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteDoc2(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload(); deleteKYCDocument
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteSalesDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteSalesDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deletePurchaseDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deletePurchaseDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteExpenseDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteExpenseDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteLoanDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteLoanDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteCheckBooksDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteCheckBooksDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deletePayInSlipDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deletePayInSlipDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteInvestmentDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteInvestmentDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteTaxesDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteTaxesDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteVehicleDocument(id : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteVehicleDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

 
  deleteVoucher(voucherId : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteVoucher(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteKYCDocument(voucherId : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteKYCDocument(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload(); 
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteAccWriting(voucherId : number){
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteAccWriting(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements",response.data);
        // window.location.reload(); deleteAccWriting
      },
      (error: any) => {
        console.error(error);
      }
    )
  }
  
  AddInvoice() {
    confirm("Please Select Customer")
  }

  AddAccountWritting() {
    confirm("Please Select Customer")
  }


  onclick() {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible;

  }

  onclick1() {
    this.visible1 = !this.visible1;
  }

  onclick2() {
    this.visible2 = !this.visible2;
  }

  onclick3() {
    this.visible3 = !this.visible3;
  }

  onclick4() {
    this.visible4 = !this.visible4;
  }

  onclick5() {
    this.visible5 = !this.visible5;
  }

  onclick6() {
    this.visible6 = !this.visible6;
  }

  onclick7() {
    this.visible7 = !this.visible7;
  }

  onclick8() {
    this.visible8 = !this.visible8;
  }

  onclick9() {
    this.visible9 = !this.visible9;
  }

  onclick10() {
    this.visible10 = !this.visible10;
  }

  onclick11() {
    this.visible11 = !this.visible11;
  }

  // onclick15(){
  //   this.visible15 = !this.visible15;
  //   this.visible16 = !this.visible16;

  // }

  shownewrole() {
    this.showdata = !this.showdata;
    this.showdata1 = !this.showdata1
  }
  shownewrole1() {
    this.showdata = true;
    this.showdata1 = false;
  }

  customerinteraction(){
    this.showdatacust = !this.showdatacust;
    this.showdatacust1 = !this.showdatacust1;
   }
   customerinteraction1(){
    this.showdatacust = true ;
    this.showdatacust1 = false;
   }
   customerinteraction2(followupId:any){
    this.showdatacust = !this.showdatacust;
    this.showdatacust2 = !this.showdatacust2;
    localStorage.setItem("followupId", followupId);
   
   }
   
   customerinteraction3(){
    this.showdatacust = true ;
    this.showdatacust2 = false;
   }



  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // this.getVoucher(this.accountNo)

    console.log(this.id);
    this.apiservice.getAccount(this.id).subscribe(
      (response: any) => {
        this.accountList = response.data;
        // console.log("account", response.data);

        localStorage.setItem('accountNo', this.accountList.accountNo);
        

        this.apiservice.acWriting(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.acWritingList = response.data;
            console.log("accWriting", response.data);
          },
          (error: any) => { console.error(error); }
        )

        this.apiservice.getBankStatement(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.bankStatementList = response.data;
            // console.log("bankStatementList,,,,,,, ", response.data);
          },
          (error: any) => { console.error(error); }
        )

        // getTransaction
        this.apiservice.getTransaction(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.transactionList = response.data;
            // console.log("transaction,,,,", response.data);
          },
          (error: any) => {
            console.error(error);
          }
        )

        this.apiservice.getVoucher(this.accountList.accountNo).subscribe(
          (res: any) => {
            this.voucherdetails = res.data;
            // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
            // console.log("getvoucher", res.data);
            // this.getproddetails = res.data ;

          },
          (error: any) => {
            console.error(error);
          }
        )

        // console.log('********** Doc List **************', this.accountList.accountNo);
        this.accdata.accountNo = this.accountList.accountNo;
        this.apiservice.getDoc2(this.accdata).subscribe(
          (response: any) => {
            //  console.log("Doc List,,,,,,,,,,,,,,", response);
            this.getDocList = response;
            // console.log("bulkDocument,,,,,,,,,,,,,,", this.getDocList.payInSlips);
          },
          (error: any) => { console.error('Check Book ERROR :::: ', error); }
        )
      },
      (error: any) => { console.error(error); }
    )


    console.log(this.id);
    this.apiservice.getSignatory(this.id).subscribe(
      (response: any) => {
        this.signitury = response.data;
      },
      (error: any) => { console.error(error); }
    )


    console.log(this.id);
    this.apiservice.getCompliances(this.id).subscribe(
      (response: any) => {
        this.compliancesList = response.data;
        console.log("compliance", response.data);
      },
      (error: any) => { console.error(error); }
    )

    console.log("dataaaaa*************", this.Newdata.email);
    this.apiservice.getCustomerInfo(this.id).subscribe(
      (response: any) => {
        this.Newdata = response.data;
        console.log("dataaaaa*************", response.data);
      },
      (error: any) => { console.error(error); }
    )


    console.log(this.id);
    this.apiservice.getcompliance2(this.id).subscribe(
      (response: any) => {
        this.productList = response.custPro;
        // console.log("getcompliance2", response.custPro);
        // console.log("getcomplianceproductname", response.custPro.productName);
      },
      (error: any) => { console.error(error); }
    )


    console.log(this.id);
    this.apiservice.getCompanyUse(this.id).subscribe(
      (response: any) => {
        this.Newdata1 = response.data;
        // console.log("companyuse", response.data);
      },
      (error: any) => { console.error(error); }
    )

    console.log(this.id);
    this.apiservice.getBilling(this.id).subscribe(
      (response: any) => {
        this.BillingList = response;
        // console.log("billing", response);
      },
      (error: any) => { console.error(error); }
    )


    this.tidData.tid = this.id;
    console.log('************** kyc details *******************', this.tidData);
    this.apiservice.getKYCDocuments(this.tidData).subscribe(
      (response: any) => {
        this.kycList = response.document;
        console.log("kyc,,,,,,,,,,,,,,,,", response);
        // window.location.reload();
      },
      (error: any) => { console.error("kyc error,,,,,,,,,,,,,,,,", error); }
    )

    console.log(this.id);
    this.apiservice.getProfile(this.id).subscribe(
      (response: any) => {
        this.ProfileList = response.data;
        console.log("ProfileList***************", response.data);
        localStorage.setItem('tidprofile', response.data.tid)
      },
      (error: any) => { console.error(error); }
    )

    //getAuthorisedSignatory

    console.log(this.id);
    this.apiservice.getAuthorisedSignatory(this.id).subscribe(
      (response: any) => {
        this.SignatoryList = response.data;
        // console.log("getAuthorisedSignatory,,,,,,,,", response.data);
      },
      (error: any) => { console.error(error); }
    )

    this.getproductdetails(8888888888);
    this.getCUstInteractiondetails(8888888888);
    // console.log(this.id);
    // this.apiservice.acWriting(this.id).subscribe(
    //   (response: any) => {
    //     this.acWritingList = response.data;
    //     console.log("ProfileList", response.data);

    //   },
    //   (error: any) => { console.error(error); }
    // )


  }

  // getVoucher(acccountNo : any){
  //   this.accountNo = this.route.snapshot.params['accountNo'];
  //   this.apiservice.getVoucher(this.accountNo).subscribe(
  //     (res:any)=>{
  //       this.voucherdetails =res.data;
  //       // localStorage.setItem("followupId", res.data.followupId);
  //       // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
  // console.log("getvoucher", res.data);
  // // this.getproddetails = res.data ;

  //     },
  //     (error:any)=>{console.error(error);
  //     }
  //   )
  // }

  AddVoucher() {
    // console.log("AddcustInteraction,,,,,,,", this.accountList.accountNo);
    console.log("AddcustInteraction***********", this.addvoucher.value);
console.log("Photo****************",this.photo)
    this.apiservice.addVoucher(this.addvoucher.value, this.photo).subscribe(
      (response: any) => {
        console.log("AddVoucher", response.data);
        Swal.fire({
          title: "Record Saved!",
          icon: "success"
        });
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
    );
    // setInterval(()=>{window.location.reload()},1000);
  }



  // delete(newsAlertId: number) {
  //     console.log('ID :::::', newsAlertId);
  //     this.api.deleteNewsAlert(newsAlertId).subscribe(
  //       (response: any) => {
  //         console.log(response.data);
  //         window.location.reload();
  //       },
  //       (error: any) => {
  //         console.error(error);
  //       }
  //     )
  //   }

  updateProfile() {
    console.log("resppppp", this.addform.value);
    this.apiservice.updateProfile(this.addform.value).subscribe(
      (response: any) => {
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
      },
      (error:any)=>{
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
    );
  }

  onsubmit2() {
    console.log("Get Signatory,,,,,, ::::::: ", this.step2.value, this.photo, this.sign);
    this.apiservice.aof2Form(this.step2.value, this.photo, this.sign).subscribe(
      (response: any) => {
        // console.log('Get Signatory,,,,,,', response.data);
      },
      (error: any) => {
        console.error("not workingggg", error);
      }
    )
  }


  
//CustomerInteraction

getCUstInteractiondetails(accountno:any){
  // var accountno = 
this.apiservice.getCustomerInteraction(8888888888).subscribe(
(res:any)=>{
  this.getCUstInteractiondetails =res.data;
  // localStorage.setItem("followupId", res.data.followupId);
  // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
console.log("customerinteractiondetails", res.data);
// this.getproddetails = res.data ;

},
(error:any)=>{console.error(error);
}
)

}
AddcustInteraction(){
 console.log("AddcustInteraction",this.addcustInteractionForm.value);

 this.apiservice.addCustInteraction(this.addcustInteractionForm.value).subscribe(
   (response:any)=>{
     console.log("AddcustInteraction",response.data);
     Swal.fire({
       title: "Record Saved!",
       icon: "success"
     });
   },
   (error:any)=>{
     console.error(error);
     Swal.fire({
       title: "Error!",
       icon: "error"
     });
   }
 );
 // setInterval(()=>{window.location.reload()},1000);
}
edit(id:any){
  this.router.navigate([`/set/view-branch/`+id])
}

updateCustInteraction(){

console.log("updateCustInteraction ::::: ", this.UpdatecustInteractionForm.value);
let followupId = localStorage.getItem("followupId");

if (!followupId) {
 console.error("FollowupId not found in local storage");
 return;
}
// this.updateCustInteraction.patchValue({
//  followupId: followupId,

// });
// localStorage.getItem
     this.apiservice.updateCustInteraction(this.UpdatecustInteractionForm.value,).subscribe(
     (response:any)=>{
       console.log(response.data);
       Swal.fire({
         title: "Record Updated!",
         icon: "success"
       });
       setInterval(()=>{window.location.reload()},1000);
     },
     (error:any)=>{
       console.error(error);
       Swal.fire({
         title: "Error!",
         icon: "error"
       });
       // setInterval(()=>{window.location.reload()},1000);
     }
   );
 }
 deletecustInteraction(followupId:any){
   Swal.fire({
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!"
     }).then((result) => {
     if (result.isConfirmed) 
     {
       this.apiservice.deleteCustInteraction(followupId).subscribe(
       (response:any)=>{
         console.log(response.data);
         Swal.fire({
           title: "Record Deleted!",
           icon: "success"
         });
       },
       (error:any)=>{
         console.error(error);
         Swal.fire({
           title: "Error!",
           icon: "error"
         });
       }
       );
       setInterval(()=>{window.location.reload()},1000);
     }
   });
   
 }

//product

getproductdetails(accountno:any){
 
  this.apiservice.getProductSer(8888888888).subscribe(
    (res:any)=>{
      this.customeraccountdetails =res.data
 console.log("dataaaa*****************", res.data);
 // this.getproddetails = res.data ;
 
    },
    (error:any)=>{console.error(error);
    }
  )
 
 }

  onSubmit()
  {
     let comp = {
               // productName : this.customeraccountdetails.productName,
               assignDate: this.customeraccountdetails1.assignDate,
               expiryDate: this.customeraccountdetails1.expiryDate,
               dueDate: this.customeraccountdetails1.dueDate,
               // nextInvoiceDate : "2023-12-03" ,
               invoiceId: this.customeraccountdetails1.invoiceId,
               productId: this.customeraccountdetails1.productId,
               id : this.customeraccountdetails1.id,
               accountNo:this.customeraccountdetails1.accountNo
             };
  
     this.apiservice.updateProductSer(comp).subscribe(
     (response:any)=>{
       console.log(response.data);
       Swal.fire({
         title: "Record Updated!",
         icon: "success"
       });
     },
     (error:any)=>{
       console.error(error);
       Swal.fire({
         title: "Error!",
         icon: "error"
       });
     }
   );
   // setInterval(()=>{window.location.reload()},1000);
  }

  
getTaxPlanning(){
  // this.accountNo = this.route.snapshot.params['accountNo']; 
 this.apiservice.getIncomeTax(this.accountList.accountNo).subscribe(
 (res:any)=>{
  this.taxplanningdetails =res.data;
  // localStorage.setItem("followupId", res.data.followupId);
  // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
 console.log("TaxPlandetails********", res.data);
 // this.getproddetails = res.data ;
 
 },
 (error:any)=>{console.error(error);
 }
 )
 
 }

  addIncomeTax(){
 

    // console.log("AddIncomeTax",this.addTaxPlanning.value);
    // this.accountNo = this.route.snapshot.params['accountNo'];
    // let data= {
    //   this.accountNo = this.route.snapshot.params['accountNo']
   
    // }
    this.apiservice.addIncomeTax(this.addTaxPlanning.value).subscribe(
      (response:any)=>{
       //  console.log("AddVoucher",response.data);
        Swal.fire({
          title: "Record Saved!",
          icon: "success"
        });
      },
      (error:any)=>{
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
    );
    // setInterval(()=>{window.location.reload()},1000);
   }
   
   
  
updateTaxPlanning(){
//  console.log("UpdateIncomeTax",this.UpdateTaxPlanning.value);
 this.apiservice.updateTaxPlanning(this.UpdateTaxPlanning.value,).subscribe(
   (response:any)=>{
    //  console.log(response.data);
     Swal.fire({
       title: "Record Updated!",
       icon: "success"
     });
     setInterval(()=>{window.location.reload()},1000);
   },
   (error:any)=>{
     console.error(error);
     Swal.fire({
       title: "Error!",
       icon: "error"
     });
     // setInterval(()=>{window.location.reload()},1000);
   }
 );
}

  
 }



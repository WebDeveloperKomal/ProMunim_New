import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ViewCustomerdetailModel } from '../view-customer-details/view-customer-details.component.model';
import { TidService } from '../tid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewCustomerdetailModelNew } from '../view-customer-details/view-customer-details-new.component.model';
// import { ViewCustomerdetailNewModel } from './view-customer-details-new.component.model';
import { ProductModel } from './product.component.model';
import { accountModel } from './account.component.model';
import { complianceModel } from './compliances.component.model';
import { billingModel } from './billing.component.model';
import { ProfileModel } from './profile.component.model';
import { acWriting } from './accWriting.component.model';
import { kycModel } from './Kyc.component.model';
import { bankStatementListModel } from './bankStatementList.component.model';
import { AuthorisedSignatoryModel } from './AuthorisedSignatory.component.model';
import { transactionModel } from './transaction.component.model';
import { AofTwomodel } from '../accountopening-form/AofTwomodel';
import { CustomerDocs } from './customerDocs';
import { VoucherModel } from './Voucher';
import Swal from 'sweetalert2';
import { ViewCustomerdetailNewModel } from './ViewCustomerdetailNewModel';
import { AuthSignModel } from './authSignModel';
import { AuthKYCModel } from './AuthKYCModel';
import { AccDetailsModel } from './AccDetailsModel';
import { bankstatementModel } from './bankstatementModel';
import { bankdetailsModel } from './bankdetailsModel';
import { SalesInvoicesModel } from './SalesInvoicesModel';
import { InvestmentModel } from './InvestmentModel';
import { VehicleModel } from './VehicleModel';
import { AddLoanModel } from './AddLoanModel';
import { TaxTypeModel } from './TaxTypeModel';
import { TaxListModel } from './TaxListModel';
import { TaxPlanningModel } from './TaxplanningModel';
import { AccountWritingModel } from './AccountWritingModel';
import { occupationIncomeListModel } from './occupationIncomeListModel';
import { getKycByIdModel } from './getKycByIdModel';
import { authsignIdModel } from './authsignIdModel';
import { acWritingByIdModel } from './acWritingByIdModel';


@Component({
  selector: 'app-view-customer-details-new',
  templateUrl: './view-customer-details-new.component.html',
  styleUrls: ['./view-customer-details-new.component.css']
})
export class ViewCustomerDetailsNewComponent {

  Newdata2: any = {};

  step1 !: FormGroup;
  step2 !: FormGroup;
  updatesignatory !: FormGroup;
  step4 !: FormGroup;
  addAccountWritting !: FormGroup;
  employeeForm !: FormGroup;
  employeeForm1 !: FormGroup;
  addform !: FormGroup;
  addbankstatement !: FormGroup;
  accountwriting !: FormGroup;
  updateaccountwriting !: FormGroup;
  addTaxPlanning !: FormGroup;
  UpdateTaxPlanning !: FormGroup;

  investment !: FormGroup;
  vehicle !: FormGroup;
  loan!: FormGroup;
  tax!: FormGroup;
  savebankdetails!: FormGroup;
  kycupdate!: FormGroup;
  updateoccupationincome! : FormGroup;

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
  activeTab1: string = 'tabstate';
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
  showdata2: boolean = false;

  filepath = localStorage.getItem('photo') ; 

  AddAuthSign: AuthSignModel = new AuthSignModel();
  AddCustKYC: AuthKYCModel = new AuthKYCModel();
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
  bankstatementList: bankstatementModel = new bankstatementModel();
  bankdetailslist: bankdetailsModel = new bankdetailsModel();
  salesInvoiceList: SalesInvoicesModel = new SalesInvoicesModel();
  acWritingList: acWriting[] = [];
  authsignIdList : authsignIdModel = new authsignIdModel;
  acWritingByIdList : acWritingByIdModel  = new acWritingByIdModel;

  kycList: kycModel[] = [];
  bankStatementList: bankStatementListModel[] = [];
  AccDetailsList: AccDetailsModel[] = [];
  getDocList: CustomerDocs = new CustomerDocs();
  SignatoryList: AuthorisedSignatoryModel[] = [];
  transactionList: transactionModel[] = [];
  getInvoiceId: transactionModel = new transactionModel();
  voucherdetails: VoucherModel[] = [];
  AOF2: AofTwomodel = new AofTwomodel();
  InvestmentList: InvestmentModel = new InvestmentModel();
  VehicleList: VehicleModel = new VehicleModel();
  AddLoanList: AddLoanModel = new AddLoanModel();
  TaxTypeList: TaxTypeModel[] = [];
  TaxList: TaxListModel = new TaxListModel();
  taxplanningdetails: TaxPlanningModel[] = [];
  TaxPlanningList: TaxPlanningModel = new TaxPlanningModel();
  AccountWritingList: AccountWritingModel = new AccountWritingModel();

  occupationIncomeList: occupationIncomeListModel = new occupationIncomeListModel();

  getKycById : getKycByIdModel =new getKycByIdModel();

   
  id!: number;

  accountNo: any;
  individual: boolean = true;
  nonindividual: boolean = false;
  selfemployee: boolean = false;
  tidData = {
    tid: 0
  }

  accdata = {
    accountNo: 0
  }

  docCategoryList = [{
    name: '',
    id: 0,
    cid: 0
  }]

  document: any;

  docType = [{
    name: '',
    id: 0,
    catId: 0
  }]

  AOF4 = {
    tid: 0,
    customerDocumentCategoryId: 1,
    description: '',
    customerDocumentType: ''
  }

  URL: any;

  photo!: File;
  onPhotoSelected(event: any) {
    this.photo = event.target.files[0];
  }

  sign!: File;
  onSignSelected(event: any) {
    this.sign = event.target.files[0];
  }


  docImage!: File;
  onDocImageSelected(event: any) {
    this.docImage = event.target.file[0];
  }


  //Cust KYC
  bankstatement!: File;
  onBankStatement(event: any) {
    this.bankstatement = event.target.files[0];
  }

  //bankdetails
  bankdetails!: File;
  onBankDetails(event: any) {
    this.bankdetails = event.target.files[0];
  }

  //salesinvoice
  salesinvoice!: File;
  onSalesInovice(event: any) {
    this.salesinvoice = event.target.files[0];
  }

  //purchaseinvoice
  purchaseinvoice!: File;
  onPurchaseInvoice(event: any) {
    this.purchaseinvoice = event.target.files[0];
  }

  //expense
  expense!: File;
  onExpense(event: any) {
    this.expense = event.target.files[0];
  }

  //loandetails
  loandetails!: File;
  onLoandetails(event: any) {
    this.loandetails = event.target.files[0];
  }

  //chequbookdetails
  chequbookdetails!: File;
  onChequBookDetails(event: any) {
    this.chequbookdetails = event.target.files[0];
  }

  //payslipdetails
  payslipdetails!: File;
  onPaySlipDetails(event: any) {
    this.payslipdetails = event.target.files[0];
  }

  //investmentdetails
  investmentdetails!: File;
  onInvestmentDetails(event: any) {
    this.investmentdetails = event.target.files[0];
  }

  //taxdetails
  taxdetails!: File;
  onTaxDetails(event: any) {
    this.taxdetails = event.target.files[0];
  }

  //vehicledetails
  vehicledetails!: File;
  onVehicalImageSelected(event: any) {
    this.vehicledetails = event.target.files[0];
  }

  accDocumentImage!: File;
  onAccWriting(event: any) {
    this.accDocumentImage = event.target.files[0];
  }

  taxName : any;
  taxName1={
    taxName : "INCOME TAX-NON AUDIT",
    accountNo :0
  }
 

 data1=[{
  taxName :  "",
  fromDate : "",
  toDate : "",
  paidDate : "",
  paidAmount: 0,
  description: "",
  taxPlanningId : 0,
  accountNo : 0,
  insertBy : 0
 }];
 data2=[{

 }]



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
  customerDocumentId : any;
  idforaccwritingupdate : any;

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
      tid: [0, Validators.required],
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
      serTaxPlan: ['', Validators.required],
      authIdOne: [0, Validators.required]
    });

    
    this.updatesignatory = this.formBuilder.group({
      id : localStorage.getItem('authsignId'),
      tid: [0, Validators.required],
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
      serTaxPlan: ['', Validators.required],
      authIdOne: [0, Validators.required]
    });

    this.addvoucher = this.formBuilder.group({
      accountNo: localStorage.getItem('accountNo'),
      // accountNo : this.voucherdetails.accountNo ,
      // accountNo: ['', Validators.required],
      voucherDate: ['', Validators.required],
      paymentDate: ['', Validators.required],
      amount: ['', Validators.required],
      paymentMode: ['', Validators.required],
      description: ['', Validators.required],
      // receiptImage:['',Validators.required]
    });


    this.step4 = this.formBuilder.group({
      tid: [0, Validators.required],
      customerDocumentCategoryId: ['', Validators.required],
      description: ['', Validators.required],
      customerDocumentType: ['', Validators.required],
      bankstatement: ['', Validators.required]
    });

    this.addbankstatement = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      accountNo: ['', Validators.required],
      bankDetailsId: [0, Validators.required],
      description: ['', Validators.required]
    })

    //saveBankDetails
    this.savebankdetails = this.formBuilder.group({
      bankName: ['', Validators.required],
      bankAccountNo: ['', Validators.required],
      accountNo: ['', Validators.required],
      bankAccountTitle: ['', Validators.required],
      bankAccountType: ['', Validators.required]
    })

    //investment
    this.investment = this.formBuilder.group({
      dateOfMaturity: ['', Validators.required],
      nameOfInvestor: ['', Validators.required],
      investmentCompany: ['', Validators.required],
      premiumAmount: ['', Validators.required],
      accountNo: ['', Validators.required],
      policyNo: ['', Validators.required],
      mode: ['', Validators.required]
    })

    //vehicle
    this.vehicle = this.formBuilder.group({
      vehicleType: ['', Validators.required],
      insurance: ['', Validators.required],
      currentValue: ['', Validators.required],
      purpose: ['', Validators.required],
      accountNo: ['', Validators.required],
      goal: ['', Validators.required],
      description: ['', Validators.required],
      vehicledetails: ['', Validators.required]
    })

    //loan.
    this.loan = this.formBuilder.group({
      loanType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      bank: ['', Validators.required],
      accountNo: ['', Validators.required],
      outstandingAmount: ['', Validators.required],
      emi: ['', Validators.required],
      currentInterestRate: ['', Validators.required]
    })

    //tax
    this.tax = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      taxType: ['', Validators.required],
      amount: ['', Validators.required],
      accountNo: ['', Validators.required],
      description: ['', Validators.required],
      // emi: ['', Validators.required],
      // currentInterestRate :['', Validators.required]
    })


    this.addTaxPlanning = this.formBuilder.group({
      // accountNo : localStorage.getItem("acccountNo") ,
      // accountNo : this.route.snapshot.params['accountNo'],
      accountNo: ['', Validators.required],
      taxName: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      paidDate: ['', Validators.required],
      paidAmount: ['', Validators.required],
      description: ['', Validators.required],
    })


    this.UpdateTaxPlanning = this.formBuilder.group({
      // accountNo : localStorage.getItem("acccountNo") ,
      accountNo: this.route.snapshot.params['accountNo'],
      taxName: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      paidDate: ['', Validators.required],
      taxPlanningId: ['', Validators.required],
      description: ['', Validators.required],
    })



    // accountWriting
    this.accountwriting = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      accountNo: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.updateaccountwriting=  this.formBuilder.group({
      id:  localStorage.getItem('idforaccwritingupdate1'),
      document : 'Document',
      accountNo :localStorage.getItem('accountNo'),
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      // accountNo: ['', Validators.required],income
      description: ['', Validators.required]
    })
    
    //kycupdate
    this.kycupdate = this.formBuilder.group({
      customerDocumentType: ['', Validators.required],
      customerDocumentCategoryId: ['', Validators.required],
      customerdocumentId :['', Validators.required],
      description:  ['', Validators.required],
      tid:  ['', Validators.required],
    })

    //updateoccupationincome
    this.updateoccupationincome =this.formBuilder.group({
      id: localStorage.getItem('idforoccupatin&income'),
      businessNature: ['', Validators.required],
      type: ['', Validators.required],
      name: ['', Validators.required],
      industrySector: ['', Validators.required],
      compliances: this.formBuilder.array([]) 
      // compliances: ['', Validators.required]
      // compliances : this.occupationIncomeList.compliances
    })
  }


  onchange(event: any) {
    // this.document = this.step4.get('customerDocumentCategoryId');
    // console.log(id);
    // console.log('DOCUMENT ID :::::::: ', this.id);
    const categoryId = event.target.value;
    if (categoryId !== '0') {
      this.apiservice.docType(categoryId).subscribe(

        (data: any) => {
          this.docType = data.docType;
          console.log('Responsiiiiiiiiii', data.docType);
        },
        (error: any) => { console.error(error); }
      )
    }
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
  changeTab1(tabId: string) {
    this.activeTab1 = tabId;
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


  deleteBankStatements(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteDoc2(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload(); deleteKYCDocument
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deleteSalesDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteSalesDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deletePurchaseDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deletePurchaseDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deleteExpenseDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteExpenseDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteLoanDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteLoanDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteCheckBooksDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteCheckBooksDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deletePayInSlipDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deletePayInSlipDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deleteInvestmentDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteInvestmentDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deleteTaxesDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteTaxesDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteVehicleDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteVehicleDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deleteVoucher(voucherId: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteVoucher(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteKYCDocument(voucherId: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteKYCDocument(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload(); 
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteAccWriting(voucherId: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteAccWriting(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload(); 
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
  shownewrole2() {
    this.showdata = false;
    this.showdata2 = true;
  }
  shownewrole3() {
    this.showdata = true;
    this.showdata2 = false;
  }



  ngOnInit() {

    if (!this.occupationIncomeList) {
      this.occupationIncomeList = {
     
        id: 0,
        type: '',
        name: '',
        businessNature: '',
        industrySector: '',
        compliances: []
      };
    }
    this.id = this.route.snapshot.params['id'];

    // this.getVoucher(this.accountNo)

    console.log(this.id);
    this.apiservice.getAccount(this.id).subscribe(
      (response: any) => {
        this.accountList = response.data;
     

        localStorage.setItem('accountNo', this.accountList.accountNo);

        this.apiservice.acWriting(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.acWritingList = response.data;
            localStorage.setItem("accWritingId",response.data[0].id)
            console.log("accWriting,,,,,,", response.data);
          },
          (error: any) => { console.error(error); }
        )

      

        // authsignId
        this.authsignIdList.authIdOne = localStorage.getItem("authsignId");
        // console.log("#######################",this.authsignIdList.authIdOne);
        this.apiservice.getAuthorisedSignatoryById(this.authsignIdList.authIdOne).subscribe(
          (response: any) => {
            this.authsignIdList = response.data;
            console.log("auth sign List,,,,,,,,,,,", response.data);
            this.updatesignatory.patchValue({
              name:response.data.name ,
              shortName: response.data.shortName,
              date : response.data.date,
              gender:  response.data.gender,
              nationality:  response.data.nationality,
              religion:response.data.religion ,
              motherName: response.data.motherName,
              designation : response.data.designation,
              mobile:  response.data.mobile,
              telephone:  response.data.telephone,
              email:response.data.email ,
              serFinanPlan: response.data.serFinanPlan,
              serAccWrite : response.data.serAccWrite,
              serInvestPlan:  response.data.serInvestPlan,
              serTaxPlan:  response.data.serTaxPlan,
              authIdOne:  response.data.authIdOne
            })
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

        //getAccDetails
        this.apiservice.getAccDetails(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.AccDetailsList = response.data;
            console.log("AccDetailsList,,,,,,, ", response);
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
        console.log("File $$$$$$$$$$$$", response.data)
        //  console.log("File id ###############", response.data[0].id)
        localStorage.setItem("authsignId",response.data[0].id)

        // console.log("File sign $$$$$$$$$$$$", response.data[0].sign)
        // localStorage.setItem("sign",response.data[0].sign)
        console.log("File photo $$$$$$$$$$$$", response.data[0].photo)
        localStorage.setItem("photo",response.data[0].photo)
        const photoURL = `${`http://localhost:8181/auth`}/${response.data[0].photo}`;
        console.log("File photo URL", photoURL)
        // Store the photo URL in localStorage
        localStorage.setItem("photo", photoURL);
      },
      (error: any) => { console.error(error); }
    )


    console.log(this.id);
    this.apiservice.getCompliances(this.id).subscribe(
      (response: any) => {
        this.compliancesList = response.data;
        console.log("compliance*********", response.data);
        console.log("complianceid*********", response.data.id);
        localStorage.setItem('idforoccupatin&income', response.data.id)
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
        console.log("kyc,,,,,,,,,,,,,,,,IDDDDDD", response.document.customerDocumentCategoryId);
        localStorage.setItem('kycid', response.document)
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


    this.apiservice.getTaxType().subscribe(
      (response: any) => {
        this.TaxTypeList = response.data;
      },
      (error: any) => {
        console.error(error);
      }
    )


    this.apiservice.docCategory().subscribe(  //AOF4
      (data: any) => {
        this.docCategoryList = data.docCategory;
        console.log('Response successful!', this.docCategoryList);
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );

    this.getTaxPlanning;

  }


  AddVoucher() {
    // console.log("AddcustInteraction,,,,,,,", this.accountList.accountNo);
    console.log("AddcustInteraction***********", this.addvoucher.value);
    console.log("Photo****************", this.photo)
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

// picfile(){
// // let filepath=localStorage.getItem("photo")
// // window.open("http://localhost:4200/set/getfile");
// window.open("http://localhost:4200/set/getfile/this.signitury[0].photo");
//   console.log("get File,,,%%%%%%%%%%%%%%,,,, ", this.filepath);
//   this.apiservice.getFile(this.filepath).subscribe(
//     (response: any) => {
//       this.signitury = response;
//       // window.open("http://localhost:4200/set/getfile",this.signitury[0].photo);
//       console.log("get File,,,,,,, ", response);
//     },
//     (error: any) => { console.error(error); }
//   )
// }

picfile() {
  if (this.signitury && this.signitury[0] && this.signitury[0].photo) {
    let filePath = this.signitury[0].photo;
    console.log('filePath :::::::: ', filePath);
    let url = `http://localhost:4200/set/getfile/${filePath}`;
    // console.log('SONAAAAAAAAAAAA',url );
    const photoURL = `${`http://localhost:8181/auth/getFile`}/${filePath}`;
    // window.open(`http://localhost:8181/auth/getFile/${filePath}`);
     // Create an anchor element
    //  const link = document.createElement('a');
    //  link.href = url;
    //  link.target = '_blank';
 
    //  // Trigger a click on the anchor element
    //  link.click();

    console.log("File URL: ", url);

    this.apiservice.getFile(filePath).subscribe(
      (response: any) => {
        // this.signitury = response;
        window.open(response);
        console.log("File Response: ", response);
      },
      (error: any) => { console.error("File Error Response: ",error); }
    );
  } else {
    console.error("Invalid signitury data or photo path.");
  }
}
  updateProfile() {
    console.log("resppppp", this.addform.value);
    this.apiservice.updateProfile(this.addform.value).subscribe(
      (response: any) => {
        // console.log("resppppp,,,,,,,,,,,,,,,,,,", this.addform.value);
      },
      (error: any) => { console.error(error); }
    );
  }


  onsubmit2() {
    this.AddAuthSign = this.step2.value;
    this.AddAuthSign.tid = this.id;
    console.log("Get Signatory,,,,, ::::::: ", this.AddAuthSign, this.photo, this.sign);
    this.apiservice.aof2Form(this.AddAuthSign, this.photo, this.sign).subscribe(
      (response: any) => {
        console.log('Get Signatory,,,,,,', response.data);
      },
      (error: any) => {
        console.error("not workingggg", error);
      }
    )
  }
  onsubmit3() {
    this.authsignIdList = this.updatesignatory.value;
    this.authsignIdList.tid = this.id;
    this.authsignIdList.authIdOne = localStorage.getItem('authsignId'), 
    console.log("Get Signatory,,,,, ::::::: ", this.authsignIdList, this.photo, this.sign);
    this.apiservice.aof2Form(this.authsignIdList, this.photo, this.sign).subscribe(
      (response: any) => {
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        console.log('update authorisation,,,,,,', response.data);
      },
      (error: any) => {
        console.error("not workingggg", error);
      }
    )
  }

  onsubmit4() {
    this.AddCustKYC = this.step4.value;
    this.AddCustKYC.tid = this.id;
    console.log("AOF4 ::::::: ", this.step4.value, this.docImage);
    this.apiservice.aof4Form(this.AddCustKYC, this.docImage).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

    //updateCustKyc
    updateCustKyc() {

      this.AddCustKYC = this.kycupdate.value;
      this.AddCustKYC.tid = this.id;
      // this.AddCustKYC.customerDocumentId =this.customerDocumentId ;
      console.log("update Cust Kyc ::::::: ", this.AddCustKYC, this.docImage);
      this.apiservice.saveCustKyc(this.AddCustKYC, this.docImage).subscribe(
        (response: any) => {
          console.log('SAVE', response.status);
        },
        (error: any) => {
          console.error("not working", error);
        }
      )
    }

    editKyc(customerDocumentId : any){
      this.customerDocumentId =customerDocumentId ;
     
      console.log(" customer Document Category Id $$$$$$$$$$$$$$$$$$$$$$$$$$ ", this.customerDocumentId);
      this.apiservice.getByIdKYCDoc(this.customerDocumentId).subscribe(
        (response: any) => {
          this.getKycById = response.data[0];
          console.log('sona**********************',response.data[0].customerDocumentCategoryId);
          console.log('sona**********************&&&&&&&&&',response.data[0].customerDocumentId);
          this.kycupdate.patchValue({
             customerDocumentType:response.data[0].customerDocumentType ,
            customerDocumentCategoryId: response.data[0].customerDocumentCategoryId,
            customerdocumentId : response.data[0].customerDocumentId,
            description:  response.data[0].description,
            tid:  response.data[0].tid,
           })
          console.log("customer Document Category Id $$$$$ ", this.getKycById.customerDocumentCategoryId);
        },
        (error: any) => { console.error(error); }
      )
    }
 
  updateOccupationIncome(){
    this.occupationIncomeList = this.updateoccupationincome.value;
    console.log("Occupation Income ******************** ::::::: ", this.occupationIncomeList);
    this.apiservice.updateOccupationIncome(this.updateoccupationincome.value).subscribe(
      (response: any) => {
        console.log('SAVE',response.status);
      },
      (error : any)=>{
        console.error("Not Working" , error);
      }
    )
  }

  // getid(id: any){
  //         this.idforaccwritingupdate  = this.id ;
  //         console.log('dataid', this.id);
  //         localStorage.setItem('idforaccwritingupdate', this.idforaccwritingupdate)
  //         // this.idforaccwritingupdate = localStorage.setItem('idforaccwritingupdate', );
  // }
  getAccWritingById(id: any){
  this.idforaccwritingupdate  = id ;
  localStorage.setItem('idforaccwritingupdate1', this.idforaccwritingupdate );
  this.acWritingByIdList.id= localStorage.getItem("accWritingId");
  // console.log("#######################",this.acWritingByIdList.id);
  console.log("#######################this.idforaccwritingupdate",this.idforaccwritingupdate);
  this.apiservice.getAccWritingById(this.idforaccwritingupdate).subscribe(
    (response: any) => {
      this.acWritingByIdList = response.data;
      // console.log("accWriting", response.data);
    },
    (error: any) => { console.error(error); }
  )
  }
  
  updateaccwritting(){
    this.occupationIncomeList = this.updateaccountwriting.value;
    console.log("Update AccWriting ******************** ::::::: ", this.occupationIncomeList , this.accDocumentImage);
    this.apiservice.updateAccWritting(this.updateaccountwriting.value,this.accDocumentImage).subscribe(
      (response: any) => {
        console.log('SAVE',response.status);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        // console.log('update authorisation,,,,,,', response.data);
      },  (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      } 
    )
  }
  
  // updateCompliances(value: string, event: any) {
  //   const checkbox = event.target as HTMLInputElement;

  //   // Check if the checkbox is checked or unchecked
  //   if (checkbox.checked) {
  //     this.occupationIncomeList.compliances.push(value);
  //   } else {
  //     const indexToRemove = this.occupationIncomeList.compliances.indexOf(value);
  //     if (indexToRemove !== -1) {
  //       this.occupationIncomeList.compliances.splice(indexToRemove, 1);
  //     }
  //   }
  // }

  updateCompliances(compliance: string, event: any) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      // Checkbox is checked, add the compliance to the array
      this.occupationIncomeList.compliances.push(compliance);
    } else {
      // Checkbox is unchecked, remove the compliance from the array
      const index = this.occupationIncomeList.compliances.indexOf(compliance);
      if (index !== -1) {
        this.occupationIncomeList.compliances.splice(index, 1);
      }
    }
    console.log(this.occupationIncomeList.compliances); // Optional: log the array for debugging
  }
  


  //addbankstatement
  AddBankStatement() {
    this.bankstatementList = this.addbankstatement.value;
    this.bankstatementList.accountNo = this.accountList.accountNo;
    console.log("AddBankStatement ::::::: ", this.addbankstatement.value, this.bankstatement);
    this.apiservice.saveBankStatement(this.bankstatementList, this.bankstatement).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //saveBankDetails
  saveBankDetails() {
    this.bankdetailslist = this.savebankdetails.value;
    this.bankdetailslist.accountNo = this.accountList.accountNo;
    console.log("saveBankDetails ::::::: ", this.savebankdetails.value, this.bankdetails);
    this.apiservice.saveBankDetails(this.bankdetailslist, this.bankdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  addSalesInvoice() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("sales invoiceList ::::::: ", this.salesInvoiceList, this.salesinvoice);
    this.apiservice.saveSalesInvoice(this.salesInvoiceList, this.salesinvoice).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //PurchaseInvoice  
  addPurchaseInvoice() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("Purchase Invoice ::::::: ", this.salesInvoiceList, this.purchaseinvoice);
    this.apiservice.savePurchaseInvoice(this.salesInvoiceList, this.purchaseinvoice).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //ExpensesDetails 
  addExpensesDetails() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("Purchase Invoice ::::::: ", this.salesInvoiceList, this.expense);
    this.apiservice.saveExpensesDetails(this.salesInvoiceList, this.expense).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  // addLoan
  addLoan() {
    this.AddLoanList = this.loan.value;
    this.AddLoanList.accountNo = this.accountList.accountNo;
    console.log("Loan List::::::: ", this.AddLoanList, this.loandetails);
    this.apiservice.saveLoan(this.AddLoanList, this.loandetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //saveCheckBook
  addCheckBook() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("Check Book ::::::: ", this.salesInvoiceList, this.chequbookdetails);
    this.apiservice.saveCheckBook(this.salesInvoiceList, this.chequbookdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }


  //savePaySlip
  addPaySlip() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("Pay Slip ::::::: ", this.salesInvoiceList, this.payslipdetails);
    this.apiservice.savePaySlip(this.salesInvoiceList, this.payslipdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //saveInvestment
  addInvestment() {
    this.InvestmentList = this.investment.value;
    this.InvestmentList.accountNo = this.accountList.accountNo;
    console.log("Investment::::::: ", this.InvestmentList, this.investmentdetails);
    this.apiservice.saveInvestment(this.InvestmentList, this.investmentdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  // addLoan
  addTax() {
    this.TaxList = this.tax.value;
    this.TaxList.accountNo = this.accountList.accountNo;
    console.log("Tax List::::::: ", this.TaxList, this.taxdetails);
    this.apiservice.saveTaxes(this.TaxList, this.taxdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }


  //saveVehicle
  addVehicle() {
    this.VehicleList = this.vehicle.value;
    this.VehicleList.accountNo = this.accountList.accountNo;
    console.log("Vehicle List::::::: ", this.vehicle, this.vehicledetails);
    this.apiservice.saveVehicle(this.VehicleList, this.vehicledetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }


  //AccountWriting
  addAccountWriting() {
    this.AccountWritingList = this.accountwriting.value;
    this.AccountWritingList.accountNo = this.accountList.accountNo;
    console.log("Account Writing ::::::: ", this.AccountWritingList, this.accDocumentImage);
    this.apiservice.saveAccWriting(this.AccountWritingList, this.accDocumentImage).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }



  show1() {
    this.individual = true;
    this.nonindividual = false;
    this.selfemployee = false;
  }
  show2() {
    this.individual = false;
    this.nonindividual = true;
    this.selfemployee = false;
  }
  show3() {
    this.individual = false;
    this.nonindividual = false;
    this.selfemployee = true;
  }


  //ooccupation n income

  getTaxPlanning() {
    // this.accountNo = this.route.snapshot.params['accountNo'];
    // this.taxName = this.taxName1.taxName

    this.taxName1.accountNo= this.accountList.accountNo;
    console.log("TAxxxxxxxxx", this.data1);
    this.apiservice.getIncomeTax(this.taxName1 ).subscribe(
      (data: any) => {
        this.data1=data.data1;
        this.data2=data.data2;
        console.log('Response successful!');
        console.log(this.data1);
        console.log(this.data2);

      },
      (error: any) => {
        console.error(error);
      }
    )

  }

  addIncomeTax() {
    // console.log("AddIncomeTax",this.addTaxPlanning.value);
    // this.accountNo = this.route.snapshot.params['accountNo'];
    // let data= {
    //   this.accountNo = this.route.snapshot.params['accountNo']

    // }

    this.TaxPlanningList = this.addTaxPlanning.value;
    this.TaxPlanningList.accountNo = this.accountList.accountNo;
    console.log("TAXADD", this.TaxPlanningList);
    this.apiservice.addIncomeTax(this.TaxPlanningList).subscribe(
      (response: any) => {
        // console.log("TAXADD",response.data);
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
// getid(customerDocumentId : any){
//  this.customerDocumentCategoryId = customerDocumentId
//  console.log('sona',this.customerDocumentCategoryId );
 
// }

  updateTaxPlanning() {
    //  console.log("UpdateIncomeTax",this.UpdateTaxPlanning.value);
    this.apiservice.updateTaxPlanning(this.UpdateTaxPlanning.value,).subscribe(
      (response: any) => {
        //  console.log(response.data);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        setInterval(() => { window.location.reload() }, 1000);
      },
      (error: any) => {
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




// this.id = this.route.snapshot.params['id'];
// this.apiService.complianceById(this.id).subscribe(
//   (response: any) => {
//     this.compliance = response.data;
//     console.log(this.compliance);
//   },
//   (error: any) => { console.error(error); }
// )


// onSubmit() {
//   let comp = {
//     complianceId: this.id,
//     complianceName: this.compliance.complianceName,
//     taxLink: this.compliance.taxLink,
//     complianceDueDate: this.compliance.complianceDueDate
//   };
//   console.log("DATA READY TO SEND ::: ", comp);

//   this.apiService.updateCompliance(comp).subscribe(
//     (response: any) => { console.log(response.data); },
//     (error: any) => { console.error(error); }
//   );
// }
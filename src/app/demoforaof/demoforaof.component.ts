import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aof1Model } from '../accountopening-form/AofOnemodel';
import { AofTwomodel } from '../accountopening-form/AofTwomodel';
import { AllTIDModel } from '../all-tid/all-tid.component.model';
import { TidService } from '../tid.service';
import { AofThreeModel } from '../accountopening-form/AofThreemodel';
import { AofFourModel } from '../accountopening-form/AofFourmodel';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-demoforaof',
  templateUrl: './demoforaof.component.html',
  styleUrls: ['./demoforaof.component.css']
})
export class DemoforaofComponent {
  step1 !: FormGroup;
  step2 !: FormGroup;
  step3 !: FormGroup;
  step4 !: FormGroup;
  step5 !: FormGroup;
  step6 !: FormGroup;
  step61 !: FormGroup;
  step62 !: FormGroup;

  page = 1;
  pageSize = 10;
  activeTab: string = 'tab1';
  individual: boolean = true;
  nonindividual: boolean = false;
  selfemployee: boolean = false;

  tid: AllTIDModel = new AllTIDModel();

  Tid!: any;
  BranchId!: any;
  aofNo!: any;
  tid1: any;
  catId: any;

  tidToSearch: any;

  tempCustData = {
    customerFullName: "",
    branchId: 0,
    address: "",
    companyName: "",
    customerId: 0,
    aof: 0,
    branchName: "",
    tid: 0,
    email: "",
    status: "",
    contactNo: "",
    city: "",
    panNo: "",
    mobile: "",
    telephone: "",
    applicantName: "",
    uni: "",
    orgIndId: 0,
    incorpRegDob: "",
    mTelephone: "",
    pin: "",
    mAddress: "",
    mCity: "",
    mPin: "",
    mmobile: "",
  };


  //AOF3
  AOF1: Aof1Model = new Aof1Model();
  AOF2: AofTwomodel = new AofTwomodel();
  AOF3: AofThreeModel = new AofThreeModel();

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

  GetList = [{
    name : "",
    type : ""
  }]

  prod: any = { proSelect: '' };
  productList: any[] = [{
    minValue: 0,
    productId: 0,
    maxValue: 0,
    productName: ''
  }]


  URL: any;
  photo!: File;
  sign!: File;

  docImage!: File;

  onPhotoSelected(event: any) {
    this.photo = event.target.files[0];
  }

  onSignSelected(event: any) {
    this.sign = event.target.files[0];
  }

  onDocImageSelected(event: any) {
    this.docImage = event.target.file[0];
  }

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
    //AOF:-2
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

    //AOF:-3
    this.step3 = this.formBuilder.group({
      tid: ['', Validators.required],
      id: ['', Validators.required],
      type: ['', Validators.required],
      name: ['', Validators.required],
      businessNature: ['', Validators.required],
      industrysector: ['', Validators.required],
      compliances: ['', Validators.required]
    });

    this.step4 = this.formBuilder.group({
      tid: ['', Validators.required],
      customerDocumentCategoryId: ['', Validators.required],
      description: ['', Validators.required],
      customerDocumentType: ['', Validators.required],
      docImage: ['', Validators.required]
    });


    this.step5 = this.formBuilder.group({
      tid: ['', Validators.required],
      financialPlanning: ['', Validators.required],
      accountWriting: ['', Validators.required],
      investmentPlanning: ['', Validators.required],
      taxPlanning: ['', Validators.required],
      accOpenOperationMode: ['', Validators.required],
      accOpenStatementFrequently: ['', Validators.required],
      account_Sourcing_Date: ['', Validators.required],
      sourceCode: ['', Validators.required],
      leadGeneratorCode: ['', Validators.required],
      leadConvertorCode: ['', Validators.required],
      rMCode: ['', Validators.required],
      approvedBy: ['', Validators.required],
      employeeCode: ['', Validators.required]
      // tid :  ['', Validators.required]
    });


    this.step6 = this.formBuilder.group({
      tid: ['', Validators.required],
      billingCycle: ['', Validators.required],
      assignDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      productSelect: ['', Validators.required]
    });

    this.step61 = this.formBuilder.group({
      invoiceId: ['', Validators.required],
      prdSrvId: ['', Validators.required],
      prdSrvDesc: ['', Validators.required],
      discription: ['', Validators.required],
      itemFees: ['', Validators.required],
      discountRate: ['', Validators.required],
      discountAmount: ['', Validators.required],
      taxRate: ['', Validators.required],
      taxAmount: ['', Validators.required],
      itemTotal: ['', Validators.required],
      assesmentYear: ['', Validators.required]
    });

    this.step62 = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      tid: ['', Validators.required],
      invoiceId: ['', Validators.required],
      transactionDate: ['', Validators.required],
      amount: ['', Validators.required],
      paymentMode: ['', Validators.required],
      paymentType: ['', Validators.required],
      discription: ['', Validators.required],
      paidAmount: ['', Validators.required]
    });

  }


  ngOnInit() {
    if (!this.AOF3) {
      this.AOF3 = {
        tid: 0,
        id: 0,
        type: '',
        name: '',
        businessNature: '',
        industrysector: '',
        compliances: []
      };
    }

    // Subscribe to changes in the tid from the shared service
    this.sharedService.currentTid.subscribe((tid) => {
      this.tid1 = tid;
      // Do something with the tid, e.g., update form controls
    });


    this.apiservice.docCategory().subscribe(  //AOF4
      (data: any) => {
        this.docCategoryList = data.docCategory;
        console.log('Response successful!', this.docCategoryList);
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );

// this.apiservice.allDoc(this.tid).subscribe(
//   (data :any) =>{
//     this.GetList 
//   }
// )

    this.apiservice.allDoc(this.tid).subscribe(  //AOF4
      (data: any) => {
        this.GetList = data.name;
        console.log('all Doc List successful!', this.GetList);
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );

    this.apiservice.productlist().subscribe(  //AOF6
      (data: any) => {
        this.productList = data.data;
        // console.log('Product List !', data.data);
        // console.log('Product component !', data.data[0].productName);
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );

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

  tidSearch() {
    // console.log("tid :::::: " + this.tidToSearch);
    this.apiservice.TidDetails(this.tidToSearch).subscribe(
      (res: any) => {
        this.tempCustData = res.data;
        console.log(this.tempCustData);
        this.AOF1.tid = this.tempCustData.tid;
        // this.AOF2.tid = this.tempCustData.tid;
        this.AOF1.branchid = this.tempCustData.branchId;
        this.AOF1.aofNumber = this.tempCustData.aof;
        this.AOF1.tempCustApplicantName = this.tempCustData.customerFullName;
        this.AOF1.tempCustdorordob = this.tempCustData.incorpRegDob;
        this.AOF1.tempCustPanNumber = this.tempCustData.panNo;
        this.AOF1.tempCustUIN = this.tempCustData.uni;
        this.AOF1.tempCustRegAddress = this.tempCustData.address;
        this.AOF1.tempCustCity = this.tempCustData.city;
        this.AOF1.tempCustRegPIN = this.tempCustData.pin;
        this.AOF1.tempCustRegMobile = this.tempCustData.mobile;
        this.AOF1.tempCustRegTelephone = this.tempCustData.telephone;
        this.AOF1.tempCustRegMailID = this.tempCustData.email;
        this.AOF1.tempCustMailingAddress = this.tempCustData.mAddress;
        this.AOF1.tempCustMailingAddressCity = this.tempCustData.mCity;
        this.AOF1.tempCustMailingAddressPin = this.tempCustData.mPin;
        this.AOF1.tempCustMailingAddressMobileNo = this.tempCustData.mmobile;
        this.AOF1.tempCustMailingAddressTelephone = this.tempCustData.mTelephone;
      },
      (err: any) => { console.error(err); }
    )
  }

  onSubmit() {
    // console.log("AOF1 ::::::: ", this.AOF1);
    this.apiservice.aof1Form(this.AOF1).subscribe(
      (response: any) => {
        // console.log(response.data);
        // this.router.navigate(['tab2']);
      },
      (error: any) => {
        console.error(error);
      }
    )
    // this.changeTab(TabId)
  }

  onsubmit2() {
    // console.log("AOF2 ::::::: ", this.step2.value, this.photo, this.sign);
    
    this.apiservice.aof2Form(this.step2.value , this.photo , this.sign ).subscribe(
      (response: any) => {
        // console.log('valllllllllll', response.data);
      },
      (error: any) => {
        console.error("not workingggg", error);
      }
    )
  }

  onsubmit3() {
    // console.log("AOF3 ::::::: ", this.AOF3);
    this.apiservice.aof3Form(this.AOF3).subscribe(
      (response: any) => {
        console.log('SAVE', response.data);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  onsubmit4() {
    // console.log("AOF4 ::::::: ", this.step4.value, this.docImage);
    this.apiservice.aof4Form(this.step4.value, this.docImage).subscribe(
      (response: any) => {
        console.log('SAVE', response.data);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  onsubmit5() {
    // console.log("AOF5 ::::::: ", this.step5.value);
    this.apiservice.aof5Form(this.step5.value).subscribe(
      (response: any) => {
        // console.log('SAVE', response.data);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  onsubmit6() {
    // console.log("AOF5 ::::::: ", this.step5.value);
    this.apiservice.aof6Form(this.step6.value).subscribe(
      (response: any) => {
        console.log('SAVE', this.step6);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  onsubmit61() {
    // console.log("AOF5 ::::::: ", this.step5.value);
    this.apiservice.aof61Form(this.step61.value).subscribe(
      (response: any) => {
        console.log('SAVE', this.step61);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  onsubmit62() {
    // console.log("AOF5 ::::::: ", this.step5.value);
    this.apiservice.aof62Form(this.step62.value).subscribe(
      (response: any) => {
        console.log('SAVE', this.step62);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }


  changeTab(tabId: string) {
    this.activeTab = tabId;
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


  updateCompliances(value: string, event: any) {
    const checkbox = event.target as HTMLInputElement;

    // Check if the checkbox is checked or unchecked
    if (checkbox.checked) {
      this.AOF3.compliances.push(value);
    } else {
      const indexToRemove = this.AOF3.compliances.indexOf(value);
      if (indexToRemove !== -1) {
        this.AOF3.compliances.splice(indexToRemove, 1);
      }
    }
  }

}

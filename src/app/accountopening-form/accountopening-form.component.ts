import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllTIDModel } from '../all-tid/all-tid.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aof1Model } from './AofOnemodel';
import { AofTwomodel } from './AofTwomodel';


@Component({
  selector: 'app-accountopening-form',
  templateUrl: './accountopening-form.component.html',
  styleUrls: ['./accountopening-form.component.css']
})
export class AccountopeningFormComponent {
  step1 !: FormGroup ;
  activeTab: string = 'tab1';
  individual : boolean =true;
  nonindividual : boolean =false;
  selfemployee : boolean =false;
tid: AllTIDModel = new AllTIDModel();
Tid!:any;
BranchId!:any;
aofNo!:any;

tidToSearch:any;
tempCustData={
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

AOF1: Aof1Model =new Aof1Model();
AOF2: AofTwomodel =new AofTwomodel();

URL:any;
photo!:File;
sign!:File;

onPhotoSelected(event:any){
  this.photo= event.target.file[0];
}

onSignSelected(event:any){
  this.sign = event.target.file[0];
}


  constructor(private formBuilder: FormBuilder, private apiservice: ApiService, private route: ActivatedRoute) {
    this.step1 = this.formBuilder.group({

      tid:['',Validators.required],
      branchId:['',Validators.required],
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
      telephoneno1 :  ['', Validators.required],
      //AOF:-2
      name: ['', Validators.required], 
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
      //AOF:-3



    });
  }

  tidSearch(){
     console.log("tid :::::: "+this.tidToSearch);
    this.apiservice.TidDetails(this.tidToSearch).subscribe(
      (res:any)=>{
        this.tempCustData = res.data;
        console.log(this.tempCustData);
        this.AOF1.tid = this.tempCustData.tid;
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
      (err:any)=>{console.error(err);}
    )
  }

  onSubmit(){
    console.log("AOF1 ::::::: ",this.AOF1);
    
    this.apiservice.aof1Form(this.AOF1).subscribe(
      (response:any)=>{
        console.log(response.data);
      },
      (error:any)=>{
        console.error(error);        
      }
    )

    console.log("AOF2 ::::::: ",this.AOF2);
    this.apiservice.aof2Form(this.AOF2,this.photo,this.sign).subscribe(
      (response:any)=>{
        console.log(response.data);
      },
      (error:any)=>{
        console.error(error);        
      }
    )
    
  }


  changeTab(tabId: string) {
    this.activeTab = tabId;
  }
  show1(){
    this.individual = true;
    this.nonindividual = false;
    this.selfemployee = false;
  }
  show2(){
    this.individual = false;
    this.nonindividual = true;
    this.selfemployee = false;
  }
  show3(){
    this.individual = false;
    this.nonindividual = false;
    this.selfemployee = true;
  }

}

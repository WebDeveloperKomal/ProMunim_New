import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl="https://localhost:8181/auth";
  constructor(private http : HttpClient) { }


  /************************************** DASHBOARD COMPONENT ***************************************/

    branchCustCount():any
    {
      return this.http.get(`${this.baseUrl}/branch-customer-count`);
    }

    allCustCount():any
    {
      return this.http.get(`${this.baseUrl}/all-customer-count`);
    }

    empCustCount():any
    {
      return this.http.get(`${this.baseUrl}/emp-customer-count`);
    }

    AllTempCustomerCount():any
    {
      return this.http.get(`${this.baseUrl}/all-temp-customer-count`);
    }

    branchTempCustomerCount():any
    {
      return this.http.get(`${this.baseUrl}/branch-temp-customer-count`);
    }

    EmpTempCustomerCount():any
    {
      return this.http.get(`${this.baseUrl}/emp-temp-customer-count`);
    }

    allPaymentInfo():any
    {
      return this.http.get(`${this.baseUrl}/all-payment-info`);
    }

    branchPaymentInfo():any
    {
      return this.http.get(`${this.baseUrl}/branch-payment-info`);
    }

    allVisitLeadCount():any
    {
      return this.http.get(`${this.baseUrl}/all-visit-lead-count`);
    }

    branchVisitLeadCount():any
    {
      return this.http.get(`${this.baseUrl}/branch-visit-lead-count`);
    }

    empVisitLeadCount():any
    {
      return this.http.get(`${this.baseUrl}/emp-visit-lead-count`);
    }

    allLatestFollowUp():any
    {
      return this.http.get(`${this.baseUrl}/all-latest-follow-up`);
    }

    branchLatestFollowUp():any
    {
      return this.http.get(`${this.baseUrl}/branch-latest-follow-up`);
    }
    leadNotification():any
    {
      return this.http.get(`${this.baseUrl}/get-all-daily-lead-notification`);
    }
    // branchVisitLeadCount():any
    // {
    //   return this.http.get(`${this.baseUrl}/branch-visit-lead-count`);
    // }

    // branchVisitLeadCount():any
    // {
    //   return this.http.get(`${this.baseUrl}/branch-visit-lead-count`);
    // }

    // branchVisitLeadCount():any
    // {
    //   return this.http.get(`${this.baseUrl}/branch-visit-lead-count`);
    // }

    // branchVisitLeadCount():any
    // {
    //   return this.http.get(`${this.baseUrl}/branch-visit-lead-count`);
    // }
    


  /************************************** FOR SETTINGS COMPONENT ***************************************/

  /************************************** BRANCHES ***************************************/
    allBranches():any
    {
      return this.http.get(`${this.baseUrl}/branch`);
    }
    addBranch(branch:any):any
    {
      return this.http.post(`${this.baseUrl}/add-branch`,branch);
    }
    BranchById(id:number):any
    {
      return this.http.get(`${this.baseUrl}/get-branch-by-id/`+id);
    }
    updateBranch(branch:any):any
    {
      return this.http.put(`${this.baseUrl}/branch`,branch);
    }
    deleteBranch(id:number):any
    {
      return this.http.delete(`${this.baseUrl}/branch/`+id);
    }

    getTaxLink(){
      return this.http.get(`${this.baseUrl}/get-tax-type`);
    }


    /************************************** COMPLIANCES ***************************************/
    allCompliances():any
    {
      return this.http.get(`${this.baseUrl}/all-compliance`);
    }

    addCompliance(compliance:any):any
    {
      return this.http.post(`${this.baseUrl}/add-compliance`,compliance);
    }

    complianceById(id:number):any
    {
      return this.http.get(`${this.baseUrl}/get-compliance-by-id/`+id);
    }

    updateCompliance(compliance:any):any
    {
      return this.http.put(`${this.baseUrl}/compliance`,compliance);
    }

    deleteCompliance(id:number):any
    {
      return this.http.delete(`${this.baseUrl}/compliance/`+id);
    }


    /************************************** DEPARTMENTS ***************************************/
    allMainDepartments():any
    {
      return this.http.get(`${this.baseUrl}/mainDepartment`);
    }
    allDepartments():any
    {
      return this.http.get(`${this.baseUrl}/department`);
    }

    addDepartment(department:any):any
    {
      return this.http.post(`${this.baseUrl}/department`,department);
    }

    addMainDepartment(mainDep:any):any
    {
      return this.http.post(`${this.baseUrl}/mainDepartment`,mainDep);
    }

    DepartmentById(id:number):any
    {
      return this.http.get(`${this.baseUrl}/getdep/`+id);
    }

    updateDepartment(department:any):any
    {
      return this.http.put(`${this.baseUrl}/department`,department);
    }

    deleteDepartment(id:number):any
    {
      return this.http.delete(`${this.baseUrl}/department/`+id);
    }


    /************************************** PRODUCTS ***************************************/
    allProducts():any
    {
      return this.http.get(`${this.baseUrl}/all-product`);
    }

    addProduct(product:any):any
    {
      return this.http.post(`${this.baseUrl}/save-product`,product);
    }

    ProductById(id:number):any
    {
      return this.http.get(`${this.baseUrl}/get-product-by-id/`+id);
    }

    updateProduct(product:any):any
    {
      return this.http.put(`${this.baseUrl}/update-product`,product);
    }

    deleteProduct(id:number):any
    {
      return this.http.delete(`${this.baseUrl}/delete/`+id);
    }

  
    /************************************** PRODUCT FEES ***************************************/
    allProductfees():any
    {
      return this.http.get(`${this.baseUrl}/product-fees`);
    }

    addProductfees(fees:any):any
    {
      return this.http.post(`${this.baseUrl}/product-fees`,fees);
    }

    ProductfeesById(id:number):any
    {
      return this.http.get(`${this.baseUrl}/get-product-fees/`+id);
    }

    updateProductfees(fees:any):any
    {
      return this.http.put(`${this.baseUrl}/product-fees-update`,fees);
    }

    deleteProductfees(id:any):any
    {
      return this.http.delete(`${this.baseUrl}/product-fees/`+id);
    }


    /************************************** OTHER SERVICES ***************************************/
    allOtherServices():any
    {
      return this.http.get(`${this.baseUrl}/all-services`);
    }

    addOtherServices(services:any):any
    {
      return this.http.post(`${this.baseUrl}/add-services`,services);
    }

    OtherServiceById(id:number):any
    {
      return this.http.get(`${this.baseUrl}/service-info/`+id);
    }

    updateService(services:any):any
    {
      return this.http.put(`${this.baseUrl}/update-service`,services );
    }
    
    deleteService(id:number):any
    {
      return this.http.delete(`${this.baseUrl}/service/`+id );
    }


    /************************************** COURIOR DETAILS ***************************************/
    allCouriors():any
    {
      return this.http.get(`${this.baseUrl}/courier`);
    }

    addCourior(courior:any):any
    {
      return this.http.post(`${this.baseUrl}/add-courier`,courior);
    }

    couriorById(id:any):any
    {
      return this.http.get(`${this.baseUrl}/courier-by-id/`+id);
    }

    updateCourior(courior:any):any
    {
      return this.http.put(`${this.baseUrl}/update-courier`,courior);
    }

    deleteCourior(id:number):any
    {
      return this.http.delete(`${this.baseUrl}/courier/`+id);
    }

    /************************************** DOCUMENT CATEGORY ***************************************/
    allDocumentCategories():any
    {
      return this.http.get(`${this.baseUrl}/get-doc-category`);
    }

    DocumentCategoryById(id:number):any
    {
      return this.http.get(`${this.baseUrl}/get-doc-category`);
    }

    DocCategoryTypesById(id:number):any
    {
      return this.http.get(`${this.baseUrl}/get-doc-type/`+id);
    }

    addType(type:any):any
    {
      return this.http.post(`${this.baseUrl}/add-document-category-types`,type);
    }




  /************************************** FOR ROLES & APPOINTMENT COMPONENT ***************************************/

    allRoles():any
    {
      return this.http.get(`${this.baseUrl}/role`);
    }

    allPermissionTypes():any
    {
      return this.http.get(`${this.baseUrl}/permission-type`);
    }

    addRolesAndPermissions(data:any):any
    {
      return this.http.post(`${this.baseUrl}/role-permission-type`,data);
    }

    updateRolesAndPermissions(data:any):any
    {
      return this.http.put(`${this.baseUrl}/role-permission-type`,data);
    }

    deleteRole(id:number):any
    {
      return this.http.delete(`${this.baseUrl}/delete-role/`+id);
    }



    addNewUserRole(data:any):any
    {
      return this.http.post(`${this.baseUrl}/employee-permission`,data);
    }

    UpdateUserRole(data:any):any
    {
      return this.http.put(`${this.baseUrl}/employee-permission`,data);
    }

    permissionsByRoleId(id:number):any
    {
      return this.http.get(`${this.baseUrl}/role-permission-type/`+id);
    }





  /************************************** FOR ALL NEW CUSTOMERS COMPONENT ***************************************/

    allTempCustomers():any
    {
      return this.http.get(`${this.baseUrl}/allTempCustomer`);
    }

    addNewCustomer(cust:any):any
    {
      return this.http.post(`${this.baseUrl}/saveTempCustomer`,cust);
    }

    UpdateTempCustomer(cust:any):any
    {
      return this.http.put(`${this.baseUrl}/tempCustomer`,cust);
    }

    deleteTempCustomer(id:number):any
    {
      return this.http.delete(`${this.baseUrl}/tempCustomer/`+id);
    }




  /************************************** Daily Visits ***************************************/
  
  alldailyVisits(): any { // running
    return this.http.get(`${this.baseUrl}/all-temp-customer-daily-visit`);
  }

  allvisitsOfCust(id : number) : any{ //running
    return this.http.get(`${this.baseUrl}/temp-customer-lead/` + id);
  }

  addVisitdetails(visit: any): any { //Not running create API
    return this.http.post(`${this.baseUrl}/save-daily-visit`, visit);
  }

  SearchVisitdetails(data: any): any { //Not running create API
    return this.http.get(`${this.baseUrl}/branch-temp-customer-daily-visit`, data);
  }
 

  /************************************** Daily Lead ***************************************/

  alldailyLead(): any {// running
    return this.http.get(`${this.baseUrl}/all-temp-customer-daily-lead`);
  }

  allleads(id : number) : any{ //running
    return this.http.get(`${this.baseUrl}/temp-customer-lead/` + id);
  }

  addleadsdetails(lead: any): any { //running
    return this.http.post(`${this.baseUrl}/save-daily-lead`, lead);
  }
  Searchleaddetails(data: any): any { //Not running create API
    return this.http.get(`${this.baseUrl}/branch-temp-customer-daily-lead`, data);
  }

  /************************************** All TID ***************************************/

  allTID(): any { // running
    return this.http.get(`${this.baseUrl}/all-tid`);
  }

  deleteTID(id: number): any { //running
    return this.http.delete(`${this.baseUrl}/tid-generation/${id}`);
  }
  
  addtid(tid: any): any { //running AOF NUMBER
    return this.http.post(`${this.baseUrl}/tid-generation`, tid);
  }

  updatestatus(status: any): any { //running
    return this.http.post(`${this.baseUrl}/tid-status`, status);
  }

  updatecourier(courier: any): any { //running
    return this.http.put(`${this.baseUrl}/tid-courier`, courier);
  }
  SearchTiddetails(data: any): any { //Not running create API
    return this.http.post(`${this.baseUrl}/all-branch-tid`, data);
  }

   /************************************** Customer Services ***************************************/
    /**************** AOF Form  *************/
  TidDetails(tid: any): any { //Running
    return this.http.get(`${this.baseUrl}/get-tid-details/` + tid)
  }

  // ***********AOF1*************
  aof1Form(aof1: any): any { //Running
    return this.http.post(`${this.baseUrl}/organization-individual-details`, aof1)
  }

  /******** AOF2 *********/
  //****** @RequestParam ****** 
  aof2Form(aof2: any, sign: File, photo: File): any { //Running
    const formdata: FormData = new FormData();
    formdata.append('data', JSON.stringify(aof2));
    formdata.append('auth_sign1', sign);
    formdata.append('auth_photo1', photo);
    return this.http.post(`${this.baseUrl}/auth_signatory_1`, formdata, { reportProgress: true })
  }
  authSignatoryByTID(tid:any)
  {
    return this.http.get(`${this.baseUrl}/get-signatory/`+tid);

  }

  /******** AOF3 *********/
  aof3Form(aof3: any): any {  //Running
    return this.http.post(`${this.baseUrl}/occupation_income_details`, aof3)
  }

  /******** AOF4*********/

  docCategory(): any { //Running
    return this.http.get(`${this.baseUrl}/get-doc-category`)
  }

  docType(catId: any): any { //Running 
    return this.http.get(`${this.baseUrl}/get-doc-type/` + catId)
  }

  aof4Form(aof4: any , docImage : File): any {  //Running
    const formdata: FormData = new FormData();
    formdata.append('data', JSON.stringify(aof4));
    formdata.append('docImage', docImage);
    return this.http.post(`${this.baseUrl}/save-doc1`,formdata, { reportProgress: true } )
  }

  /******** AOF5 *********/

  aof5Form(aof5: any): any {  //Running
    const formdata : FormData =new FormData();
    formdata.append('data' , JSON.stringify(aof5))
    return this.http.post(`${this.baseUrl}/company_use`, formdata,{reportProgress: true})
  }

  /******** AOF6 *********/
  productlist(): any { //Running
    return this.http.get(`${this.baseUrl}/all-product`)
  }

  aof6Form(aof6: any): any {  //Running
    return this.http.post(`${this.baseUrl}/save-customer-pro`, aof6)
  }
  // aof6getProd(accNumb:any): any {  //Not Running
  //   return this.http.get(`${this.baseUrl}/customer-product/`+accNumb)
  // }
  aof61Form(aof61: any): any {  //Not Running
    return this.http.post(`${this.baseUrl}/save-invoice-item`, aof61)
  }

  aof62Form(aof62: any): any {  // NOT Running
    return this.http.post(`${this.baseUrl}/customer-account`, aof62)
  }


  /**************** All Customer List *************/
    allCustomer(): any { //running
      return this.http.get(`${this.baseUrl}/all-customers`);
    }

  /**************** View Customer detail *************/
  
  getAccount(tId:any): any { //running
    return this.http.get(`${this.baseUrl}/get-acc-details/` + tId);
  }

  getSignatory(tId:any): any { //running
    return this.http.get(`${this.baseUrl}/get-signatory/` + tId);
  }

  getCompliances(tId:any): any { //running
    return this.http.get(`${this.baseUrl}/get-org-income-details/` + tId);
  }

  getCustomerInfo(tId:any): any { //running
    return this.http.get(`${this.baseUrl}/get-org-details/` + tId);
  }

  getcompliance2(tId:any): any { //running  
    return this.http.get(`${this.baseUrl}/get-customer-Pro/` + tId);
  }

   getCompanyUse(tId:any): any { //running
    return this.http.get(`${this.baseUrl}/get-company-use/` + tId);
  }

  getBilling(tId:any): any { //running
    return this.http.get(`${this.baseUrl}/get-billing/` + tId);
  }

    /***************** Billing *****************/
    getAllBillingTransactions(accNumb:any): any { //running
      return this.http.get(`${this.baseUrl}/getAllTransaction/` + accNumb);
    }
  //api sona details
    //Product
    getProductSer(accountno: any): any { //running
      return this.http.get(`${this.baseUrl}/customer-product/`+ accountno);
    }
updateProductSer(productdata: any): any { //running
    return this.http.put(`${this.baseUrl}/update-customer-product`, productdata);
  }

  //  //Profile 
  //  getProfile(tId:any): any { //running
  //   return this.http.get(`${this.baseUrl}/get-org-details/`+ tId);
  // }
  // updateProfile(profile: any): any { //running
  //   return this.http.put(`${this.baseUrl}/update-org-individual`, profile);
  // }

  //Customer Interaction
  getCustomerInteraction(accountno: any): any { //running
    return this.http.get(`${this.baseUrl}/get-followup/`+ accountno);
  }
  addCustInteraction(custinteraction:any):any
  {
    return this.http.post(`${this.baseUrl}/save-followup`,custinteraction);
  }
  updateCustInteraction(custInteraction: any): any { //running
    return this.http.put(`${this.baseUrl}/update-followup`, custInteraction);
  }
  deleteCustInteraction(followupId:number):any
  {
    return this.http.delete(`${this.baseUrl}/delete-followup/`+followupId);
  }


   //Voucher
  //  getVoucher(accountno: any): any { //running
  //   return this.http.get(`${this.baseUrl}/get-vouchers/`+ accountno);
  // }
  // addVoucher(custinteraction:any):any
  // {
  //   return this.http.post(`${this.baseUrl}/save-voucher`,custinteraction);
  // }
 
  
    
          // occupation-income-details

          getIncomeTax(incometaxdetails:any):any
          {
            return this.http.post(`${this.baseUrl}/get-tax-planning`,incometaxdetails);
          }
          addIncomeTax(incometaxdetails:any):any
          {
            return this.http.post(`${this.baseUrl}/save-tax-planning`,incometaxdetails);
          }

          updateTaxPlanning(taxplanning: any): any { //running
            return this.http.put(`${this.baseUrl}/update-followup`, taxplanning);
          }
  

          //khush

          
  // getAccount(tId: any): any { //running
  //   return this.http.get(`${this.baseUrl}/get-acc-details/` + tId);
  // }

  // getSignatory(tId: any): any { //running
  //   return this.http.get(`${this.baseUrl}/get-signatory/` + tId);
  // }

  // getCompliances(tId: any): any { //running
  //   return this.http.get(`${this.baseUrl}/get-org-income-details/` + tId);
  // }

  // getCustomerInfo(tId: any): any { //running
  //   return this.http.get(`${this.baseUrl}/get-org-details/` + tId);
  // }

  // getcompliance2(tId: any): any { //running  
  //   return this.http.get(`${this.baseUrl}/get-customer-Pro/` + tId);
  // }

  // getCompanyUse(tId: any): any { //running
  //   return this.http.get(`${this.baseUrl}/get-company-use/` + tId);
  // }

  // getBilling(tId: any): any { //running
  //   return this.http.get(`${this.baseUrl}/get-billing/` + tId);
  // }


  //Profile 
  getProfile(tId: any): any { //running
    return this.http.get(`${this.baseUrl}/get-org-details/` + tId);
  }

  updateProfile(profile: any): any { //running
    return this.http.put(`${this.baseUrl}/update-org-individual`, profile);
  }

  //Documents
  getKYCDocuments(tidData: any): any {  //Not running
    return this.http.post(`${this.baseUrl}/get-document1`, tidData);
  }

  getBankStatement(accountNo: any): any { //running
    return this.http.get(`${this.baseUrl}/acc-writing/` + accountNo);
  }

  deleteKYCDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-KYC-document/${Id}`)
  }

  deleteDoc2(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-bankStatement-document/${Id}`)
  }

  getDoc2(docData: any): any {  //running
    return this.http.post(`${this.baseUrl}/get-doc2`, docData);
  }

  deleteSalesDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-sales-document/${Id}`)
  }

  deletePurchaseDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-purchase-document/${Id}`)
  }

  deleteExpenseDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-expense-document/${Id}`)
  }

  deleteLoanDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-loan-document/${Id}`)
  }

  deleteCheckBooksDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-checkBooks-document/${Id}`)
  }


  deletePayInSlipDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-payInSlip-document/${Id}`)
  }

  deleteInvestmentDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-investment-document/${Id}`)
  }

  deleteTaxesDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-taxes-document/${Id}`)
  }

  deleteVehicleDocument(Id: any): any {
    return this.http.delete(`${this.baseUrl}/delete-vehicle-document/${Id}`)
  }

  //Occupation 
  acWriting(ac: any): any { //running
    return this.http.get(`${this.baseUrl}/acc-writing/` + ac);
  }

  deleteAccWriting(Id: any): any {
    return this.http.delete(`${this.baseUrl}/acc-writing/${Id}`)
  }


  //Authorised Signatory
  getAuthorisedSignatory(tid: any): any { //running
    return this.http.get(`${this.baseUrl}/get-signatory/` + tid);
  }

  deleteAuthorisedSignatory(Id: number): any {//running
    return this.http.delete(`${this.baseUrl}/delete-auth-sign/${Id}`);
  }

  //Transaction
  getTransaction(accountNo: any): any { //running
    return this.http.get(`${this.baseUrl}/getAllTransaction/` + accountNo);
  }

  //Voucher
  getVoucher(accountno: any): any { //running
    return this.http.get(`${this.baseUrl}/get-vouchers/` + accountno);
  }

  addVoucher(voucher: any, receiptImage :File): any {
    const formdata: FormData = new FormData();
      formdata.append('data', JSON.stringify(voucher));
      formdata.append('receiptImage', receiptImage);
    return this.http.post(`${this.baseUrl}/save-voucher`, formdata,{reportProgress : true});
  }

  deleteVoucher(voucherId: any): any {
    return this.http.delete(`${this.baseUrl}/delete-voucher/${voucherId}`)
  }

  /************************************** All Customer Complaint ***************************************/

  allCustomerComplaint(): any { //running
    return this.http.get(`${this.baseUrl}/all-customer-complaint`);
  }

   alltempCustomer():any{ //running
    return this.http.get(`${this.baseUrl}/all-customers`);
  }
   // ********* first test the api ***********
  addComplaints(Complaints : any) : any{ //Not running
    return this.http.post(`${this.baseUrl}/save-complaint`,Complaints);
  }

  changestatus(changestatus: any): any { //Not running
    return this.http.put(`${this.baseUrl}/change-status`, changestatus);
  }


    /************************************** Reports ***************************************/
      
    // ********* Reports ***********
   

    allInvoiceReport( data:any): any { 
    
      return this.http.post(`${this.baseUrl}/get-all-invoice-report`,data);
     
    }
    allTransactionReport( data:any): any { 
    
      return this.http.post(`${this.baseUrl}/getAllTransReport`,data);
     
    }
    allInteractionReport( data:any): any { 
    
      return this.http.post(`${this.baseUrl}/get-all-followup-report`,data);
     
    }
    allComplaintsReport( data:any): any { 
    
      return this.http.post(`${this.baseUrl}/all-customer-complaints-report`,data);
     
    }

    allrmwisereport(): any { // How to set data in model 
      return this.http.get(`${this.baseUrl}/rm-wise-report`);
    }
  

  /************************************** All Tech Support ***************************************/
  allTechSupport(): any { //running
    return this.http.get(`${this.baseUrl}/all-tech-support`);
  }

    // *****************  @RequestParam *************************** //HOLD

  addTickets(ticket: any): any { //Not running  
    const formData = new FormData();
    formData.append('data', JSON.stringify(ticket));
    return this.http.post(`${this.baseUrl}/tech-support`, formData);
  }

  // *****************  Multidata how to set model  data ***************************     //HOLD
  allreplayByID(id : number): any { //Not running    
    return this.http.get(`${this.baseUrl}/techSupport-replay/` + id);
  }  

  // *****************  1st get id and sent replay  ***************************
  addreplay(id: any): any { //running
    return this.http.post(`${this.baseUrl}/support-replay`,id);
  }


  /************************************** News Alert***************************************/

  allNewsAlert(): any {//running
    return this.http.get(`${this.baseUrl}/get-news-alert`);
  }

  addNewsAlert(NewsAlert: any): any {//running
    return this.http.post(`${this.baseUrl}/add-news`, NewsAlert);
  }

  updateNewsAlert(NewsAlert: any): any {  //running
    return this.http.put(`${this.baseUrl}/news-alert`, NewsAlert);
  }
  deleteNewsAlert(newsAlertId: number): any {//running
    return this.http.delete(`${this.baseUrl}/delete-news-alert/${newsAlertId}`);
  }









}
// 192.168.0.45:8080/get-all-customer
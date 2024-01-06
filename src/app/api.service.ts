import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl="http://localhost:8181/auth";
  constructor(private http: HttpClient) { }

  
  /************************************** FOR SETTINGS COMPONENT ***************************************/


  /************************************** BRANCHES ***************************************/

  allBranches(): any {
    return this.http.get(`${this.baseUrl}/branch`);
  }


  /************************************** COMPLIANCES ***************************************/
  allCompliances(): any {
    return this.http.get(`${this.baseUrl}/all-compliance`);
  }

  addCompliance(compliance: any): any {
    return this.http.post(`${this.baseUrl}/add-compliance`, compliance);
  }

  // view
  complianceById(id: number): any {
    return this.http.get(`${this.baseUrl}/get-compliance-by-id/` + id);
  }

  updateCompliance(compliance: any): any {
    return this.http.put(`${this.baseUrl}/compliance`, compliance);
  }

  deleteCompliance(id: number): any {
    return this.http.delete(`${this.baseUrl}/compliance/${id}`);
  }


  /************************************** DEPARTMENTS ***************************************/

  allDepartments(): any {
    return this.http.get(`${this.baseUrl}/department`);
  }


  /************************************** PRODUCTS ***************************************/
  allProducts(): any {
    return this.http.get(`${this.baseUrl}/all-product`);
  }


  /************************************** PRODUCT FEES ***************************************/
  allProductfees(): any {
    return this.http.get(`${this.baseUrl}/product-fees`);
  }


  /************************************** OTHER SERVICES ***************************************/
  allOtherServices(): any {
    return this.http.get(`${this.baseUrl}/all-services`);
  }


  /************************************** COURIOR DETAILS ***************************************/
  allCouriors(): any {
    return this.http.get(`${this.baseUrl}/courier`);
  }

  /************************************** DOCUMENT CATEGORY ***************************************/
  allDocumentCategories(): any {
    return this.http.get(`${this.baseUrl}/get-doc-category`);
  }


  /************************************** FOR EMPLOYEE COMPONENT ***************************************/
  allEmployees(): any {
    return this.http.get(`${this.baseUrl}/employee`);
  }

  /************************************** FOR ALL NEW CUSTOMERS COMPONENT ***************************************/


  allTempCustomers(): any {
    return this.http.get(`${this.baseUrl}/allTempCustomer`);
  }


  /************************************** Daily Visits ***************************************/

  alldailyVisits(): any { // running
    return this.http.get(`${this.baseUrl}/all-temp-customer-daily-visit`);
  }

  allvisitsOfCust(id: number): any { //running
    return this.http.get(`${this.baseUrl}/temp-customer-lead/` + id);
  }

  addVisitdetails(visit: any): any { //running
    return this.http.post(`${this.baseUrl}/save-daily-visit`, visit);
  }


  /************************************** Daily Lead ***************************************/

  alldailyLead(): any {// running
    return this.http.get(`${this.baseUrl}/all-temp-customer-daily-lead`);
  }

  allleads(id: number): any { //running
    return this.http.get(`${this.baseUrl}/temp-customer-lead/` + id);
  }

  addleadsdetails(lead: any): any { //running
    return this.http.post(`${this.baseUrl}/save-daily-lead`, lead);
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

  allDoc(tid: any): any {
    return this.http.get(`${this.baseUrl}/get-document-details/` + tid)
  }

  aof4Form(aof4: any, docImage: File): any {  //Running
    const formdata: FormData = new FormData();
    formdata.append('data', JSON.stringify(aof4));
    formdata.append('docImage', docImage);
    return this.http.post(`${this.baseUrl}/save-doc1`, formdata, { reportProgress: true })
  }

  /******** AOF5 *********/

  aof5Form(aof5: any): any {  //Running
    const formdata: FormData = new FormData();
    formdata.append('data', JSON.stringify(aof5))
    return this.http.post(`${this.baseUrl}/company_use`, formdata, { reportProgress: true })
  }

  /******** AOF6 *********/
  productlist(): any { //Running
    return this.http.get(`${this.baseUrl}/all-product`)
  }

  aof6Form(aof6: any): any {  //Running
    return this.http.post(`${this.baseUrl}/save-customer-pro`, aof6)
  }

  aof61Form(aof61: any): any {  //Not Running
    return this.http.post(`${this.baseUrl}/save-invoice-item`, aof61)
  }

  aof62Form(aof62: any): any {  // NOT Running
    return this.http.post(`${this.baseUrl}/customer_account`, aof62)
  }


  /**************** All Customer List *************/
  allCustomer(): any { //running
    return this.http.get(`${this.baseUrl}/all-customers`);
  }

  /**************** View Customer detail *************/
  // getProfileFile(fileName :any):any{
  //   return this.http.get(`${this.baseUrl}/getFile/`+fileName);
  // }

  // C:\Users\Web Designer\AppData\Local\Temp\tomcat.8181.8215816524904308102\uploads

  
  getFile(filepath: any): any { //running
    return this.http.get(`${this.baseUrl}/getFile/`+ filepath);
  }

  getAccount(tId: any): any { //running
    return this.http.get(`${this.baseUrl}/get-acc-details/` + tId);
  }

  getSignatory(tId: any): any { //running
    return this.http.get(`${this.baseUrl}/get-signatory/` + tId);
  }

  getCompliances(tId: any): any { //running
    return this.http.get(`${this.baseUrl}/get-org-income-details/` + tId);
  }

  getCustomerInfo(tId: any): any { //running
    return this.http.get(`${this.baseUrl}/get-org-details/` + tId);
  }

  getcompliance2(tId: any): any { //running  
    return this.http.get(`${this.baseUrl}/get-customer-Pro/` + tId);
  }

  getCompanyUse(tId: any): any { //running
    return this.http.get(`${this.baseUrl}/get-company-use/` + tId);
  }

  getBilling(tId: any): any { //running
    return this.http.get(`${this.baseUrl}/get-billing/` + tId);
  }

  //Profile 
  getProfile(tId: any): any { //running
    return this.http.get(`${this.baseUrl}/get-org-details/` + tId);
  }

  updateProfile(profile: any): any { //running
    return this.http.put(`${this.baseUrl}/update-org-individual`, profile);
  }

  //Documents
  getKYCDocuments(tidData: any): any {  // running
    return this.http.post(`${this.baseUrl}/get-document1`, tidData);
  }

  getByIdKYCDoc(documentId: any): any {  //running documentId
    return this.http.get(`${this.baseUrl}/get-document-by-id/`+ documentId);
  }


  getAccDetails(accountNo: any): any {  //running
    return this.http.get(`${this.baseUrl}/get-bank-acc-details/`+ accountNo);
  }
  

  // aof4Form(aof4: any, docImage: File): any {  //Running
  //   const formdata: FormData = new FormData();
  //   formdata.append('data', JSON.stringify(aof4));
  //   formdata.append('docImage', docImage);
  //   return this.http.post(`${this.baseUrl}/save-doc1`, formdata, { reportProgress: true })
  // }

  saveBankStatement(statement: any ,bankstatement:File): any {  // running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(statement));
   formdata.append('bankStatement', bankstatement);   
    return this.http.post(`${this.baseUrl}/save-bank-statement`,formdata, { reportProgress: true });
  }  

  saveBankDetails(details: any ,bankdetails:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(details));
   formdata.append('bankdetails', bankdetails);   
    return this.http.post(`${this.baseUrl}/save-bank-details`,formdata, { reportProgress: true });
  } 

  saveSalesInvoice(invoice: any , salesinvoice:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(invoice));
   formdata.append('salesinvoice', salesinvoice);   
    return this.http.post(`${this.baseUrl}/save-sales-invoice`,formdata, { reportProgress: true });
  } 

  savePurchaseInvoice(purchase: any , purchaseinvoice:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(purchase));
   formdata.append('purchaseinvoice', purchaseinvoice);   
    return this.http.post(`${this.baseUrl}/save-purchase-invoice`,formdata, { reportProgress: true });
  } 

  saveExpensesDetails(expenses: any , expense:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(expenses));
   formdata.append('expense', expense);   
    return this.http.post(`${this.baseUrl}/save-expenses-details`,formdata, { reportProgress: true });
  } 

  saveLoan(loan: any , loandetails:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(loan));
   formdata.append('vehicledetails', loandetails);   
    return this.http.post(`${this.baseUrl}/save-loan`,formdata, { reportProgress: true });
  } 

    
  saveCheckBook(checkbook: any , chequbookdetails:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(checkbook));
   formdata.append('chequbookdetails', chequbookdetails);   
    return this.http.post(`${this.baseUrl}/save-cheque-books-record`,formdata, { reportProgress: true });
  }

  savePaySlip(payslip: any , payslipdetails:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(payslip));
   formdata.append('payslipdetails', payslipdetails);   
    return this.http.post(`${this.baseUrl}/save-pay-in-slips`,formdata, { reportProgress: true });
  } 

  saveInvestment(investment: any , investmentdetails:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(investment));
   formdata.append('investmentdetails', investmentdetails);   
    return this.http.post(`${this.baseUrl}/save-investment-details`,formdata, { reportProgress: true });
  } 

  getTaxType(): any { //running
    return this.http.get(`${this.baseUrl}/get-tax-type`);
  }

  saveTaxes(taxes: any , taxdetails:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(taxes));
   formdata.append('taxdetails', taxdetails);   
    return this.http.post(`${this.baseUrl}/save-taxes`,formdata, { reportProgress: true });
  } 

  saveVehicle(vehicle: any , vehicledetails:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(vehicle));
   formdata.append('vehicledetails', vehicledetails);   
    return this.http.post(`${this.baseUrl}/save-vehicle`,formdata, { reportProgress: true });
  } 


  saveCustKyc(kyc: any , docImage:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(kyc));
   formdata.append('docImage', docImage);   
    return this.http.post(`${this.baseUrl}/update-Doc1`,formdata, { reportProgress: true });
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

  updateOccupationIncome(income : any): any { //running
    return this.http.put(`${this.baseUrl}/update-occupation-income`, income);
  }

  deleteAccWriting(Id: any): any {
    return this.http.delete(`${this.baseUrl}/acc-writing/${Id}`)
  }

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


  //save-acc-writing
  saveAccWriting(accwriting: any , accDocumentImage:File): any {  //running
    const formdata: FormData = new FormData();
   formdata.append('data', JSON.stringify(accwriting));
   formdata.append('accDocumentImage', accDocumentImage);   
    return this.http.post(`${this.baseUrl}/save-acc-writing`,formdata, { reportProgress: true });
  } 

  //Authorised Signatory
  getAuthorisedSignatory(tid: any): any { //running
    return this.http.get(`${this.baseUrl}/get-signatory/` + tid);
  }

  deleteAuthorisedSignatory(Id: number): any {//running
    return this.http.delete(`${this.baseUrl}/delete-auth-sign/${Id}`);
  }

  getAuthorisedSignatoryById(id: any): any { //running
    return this.http.get(`${this.baseUrl}/get-auth-signatory-by-id/` + id);
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

  alltempCustomer(): any { //running
    return this.http.get(`${this.baseUrl}/all-customers`);
  }

  addComplaints(Complaints: any): any {  //running
    return this.http.post(`${this.baseUrl}/save-complaint`, Complaints);
  }

  changestatus(changestatus: any): any {  //running
    return this.http.put(`${this.baseUrl}/change-status`, changestatus);
  }

  replayByID(id: number): any { // running    
    return this.http.get(`${this.baseUrl}/get-complaints-details/` + id);
  }

  replay(replay: any): any {  //running
    return this.http.post(`${this.baseUrl}/save-complaint-reply`, replay);
  }

  /************************************** Reports ***************************************/

  // ********* Reports ***********
  allrmwisereport(): any { // How to set data in model 
    return this.http.get(`${this.baseUrl}/rm-wise-report`);
  }


  /************************************** All Tech Support ***************************************/
  allTechSupport(): any { //running
    return this.http.get(`${this.baseUrl}/all-tech-support`);
  }

  //*****************  @RequestParam *************************** 

  addTickets(ticket: any): any { //running  
    const formdata: FormData = new FormData();
    formdata.append('data', JSON.stringify(ticket));
    return this.http.post(`${this.baseUrl}/tech-support`, formdata, { reportProgress: true });
  }

  allreplayByID(id: number): any { // running    
    return this.http.get(`${this.baseUrl}/techSupport-replay/` + id);
  }

  addreplay(id: any): any { //running
    return this.http.post(`${this.baseUrl}/support-replay`, id);
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


  users() {
    return this.http.get('http://192.168.0.45:8080/auth/get-customer-complaints/88888888');
  }

}
// 192.168.0.45:8080/get-all-customer
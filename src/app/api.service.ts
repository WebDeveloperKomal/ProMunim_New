import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:8181/auth";


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

  allvisitsOfCust(id : number) : any{ //running
    return this.http.get(`${this.baseUrl}/temp-customer-lead/` + id);
  }

  addVisitdetails(visit: any): any { //running
    return this.http.post(`${this.baseUrl}/save-daily-visit`, visit);
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
    aof1Form(aof1 : any): any{ //Running
      return this.http.post(`${this.baseUrl}/organization-individual-details`, aof1)
    }

    TidDetails(tid:any): any{ //Running
      return this.http.get(`${this.baseUrl}/get-tid-details/`+tid)
    }
    /******** Authorised Signatory Details  Form *********/


    //*****************  @RequestParam *************************** 
    aof2Form(aof2 : any, sign:File, photo:File): any{ //Not Running
      const formdata:FormData = new FormData();
      formdata.append('data',JSON.stringify(aof2));
      formdata.append('auth_sign1',sign);
      formdata.append('auth_photo1', photo);
      return this.http.post(`${this.baseUrl}/auth_signatory_1`, formdata,{reportProgress:true})
    }

     /******** Authorised Signatory Details  Form *********/
     aof3Form(aof3 : any): any{  //Not Running
      return this.http.post(`${this.baseUrl}/occupation_income_details`, aof3)
    }

    /**************** All Customer List *************/
    allCustomer(): any { //running
      return this.http.get(`${this.baseUrl}/all-customers`);
    }
  

  /************************************** All Customer Complaint ***************************************/

  allCustomerComplaint(): any { //running
    return this.http.get(`${this.baseUrl}/all-customer-complaint`);
  }

  alltempCustomer():any{ //running
    return this.http.get(`${this.baseUrl}/all-customers`);
  }

  addComplaints(Complaints : any) : any{  //running
    return this.http.post(`${this.baseUrl}/save-complaint`,Complaints);
  }

  changestatus(changestatus: any): any {  //running
    return this.http.put(`${this.baseUrl}/change-status`, changestatus);
  }

  replayByID(id : number): any { // running    
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
    const formdata:FormData = new FormData();
    formdata.append('data',JSON.stringify(ticket));
    return this.http.post(`${this.baseUrl}/tech-support`, formdata,{reportProgress:true});
  }

  allreplayByID(id : number): any { // running    
    return this.http.get(`${this.baseUrl}/techSupport-replay/` + id);
  }  

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




  users() {
    return this.http.get('http://192.168.0.45:8080/auth/get-customer-complaints/88888888');
  }
  
}
// 192.168.0.45:8080/get-all-customer
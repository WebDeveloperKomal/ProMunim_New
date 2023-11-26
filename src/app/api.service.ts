import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {





  
  baseUrl="http://localhost:8181/auth";
  
  
  constructor(private http : HttpClient) { }



  /************************************** FOR SETTINGS COMPONENT ***************************************/


  /************************************** BRANCHES ***************************************/
    allBranches():any
    {
      return this.http.get(`${this.baseUrl}/branch`);
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
      return this.http.delete(`${this.baseUrl}/compliance/${id}`);
    }


    /************************************** DEPARTMENTS ***************************************/
    allDepartments():any
    {
      return this.http.get(`${this.baseUrl}/department`);
    }


    /************************************** PRODUCTS ***************************************/
    allProducts():any
    {
      return this.http.get(`${this.baseUrl}/all-product`);
    }

  
    /************************************** PRODUCT FEES ***************************************/
    allProductfees():any
    {
      return this.http.get(`${this.baseUrl}/product-fees`);
    }


    /************************************** OTHER SERVICES ***************************************/
    allOtherServices():any
    {
      return this.http.get(`${this.baseUrl}/all-services`);
    }


    /************************************** COURIOR DETAILS ***************************************/
    allCouriors():any
    {
      return this.http.get(`${this.baseUrl}/courier`);
    }

    /************************************** DOCUMENT CATEGORY ***************************************/
    allDocumentCategories():any
    {
      return this.http.get(`${this.baseUrl}/get-doc-category`);
    }









    
    /************************************** FOR EMPLOYEE COMPONENT ***************************************/


    /************************************** DOCUMENT CATEGORY ***************************************/
    allEmployees():any
    {
      return this.http.get(`${this.baseUrl}/employee`);
    }










    /************************************** FOR ALL NEW CUSTOMERS COMPONENT ***************************************/


    /************************************** DOCUMENT CATEGORY ***************************************/
    allTempCustomers():any
    {
      return this.http.get(`${this.baseUrl}/allTempCustomer`);
    }






    







  users(){
    return this.http.get('http://192.168.0.45:8080/auth/get-customer-complaints/88888888');
  }
}
// 192.168.0.45:8080/get-all-customer
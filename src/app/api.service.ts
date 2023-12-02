import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  allEmployees() {
    throw new Error('Method not implemented.');
  }





  
  baseUrl="http://localhost:8181/auth";
  
  
  constructor(private http : HttpClient) { }



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
    allDepartments():any
    {
      return this.http.get(`${this.baseUrl}/department`);
    }

    addDepartment(department:any):any
    {
      return this.http.post(`${this.baseUrl}/department`,department);
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







    /************************************** FOR ALL NEW CUSTOMERS COMPONENT ***************************************/

    allTempCustomers():any
    {
      return this.http.get(`${this.baseUrl}/allTempCustomer`);
    }

    addNewCustomer(cust:any):any
    {
      return this.http.post(`${this.baseUrl}/saveTempCustomer`,cust);
    }










  users(){
    return this.http.get('http://192.168.0.45:8080/auth/get-customer-complaints/88888888');
  }
}
// 192.168.0.45:8080/get-all-customer
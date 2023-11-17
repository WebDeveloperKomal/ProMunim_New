import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch/branch.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { DepartmentComponent } from './department/department.component';
import { ProductsComponent } from './products/products.component';
import { ProductfeesComponent } from './productfees/productfees.component';
import { OtherservicesComponent } from './otherservices/otherservices.component';
import { CourierdetailsComponent } from './courierdetails/courierdetails.component';
import { DocumentcategoryComponent } from './documentcategory/documentcategory.component';
import { AddComplianceComponent } from './add-compliance/add-compliance.component';
import { ViewCompianceComponent } from './view-compiance/view-compiance.component';
import { EditDocumentCategoryComponent } from './edit-document-category/edit-document-category.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewCustomersComponent } from './new-customers/new-customers.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { UpdateNewCustomerComponent } from './update-new-customer/update-new-customer.component';
import { NewCustomerInfoComponent } from './new-customer-info/new-customer-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewsAlertComponent } from './news-alert/news-alert.component';
import { TechSupportComponent } from './tech-support/tech-support.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ViewTechsupportComponent } from './view-techsupport/view-techsupport.component';
import { AllInvoicesComponent } from './all-invoices/all-invoices.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { AllInteractionsComponent } from './all-interactions/all-interactions.component';
import { AllComplaintsComponent } from './all-complaints/all-complaints.component';
import { RMWiseReportComponent } from './rmwise-report/rmwise-report.component';
import { AllDailyVisitComponent } from './all-daily-visit/all-daily-visit.component';
import { ViewAddDailyvisitComponent } from './view-add-dailyvisit/view-add-dailyvisit.component';
import { AlldailyleadsComponent } from './alldailyleads/alldailyleads.component';
import { ViewAddDailyleadsComponent } from './view-add-dailyleads/view-add-dailyleads.component';
import { AllTIDComponent } from './all-tid/all-tid.component';
import { AddTIDComponent } from './add-tid/add-tid.component';
import { TidgenerationComponent } from './tidgeneration/tidgeneration.component';
import { AllCustomerListComponent } from './all-customer-list/all-customer-list.component';
import { AllComplaintsMainComponent } from './all-complaints-main/all-complaints-main.component';
import { AddCustomerComplaintsMainComponent } from './add-customer-complaints-main/add-customer-complaints-main.component';
import { ViewCustomerComplaintsMainComponent } from './view-customer-complaints-main/view-customer-complaints-main.component';
import { UserModel } from './branch/branch.component.model';
import { UserRolePermissionComponent } from './user-role-permission/user-role-permission.component';
import { TaskAppointmentComponent } from './task-appointment/task-appointment.component';
import { TaskAppointmentDemoComponent } from './task-appointment-demo/task-appointment-demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path : 'header' , component : HeaderComponent
  },
  {
    path : 'sidenav' , component : SidenavComponent
  },
  {
    path : '' , component : DashboardComponent
  },

  {
    path : 'branch' , component : BranchComponent
  },
  
  {
    path : 'compliance' , component : ComplianceComponent
  },
  { path: "add-compliance", component: AddComplianceComponent},
  { path: "view-compliance", component: ViewCompianceComponent},
  {
    path : 'department' , component : DepartmentComponent
  },
  {
    path : 'product' , component : ProductsComponent
  },
  {
    path : 'productFees' , component : ProductfeesComponent
  },
  {
    path : 'otherservices' , component : OtherservicesComponent
  },
  {
    path : 'courier' , component : CourierdetailsComponent
  }
,
{
  path : 'documentcategory' , component : DocumentcategoryComponent
},
{ path: "edit-document-category", component: EditDocumentCategoryComponent},
{ path: "employee", component: EmployeeComponent },
{ path: "user-role-permission", component: UserRolePermissionComponent },
{ path: "tasksappointments", component: TaskAppointmentComponent },
{ path: "tasksappointments-demo", component: TaskAppointmentDemoComponent },


{ path: "allnewcustomer", component: NewCustomersComponent},
{ path: "add-new-customer", component: AddNewCustomerComponent},
{ path: "new-customer-info", component: NewCustomerInfoComponent},
{ path: "update-new-customer", component: UpdateNewCustomerComponent},


{ path: "alldailyvisits", component: AllDailyVisitComponent },
{ path: "view-add-dailyvisits", component: ViewAddDailyvisitComponent },
// { path: "view-all-visits", component: ViewAllVisitsComponent},
// { path: "add-visit-details", component: AddVisitDetailsComponent},


{ path: "alldailyleads", component: AlldailyleadsComponent },
{ path: "view-add-dailyLeads", component: ViewAddDailyleadsComponent },
// { path: "view-all-leads", component: ViewAllLeadsComponent},
// { path: "add-leads-details", component: AllLeadsDetailsComponent},

{ path: "alltid", component: AllTIDComponent}, 
{ path: "add-tids", component: AddTIDComponent},
{ path: "tidgeneration", component: TidgenerationComponent},
// { path: "tid-update-status", component: TidUpdateStatusComponent},
// { path: "tid-update-courier-details", component: TidUpdateCourierDetailsComponent},

{ path: "customerslist", component: AllCustomerListComponent },
{ path: "allcomplaintsmain", component: AllComplaintsMainComponent },
{ path: "add-customer-complaints", component: AddCustomerComplaintsMainComponent},
{ path: "view-customer-complaints-main", component: ViewCustomerComplaintsMainComponent },
// { path: "view-complain-details", component: ViewComplaintDetailsComponent },
  //reports 
  { path: "allinvoices", component: AllInvoicesComponent },
  { path: "alltransactions", component: AllTransactionsComponent },
  { path: "allinteraction", component: AllInteractionsComponent },
  { path: "allcomplaints-Sub", component: AllComplaintsComponent },
  { path: "RmWisereport", component: RMWiseReportComponent },



{ path: "alltechsupport", component: TechSupportComponent },
{ path: "add-ticket", component: AddTicketComponent },
{ path: "view-techsupport", component: ViewTechsupportComponent },
{ path: "newsalert", component: NewsAlertComponent },
{ path: "change-password", component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  isFeesDropdownVisible: boolean = false;
  iscustomerServiceVisible: boolean = false;
  isReportDropdownVisible : boolean = false;
  isacknowDropdownVisible : boolean = false ;
  isinsureinvestDropdownVisible : boolean = false;
  ismyaccountDropdown : boolean= false ;
  toggleFeesDropdown() {
    this.isFeesDropdownVisible = !this.isFeesDropdownVisible;
    
  }

  togglecustomerService() {
    this.iscustomerServiceVisible = !this.iscustomerServiceVisible;
  }

  toggleReportDropdown(){
    this.isReportDropdownVisible = !this.isReportDropdownVisible;
  }
  toggleacknowDropdown(){
   this.isacknowDropdownVisible = !this.isacknowDropdownVisible ;
  }

  toggleinsureinvestDropdown(){
 this.isinsureinvestDropdownVisible = !this.isinsureinvestDropdownVisible;
}

  togglemyaccountDropdown(){
  this.ismyaccountDropdown = !this.ismyaccountDropdown ;
  }
}
function toggleDropdown(event: any) {
  var dropdownContent = event.target.parentElement.nextElementSibling;
  dropdownContent.classList.toggle("show");
}




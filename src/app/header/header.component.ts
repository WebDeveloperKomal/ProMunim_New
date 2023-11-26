import { Component, EventEmitter, Output } from '@angular/core';
import { SidenavtoggleService } from '../Shared/sidenavtoggle.service';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus : boolean = false;
  isLoggedin:boolean | undefined;
  UserFullName!:string;

  constructor(private sharedService: SidenavtoggleService, private securityService: SecurityService, private router:Router){}

  ngOnInit(){
    this.isLoggedin= this.securityService.IsLoggedIn();
    this.securityService.getUserData().subscribe(
      (responce:any)=>{
        // this.UserFullName=`${responce.fistnsame}`;
        console.log(responce.data);
      },
      (error:any)=>{
        console.error(error);        
      }
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
  isFeesDropdownVisible: boolean = false;
  toggleFeesDropdown() {
    this.isFeesDropdownVisible = !this.isFeesDropdownVisible;
  }

  isOpen: boolean = false;
  private sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }



  // showhidesidenav() {
  //   this.sharedService.toggleSidebar();
   
  // }
  sideNavToggle(){
this.menuStatus = !this.menuStatus;
this.sideNavToggled.emit(this.menuStatus)
  }
  
  // toggleSidenav() {
  //   this.toggleSidenavEvent.emit();
  // }

  // closeSidebar() {
  //   this.isOpen = false;
  // }

  toggleSideNav() {
    this.sharedService.toggleSideNav();
  }
}

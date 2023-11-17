import { Component, EventEmitter, Output } from '@angular/core';
import { SidenavtoggleService } from '../Shared/sidenavtoggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidenavEvent = new EventEmitter<void>()
constructor(private sharedService: SidenavtoggleService){

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
  showhidesidenav() {
    this.sharedService.toggleSidebar();
    // this.isOpen = !this.isOpen;
  }
  
  toggleSidenav() {
    this.toggleSidenavEvent.emit();
  }

  // closeSidebar() {
  //   this.isOpen = false;
  // }
}

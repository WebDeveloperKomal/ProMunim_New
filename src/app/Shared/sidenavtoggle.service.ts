import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavtoggleService {

  constructor() { }
  private sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  isSidebarVisible() {
    return this.sidebarVisible;
  }
}

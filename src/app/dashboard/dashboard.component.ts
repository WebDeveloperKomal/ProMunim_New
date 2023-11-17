import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  activeTab: string = 'tab1';
  activeTab1: string = 'tab5';
  activeTab2: string = 'tab9';
  activeTab3: string = 'tab13';
  activeTab4: string = 'tab17';

  

changeTab(tabId: string) {
  this.activeTab = tabId;
  
}

changeTab1(tabId: string) {
  this.activeTab1 = tabId;
}

changeTab2(tabId: string) {
  this.activeTab2 = tabId;
}

changeTab3(tabId: string) {
  this.activeTab3 = tabId;
}


changeTab4(tabId: string) {
  this.activeTab4 = tabId;
}

// switchTabBasedOnId(id: string) {
//   if (id === '') {
//     this.activeTab = 'tab1';
//     this.activeTab1 = 'tab5';
//     this.activeTab2 = 'tab9';
//     this.activeTab3 = 'tab13';
//   } else if (id === 'tab2') {
//     this.activeTab = 'tab2';
//   }else if (id === 'tab3') {
//     this.activeTab = 'tab3';
//   }
// }
}

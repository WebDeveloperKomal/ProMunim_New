import { Component } from '@angular/core';
import { UserRolePermissionModel } from '../user-role-permission/user-role-permission.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewAddDailyvisitModel } from '../view-add-dailyvisit/view-add-dailyvisit.component.model';
import { SecurityService } from '../security.service';


// import {
//   Component,
//   ChangeDetectionStrategy,
//   ViewChild,
//   TemplateRef
// } from '@angular/core';
// import {
//   startOfDay,
//   endOfDay,
//   subDays,
//   addDays,
//   endOfMonth,
//   isSameDay,
//   isSameMonth,
//   addHours
// } from 'date-fns';
// import { Subject } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import {
//   CalendarEvent,
//   CalendarEventAction,
//   CalendarEventTimesChangedEvent,
//   CalendarView
// } from 'angular-calendar';

// const colors: any = {
//   red: {
//     primary: '#ad2121',
//     secondary: '#FAE3E3'
//   },
//   blue: {
//     primary: '#1e90ff',
//     secondary: '#D1E8FF'
//   },
//   yellow: {
//     primary: '#e3bc08',
//     secondary: '#FDF1BA'
//   }
// };




@Component({
  selector: 'app-task-appointment-demo',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-appointment-demo.component.html',
  styleUrls: ['./task-appointment-demo.component.css']
})
export class TaskAppointmentDemoComponent {
  credentials={email:'',password:''};

  constructor(private service:SecurityService){}

  ngOnInit(){
  }

  onSubmit(){
    this.service.Login(this.credentials).subscribe(
      (response :any) => 
      {
        localStorage.setItem('token',response.jwtToken);
        window.location.href="/set";
      },
      error => {console.error(error);}
    )
  }
}

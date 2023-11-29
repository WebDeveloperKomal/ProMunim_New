import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  complianceForm !: FormGroup;
  dataarray: any[] = [];
  passwords= {oldPass: '', password:''};
  confirmPassword:any | undefined;

  constructor(private formBuilder: FormBuilder, private service:SecurityService, private router:Router) {
    this.complianceForm = this.formBuilder.group({
      complianceName: ['', Validators.required], // Add validation if needed
      taxLink: ['', Validators.required], // Add validation if needed
      complianceDueDate: ['', Validators.required] // Add validation if needed
    });
  }


  onSubmit(){
    this.service.updateUserPassword(this.passwords).subscribe(
      (res:any)=>{
        console.log(res.data);
        localStorage.removeItem('token');
        this.router.navigate(['']);
        alert("Password Updated");
      },
      (err:any)=>{console.error(err);}
    )
  }


}

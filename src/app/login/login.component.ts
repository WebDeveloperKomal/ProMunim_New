import { Component } from '@angular/core';
import { SecurityService } from '../security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword : boolean = false;
  credentials={email:'',password:''};

  constructor(private service:SecurityService){}

  ngOnInit(){
  }
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword
  }
  onSubmit(){
    this.service.Login(this.credentials).subscribe(
      (response :any) => 
      {
        localStorage.setItem('token',response.jwtToken);
        window.location.href="set/"; 
      },
      error => {console.error(error);
        Swal.fire('Please Enter Valid Details!');
      }
    )
  }
}





















// showPassword: boolean = false;
// credentials={email:'',password:''};

// constructor(private formBuilder: FormBuilder,private service:SecurityService) {


// }

// togglePasswordVisibility() {
// this.showPassword = !this.showPassword;
// }

// ngOnInit(){
// }

// onSubmit(){
// this.service.Login(this.credentials).subscribe(
// (response :any) =>
// {
// localStorage.setItem('token',response.jwtToken);
// window.location.href="/set/";
// },
// error => {console.error(error);
// // alert('Please Enter Valid Credential')
// // Swal.fire('Please Enter Valid Credential')
// }
// )
// }
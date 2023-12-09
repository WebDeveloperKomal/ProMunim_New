import { Component } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchModel } from '../branch/branch.component.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent {
  addbranch !: FormGroup;
  dataarray: any[] = [];
  branch:BranchModel = new BranchModel(); 

  constructor(private formBuilder: FormBuilder, private apiService:ApiService) {
    this.addbranch = this.formBuilder.group({
      branchname: ['', Validators.required], // Add validation if needed
      branchclass: ['', Validators.required], // Add validation if needed
      branchcode: ['', Validators.required],
      branchcity: ['', Validators.required],
      brancharea: ['', Validators.required],
      address: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]   
    });
  }

  onSubmit(){
    this.apiService.addBranch(this.branch).subscribe(
      (response:any)=>{
        console.log(response.data);
      },
      (error:any)=>{
        console.error(error);
        
      }
    )
  }

}

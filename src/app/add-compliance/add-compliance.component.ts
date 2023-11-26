import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplianceModel } from '../compliance/compliance.component.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-compliance',
  templateUrl: './add-compliance.component.html',
  styleUrls: ['./add-compliance.component.css']
})
export class AddComplianceComponent {
  complianceForm !: FormGroup;
  dataarray: any;

  compliance: ComplianceModel = new ComplianceModel;
    

  constructor(private formBuilder: FormBuilder,private apiService: ApiService) {

    this.complianceForm = this.formBuilder.group({
      complianceName: ['', Validators.required], // Add validation if needed
      taxLink: ['', Validators.required], // Add validation if needed
      complianceDueDate: ['', Validators.required] // Add validation if needed
    });
  }



  onSubmit(){
    this.apiService.addCompliance(this.compliance).subscribe(
      (response:any)=>{
        console.log(response.data);
      },
      (error:any)=>{
        console.error(error);        
      }
    )
}
}

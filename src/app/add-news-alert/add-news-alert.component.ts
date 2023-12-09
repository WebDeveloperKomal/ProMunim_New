import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsalertModel } from '../news-alert/news-alert.component.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-news-alert',
  templateUrl: './add-news-alert.component.html',
  styleUrls: ['./add-news-alert.component.css']
})
export class AddNewsAlertComponent {
  AddNewsalertForm !: FormGroup;
  dataarray: any[] = [];

  NewsAlert: NewsalertModel = new NewsalertModel();

  constructor(private formBuilder: FormBuilder ,private apiService: ApiService) {

    this.AddNewsalertForm = this.formBuilder.group({
      date: ['', Validators.required], // Add validation if needed
      subject: ['', Validators.required], // Add validation if needed
      description: ['', Validators.required] // Add validation if needed
    });
  }

  onSubmit(){
    console.log('data ::: ',this.NewsAlert);
    this.apiService.addNewsAlert(this.NewsAlert).subscribe(
      (response:any)=>{
        console.log(response.data);
      },
      (error:any)=>{
        console.error(error);        
      }
    )
}

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/interfaces/iuser';
import { DynamicDataService } from 'src/app/services/dynamic-data.service';

@Component({
  selector: 'app-add-form-reactive',
  templateUrl: './add-form-reactive.component.html',
  styleUrls: ['./add-form-reactive.component.css']
})
export class AddFormReactiveComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private dynamicData: DynamicDataService) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      university: new FormControl(''),
    });
  }

  ngOnInit(): void {



  }

  Submit() {
    console.log(this.profileForm.value);
    this.dynamicData.addNewUser(this.profileForm.value);
  }



}

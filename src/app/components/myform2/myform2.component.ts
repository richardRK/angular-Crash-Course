import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myform2',
  templateUrl: './myform2.component.html',
  styleUrls: ['./myform2.component.scss']
})
export class Myform2Component implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      // lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(8)]],
      // language: [''],
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      // Perform actions like API requests using formData
      console.log(formData);
    }
  }
  
}

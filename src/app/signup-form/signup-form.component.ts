import { Component, OnInit } from '@angular/core';
import { FormData } from '../data/form-data'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  OriginalUserData: FormData = {
    firstname: 'Punam',
    lastname: 'Shelke',
    promotion: true,
    email: 'punam@gmail.com',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: 'male'
  }
  userData: FormData = { ...this.OriginalUserData };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {

    }
  }
  goBack(): void {
    this.router.navigate(['/welcome']);
  }

}

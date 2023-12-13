import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  uname: string = '';
  password: string = '';
constructor(private router:Router, private fb: FormBuilder, private auth:AuthService, private _coreService:CoreService){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      uname: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value)
        .subscribe(
          (response: any) => {
            if (response.success) {
              console.log('Login successful');
              this._coreService.openSnackBar("Login Successfull!")
              this.router.navigate(['/side-nav']);
            } else {
              this._coreService.openSnackBar("Login failed. Invalid username or password.");
              console.log('Login failed. Invalid username or password.');
            }
          },
          (error) => {
            this._coreService.openSnackBar(error.message);
            console.error('Error during login:', error);
          }
        );
    }
  }

// onLogin() {
//   if (this.loginForm.valid) {
//     this.auth.login(this.loginForm.value).subscribe({
//       next: (res) => {

//         //this._coreService.openSnackBar("Login Successfull!")
//         console.log("Login Successfull!")
//         this.router.navigate(['side-nav'])

//         this.loginForm.reset();        
//       },
//       error: (err) => {
//         //this._coreService.openSnackBar(err.error.message);
//       }
//     })
//   } else {
//     //ValidateForm.validateAllFormFields(this.loginForm);
//   }
// }

}

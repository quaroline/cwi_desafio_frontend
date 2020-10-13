import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService) {

      if (this.authService.currentUserValue) {
        this.router.navigate(['/']);
      }
  }

  userForm: FormGroup;
  user: User = new User();

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  login() {
    if (!this.userForm.dirty || !this.userForm.valid) {
      this.toastr.error("Please, inform both fields.");
      
      return;
    }

    this.authService.login(this.user.username, this.user.password).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      fail => {
        this.toastr.error(fail);
      });
  }
}
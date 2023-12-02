import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email = '';
  password = '';
  loginError = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }




  login(): void {
    const isValidUser = this.authService.login(this.email, this.password);

    if (isValidUser) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
}

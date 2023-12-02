import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'authentication_token';
  private readonly usernameKey = 'indatacore';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {

    const isValidUser = email === 'indatacore@example.com' && password === 'indatacore';

    if (isValidUser) {
      localStorage.setItem('isLoggedIn', 'true');
    }
    return isValidUser
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true' ;
  }

  getUsername(): string | null {
    return localStorage.getItem(this.usernameKey);
  }
}

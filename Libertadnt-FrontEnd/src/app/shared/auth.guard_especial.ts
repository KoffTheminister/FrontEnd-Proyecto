import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardEspecial implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const token = sessionStorage.getItem('token'); // Or get it from a service

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const isValid = await this.authService.verifyToken(token)
    console.log(isValid)
    return isValid;
  }
}

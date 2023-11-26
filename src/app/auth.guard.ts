import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {

  constructor(private service:SecurityService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(this.service.IsLoggedIn())
      {
        return true;
      }
      else
      {
        this.router.navigate([''])
        return false;
      } 
  }
};
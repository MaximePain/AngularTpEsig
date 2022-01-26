import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TpguardGuard implements CanActivate {

  lastExoConsulted = 0;

  constructor(private _router: Router) {
    let lastExoConsulted = localStorage.getItem('lastExoConsulted') || '0';
    this.lastExoConsulted = parseInt(lastExoConsulted);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url = route.url[0].path;
      let exoConsult = 0;
      let ret = false;
      switch(url){
        case 'exo1':
          exoConsult = 1;
        break;
        case 'exo2':
          exoConsult = 2;
          break;
        case 'exo3':
          exoConsult = 3;
          break;
        case 'exo4':
          exoConsult = 3;
          break;
      }

    if(exoConsult <= this.lastExoConsulted + 1){
      ret = true;
      localStorage.setItem('lastExoConsulted', '' + exoConsult);
    }
    else{
      ret = false;
      this._router.navigate(['']);
    }
    return ret;
  }
  
}

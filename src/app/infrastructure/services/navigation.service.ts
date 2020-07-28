import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigations = {
    "step-one": {previous: ''},
    "step-two": {previous: 'step-one'},
    "step-three": {previous: 'step-two'},
    "success": {previous: 'step-one'},
  }

  redirecTo(url){
    this.router.navigate([url])
  }

}

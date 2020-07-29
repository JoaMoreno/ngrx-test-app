import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/infrastructure/services/navigation.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private _navigation: NavigationService) { }

  ngOnInit(): void {
  }

  otherPayment(){
    this._navigation.redirecTo('/step-one')
  }

}

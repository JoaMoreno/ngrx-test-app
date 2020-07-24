import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './containers/payment/payment.component';
import { CardComponent } from './presentationals/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PaymentComponent, CardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[PaymentComponent, CardComponent]
})
export class DemoModule { }

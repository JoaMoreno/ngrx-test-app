import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentServicesRoutingModule } from './payment-services-routing.module';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { ServicesToPayComponent } from './services-to-pay/services-to-pay.component';
import { ResumeComponent } from './resume/resume.component';
import { SuccessComponent } from './success/success.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PaymentMethodsComponent, ServicesToPayComponent, ResumeComponent, SuccessComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentServicesRoutingModule
  ]
})
export class PaymentServicesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesToPayComponent } from './services-to-pay/services-to-pay.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { ResumeComponent } from './resume/resume.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: '', redirectTo: '/step-one', pathMatch: 'full'},
  {path: 'step-one', component: ServicesToPayComponent},
  {path: 'step-two', component: PaymentMethodsComponent},
  {path: 'step-three', component: ResumeComponent},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentServicesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ViewBoxComponent } from './view-box/view-box.component';



@NgModule({
  declarations: [CheckboxComponent, ViewBoxComponent],
  imports: [
    CommonModule
  ],
  exports:[CheckboxComponent, ViewBoxComponent]
})
export class SharedModule { }

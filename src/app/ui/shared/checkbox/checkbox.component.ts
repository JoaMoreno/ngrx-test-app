import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  
  @Input() id;
  @Output() emitSelect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public select(value): void {
    this.emitSelect.emit([this.id,value.target.checked]);
  }
}

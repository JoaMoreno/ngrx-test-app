import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.scss']
})
export class ViewBoxComponent implements OnInit {

  @Input() id

  constructor() { }

  ngOnInit(): void {
  }

}

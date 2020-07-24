import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dataCard;
  @Output() emitButton: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitAction(event){
    this.emitButton.emit(event);
  }

}

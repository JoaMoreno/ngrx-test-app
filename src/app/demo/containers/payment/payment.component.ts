import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Output() emitStatus = new EventEmitter();

  user: User = {
    username: "Victor Robles",
    creditCards:[{
      name:"Naranja",
      headline: "Victor Robles",
      number:123123123,
      expiration:"12/12/2020"
    },
    {
      name:"Visa",
      headline: "Victor Robles",
      number:321321321,
      expiration:"10/12/2020"
    },
    ],
    debts:[
      {
        name: "Netflix",
        description: {
          referenceNumber: 3541512321,
          billingMonth: "13/06/2020",
          mail:"victorroblex@udemy.com"
        },
        amount: 764
      },
      {
        name: "Spotify",
        description: {
          referenceNumber: 4152634152,
          billingMonth: "13/06/2020",
          mail:"victorroblex@udemy.com"
        },
        amount: 345
      },
      {
        name: "MercadoLibre",
        description: {
          referenceNumber: 4758695241,
          billingMonth: "13/06/2020",
          mail:"victorroblex@udemy.com"
        },
        amount: 985
      }
    ]
  }

  dataCard={
    title:"",
    button:"",
    buttonAction:"",
    buttonBackShow: false,
    buttonBackAction:"",
    current: '[step-1]'
  };

  repeticiones=[{name:"hola"},{name:"hola"},{name:"hola"}]

  constructor() { }

  ngOnInit(): void {
    this.setCard(`Hello ${this.user.username}!`,'[step-1]', 'Next','[step-2]');
    this.setCardButtonBack(false)
  }

  setCard(title:string,current, buttonText:string, buttonAction){
    this.dataCard.title = title;
    this.dataCard.current = current;
    this.dataCard.button = buttonText;
    this.dataCard.buttonAction = buttonAction;
  }

  setCardButtonBack(buttonBackShow: boolean,buttonBackAction?){
    this.dataCard.buttonBackShow = buttonBackShow;
    this.dataCard.buttonBackAction = buttonBackAction;
  }

  msg(event){
    console.log("[Container]"+event);
  }

  debtsToPay=[]


  changeStateCard(event):void{
    this.msg(event)
    switch (event) {
      case '[step-1]':
        this.setCard(`Hello ${this.user.username}!`,'[step-1]', 'Next','[step-2]');
        this.setCardButtonBack(false)
        break;
      case '[step-2]':
        this.setCard('Select a payment method','[step-2]', 'Next','[step-3]');
        this.setCardButtonBack(true,'[step-1]')
        break;
      case '[step-3]':
        this.setCard('Summary','[step-3]', 'Pay!','[pay]');
        this.setCardButtonBack(true,'[step-2]')
        break;
      default:
        break;
    }
  }

  emitSelect2(event){
    this.emitStatus.emit(event)
  }

}

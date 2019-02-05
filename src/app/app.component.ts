import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paymentTypes = [
    { name: 'Credit Card', value: 'card' },
    { name: 'Bank Account', value: 'bank' }
  ];
  paymentType = 'card';

  handlePaymentTypesChange(value) {
    this.paymentType = value;
  }
}

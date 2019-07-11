import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChargeRequest } from '../chargeRequest.modal';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';
// import { createDecipher } from 'crypto';

@Component({
  selector: 'app-stripe-example',
  templateUrl: './stripe-example.component.html',
  styleUrls: ['./stripe-example.component.css']
})
export class StripeExampleComponent implements OnInit {
  [x: string]: any;
  chargeRequest: any;
  paymentService: any;
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  chargeCreditCard() {
    console.log("hhiiiii");
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    },
      (status:
        number, response: any) => {

        if (status === 200) {

          let token = response.id;
          this.chargeCard(token);
        }
        else {
          console.log(response.error.message);
        }
      });
  }

}


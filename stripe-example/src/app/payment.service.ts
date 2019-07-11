import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentDetails } from './paymentDetails.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  // getchargeCard(token:string){
  //   const requestHeaders = new HttpHeaders({'Authorization': token});
  //   return this.http.get<any>(token);
  // }

  chargeCard(token: string) {

    const headers = new Headers({'token': "token"});

    this.http.post('http://localhost:8080/payment/charge', {})
        .subscribe(resp => {
          console.log(resp);
        })
    }

  // chargeCard(token: string) {

  //   const headers = new Headers ({ 'token': "token"});
  //   this.http.post('http://localhost:8099/api/v1/charge', {}) //Sending data to backend
  //     .subscribe(resp => {
  //       console.log(resp);
  //     });

      // this.http.post('http://localhost:8099/api/v1/paymentDetails', {})
      // .subscribe(resp => {
      //   console.log(resp);
      // });
  }






import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RazorpayDTO } from '../models/razorpayDTO.model';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl: any = "http://localhost:8080/payment/"

  constructor(private http:HttpClient) { }

  createOrder(amount:number): Observable<String> {
    let params = new HttpParams().append('amount', amount.toString());
    return this.http.get<String>(`${this.baseUrl}order_id`, { params: params });
  }

  paymentSuccess(razorpayDTO:RazorpayDTO): Observable<Ticket> {
    //let params = new HttpParams().append('razorpayDTO', razorpayDTO.toString());
    console.log(razorpayDTO);
    return this.http.post<Ticket>(`${this.baseUrl}success`, {
      "razorpayOrderId": razorpayDTO.razorpay_order_id,
      "razorpayPaymentId": razorpayDTO.razorpay_payment_id,
      "razorpaySignature": razorpayDTO.razorpay_signature
    });
    
  }
}

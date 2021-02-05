import { RazorpayDTO } from "./app/models/razorpayDTO.model";
import './assets/checkout.js';
declare const Razorpay: any;

export class RazorpayObject {

    public Razorpay() {
        
    }

    initiatePayment(order: any ,amount:number , onPaymentSuccess:(razorpayDTO:RazorpayDTO) => void, onPaymentFailure:() => void ) {
        console.log(amount)
          let options = {
            "key": "rzp_test_l5ZltcixJREBlt", // Enter the Key ID generated from the Dashboard
            "amount": amount * 100 , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "MTBS Ltd",
            "description": "Test Transaction",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": (razorpayDTO:RazorpayDTO) => {
              onPaymentSuccess(razorpayDTO);
            },
            "theme": {
              "color": "#1F1F1F",
            },
            "modal": {
              "confirm_close": true,
              "ondismiss": () => {
                console.log("Dismissed");
                onPaymentFailure();
              },
            },
            "timeout": 600
          };
          let rzp1 = new Razorpay(options);
          rzp1.on('payment.failed', (response:any) => {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
            console.log("Failed");
            onPaymentFailure();
          });
          rzp1.open();
      }
    
}
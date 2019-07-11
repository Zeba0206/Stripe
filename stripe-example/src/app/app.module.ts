import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StripeExampleComponent } from './stripe-example/stripe-example.component';
import { HttpClientModule } from '@angular/common/http';
// import {HttpHeaders} from '@angular/common/http';
import { PaymentService } from './payment.service';
// import { ModalComponent } from './modal/modal.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    StripeExampleComponent
    // ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpHeaders
    // NgbModule

  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

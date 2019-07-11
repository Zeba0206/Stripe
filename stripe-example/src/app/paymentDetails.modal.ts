export class PaymentDetails {

  paymentId: string;
  bookingId: number;
  status: boolean;
  name: string;
  totalprice: number;
  spaceId: number;
  spaceName: string;
  categoryId: number;
  categoryName: string;
  price: number;


  PaymentDetails(paymentId: string, bookingId: number, status: boolean, name: string, totalprice: number, spaceId: number, spaceName: string, categoryId: number, categoryName: string, price: number) {

    this.paymentId = paymentId;
    this.bookingId = bookingId;
    this.status = status;
    this.name = name;
    this.totalprice = totalprice;
    this.spaceId = spaceId;
    this.spaceName = spaceName;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }
}

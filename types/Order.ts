export interface Order {
  walletAddress: string;
  country: string;
  orderStatus: OrderStatus;
  orderId: string;
  shippingInfo: ShippingInfo;
  amountPaid: string;
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  city: string;
  state: string;
  phoneNumber: string;
}

export enum OrderStatus {
  CREATED = "CREATED",
  WAITING_TAX = "WAITING_TAX",
  WAITING_PAYMENT = "WAITING_PAYMENT",
  PAYMENT_RECEIVED = "PAYMENT_RECEIVED",
  SENT_TO_ZINC = "SENT_TO_ZINC",
  RETURNED_TO_ZINC = "RETURNED_TO_ZINC",
  RETURNED = "RETURNED",
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  SHIPPING_ADDRESS_REFUSED = "SHIPPING_ADDRESS_REFUSED",
  PRODUCT_UNAVAILABLE = "PRODUCT_UNAVAILABLE",
  ERROR = "ERROR",
}

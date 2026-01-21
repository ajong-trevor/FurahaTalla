export type UserRole = "farmer" | "buyer" | "admin";

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: UserRole;
  isVerified: boolean;
}

export interface HarvestListing {
  id: string;
  farmerId: string;
  farmerName: string;
  cropType: string;
  expectedQuantity: number; // in kgs or units
  quantityUnit: string;
  expectedHarvestDate: Date;
  location: string;
  minimumAcceptablePrice: number; // per unit
  priceUnit: string;
  status: "available" | "contracted" | "completed";
  createdAt: Date;
}

export type ContractStatus = 
  | "DRAFT"
  | "PENDING_FARMER_SIGNATURE"
  | "ACTIVE"
  | "IN_DISPUTE"
  | "DELIVERED"
  | "COMPLETED"
  | "CANCELLED";

export type PaymentStatus = "PENDING_ADVANCE" | "ADVANCE_PAID" | "PENDING_FINAL" | "FINAL_PAID";
export type DeliveryStatus = "UPCOMING" | "IN_TRANSIT" | "DELIVERED" | "CONFIRMED";

export interface Contract {
  id: string;
  listingId: string;
  farmerId: string;
  buyerId: string;
  cropType: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
  advancePaymentPercentage: number;
  advanceAmount: number;
  deliveryDate: Date;
  contractDraftText: string;
  paymentTermsExplanation: string;
  status: ContractStatus;
  paymentStatus: PaymentStatus;
  deliveryStatus: DeliveryStatus;
  buyerSignature?: {
    timestamp: Date;
    ipAddress: string;
  };
  farmerSignature?: {
    timestamp: Date;
    ipAddress: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

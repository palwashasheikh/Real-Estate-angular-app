export interface MisleadingReportManagement {
  message: string;
  data: Data;
}

export interface Data {
  docs: MisleadingReport[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: any;
}

export interface MisleadingReport {
  user: User;
  property: Property;
  reason: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface User {
  isPhoneVerified: boolean;
  rating: number;
  subscription: Subscription;
  phoneNumber: string;
  email: string;
  fullName: string;
  picture: string;
  dateOfBirth: string;
  isMale: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  agent: Agent;
  role: string;
  isEmailVerified: boolean;
  id: string;
}

export interface Subscription {
  plan: Plan;
  startDate: string;
  endDate: string;
  status: string;
  _id: string;
}

export interface Plan {
  en: string;
  ar: string;
}

export interface Agent {
  companyDetails: CompanyDetails;
  falCertification: FalCertification;
  isFreelanceAgent: boolean;
  _id: string;
}

export interface CompanyDetails {
  commercialRegistrationNumber: number;
  companyName: string;
  commercialRegistrationExpiry: string;
}

export interface FalCertification {
  certificateNumber: number;
  isVerified: boolean;
}

export interface Property {
  title: Title;
  type: Type;
  category: Category;
  usage: Usage;
  description: Description;
  location: Location;
  size: Size;
  prices: Prices;
  agreementNumber: number;
  isFloorPlanAdded: boolean;
  user: string;
  falNumber: number;
  propertyAge: number;
  facade: Facade[];
  propertyInformation: PropertyInformation[];
  propertyDetails: PropertyDetail[];
  publicServices: PublicService[];
  media: any[];
  isFavorite: boolean;
  status: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Title {
  en: string;
  ar: string;
}

export interface Type {
  en: string;
  ar: string;
}

export interface Category {
  en: string;
  ar: string;
}

export interface Usage {
  en: string;
  ar: string;
}

export interface Description {
  en: any;
  ar: any;
}

export interface Location {
  country: string;
  street: string;
  district: string;
  city: string;
  region: string;
  lat: number;
  long: number;
}

export interface Size {
  areaSizeSQM: number;
  surfaceAreaSQM: number;
}

export interface Prices {
  finalPrice: FinalPrice;
  vat: number;
  agentCommission: number;
  totalPropertyPrice: number;
  isCompanySupportVat: boolean;
  biddingPrice: any;
}

export interface FinalPrice {
  price: number;
  pricePerSQM: number;
  _id: string;
}

export interface Facade {
  title: Title2;
  value: Value;
  _id: string;
}

export interface Title2 {
  en: string;
  ar: string;
}

export interface Value {
  en: string;
  ar: string;
}

export interface PropertyInformation {
  title: Title3;
  value: Value2;
  _id: string;
}

export interface Title3 {
  en: string;
  ar: string;
}

export interface Value2 {
  en: string;
  ar: string;
}

export interface PropertyDetail {
  title: Title4;
  value: Value3;
  _id: string;
}

export interface Title4 {
  en: string;
  ar: string;
}

export interface Value3 {
  en: string;
  ar: string;
}

export interface PublicService {
  title: Title5;
  value: Value4;
  _id: string;
}

export interface Title5 {
  en: string;
  ar: string;
}

export interface Value4 {
  en: string;
  ar: string;
}

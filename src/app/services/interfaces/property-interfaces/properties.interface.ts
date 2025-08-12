export interface PropertyManagement {
  message: string;
  data: Data;
}

export interface Data {
  docs: Property[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: number;
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
  user: any;
  falNumber: number;
  propertyAge: number;
  propertyInformation: PropertyInformation[];
  propertyDetails: PropertyDetail[];
  publicServices: PublicService[];
  media: string[];
  isFavorite: boolean;
  status: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  facade: any[];
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
  biddingPrice: any;
  vat: number;
  agentCommission: number;
  totalPropertyPrice: number;
  isCompanySupportVat: boolean;
}

export interface FinalPrice {
  price: number;
  pricePerSQM: number;
  _id: string;
}

export interface PropertyInformation {
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

export interface PropertyDetail {
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

export interface PublicService {
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

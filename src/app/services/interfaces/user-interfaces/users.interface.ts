export interface UserManagement {
  message: string;
  data: Data;
}

export interface Data {
  docs: User[];
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

export interface User {
  role: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  agent?: Agent;
  subscription: Subscription;
  phoneNumber: string;
  email?: string;
  fullName?: string;
  picture: string;
  dateOfBirth?: string;
  isMale: boolean;
  rating: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
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

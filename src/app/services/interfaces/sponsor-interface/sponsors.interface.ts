export interface SponsorManagement {
  message: string;
  data: Data;
}

export interface Data {
  docs: Sponsor[];
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

export interface Sponsor {
  id: string;
  label: string;
  icon: string;
  url: string;
  isDisplayHome: boolean;
  isActive: boolean;
}

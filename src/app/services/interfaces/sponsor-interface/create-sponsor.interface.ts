export interface CreateSponsor {
  message: string;
  data: Sponsor;
}

export interface Sponsor {
  _id: string;
  label: string;
  icon: string;
  isActive: boolean;
}

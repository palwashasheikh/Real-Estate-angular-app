export interface Login {
  message: string;
  data: Admin;
}

export interface Admin {
  email: string;
  role: {
    name: String;
    permission: String;
  };
  phone: string;
  fullName: string;
  picture: string;
  dateOfBirth: string;
  isMale: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  token: string;
}

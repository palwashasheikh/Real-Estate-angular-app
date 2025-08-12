export interface NotificationManagement {
  message: string;
  data: Data;
}

export interface Data {
  docs: Notification[];
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

export interface Notification {
  user: User;
  title: string;
  type: string;
  message: string;
  redirectedTo: any;
  redirectionId: any;
  isReadAlready: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface User {
  level: Level;
  features: Features;
  statistics: Statistics;
  phoneNumber: string;
  role: string;
  fullName?: string;
  picture: string;
  nickName?: string;
  dateOfBirth?: string;
  isMale: boolean;
  updatedAt?: string;
  id: string;
  createdAt?: string;
}

export interface Level {
  isLevelUp: boolean;
  popularity: number;
  history: History[];
}

export interface History {
  _id: string;
  value: string;
  attributes: Attribute[];
  isActive: boolean;
}

export interface Attribute {
  _id: string;
  key: string;
  label: string;
  level: string;
  progress: number;
}

export interface Features {
  inGamePosition: InGamePosition;
  topSpeed: number;
  specialFoot: string;
  weight: number;
  height: number;
  awards: any[];
  videos: any[];
}

export interface InGamePosition {
  shortPosition: string;
  position: string;
}

export interface Statistics {
  shirtNumber: number;
  tournaments: number;
  matches: number;
  goals: number;
  yellowCards: number;
  redCards: number;
  assists: number;
  menOfTheMatch: number;
  saves: number;
  cleanSheets: number;
}

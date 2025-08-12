export interface GetUser {
  message: string;
  data: SingleUser;
}

export interface SingleUser {
  level: Level;
  features: Features;
  statistics: Statistics;
  phoneNumber: string;
  role: string;
  fullName: any;
  picture: string;
  nickName: any;
  dateOfBirth: any;
  isMale: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  teams: any[];
  isActive: Boolean;
}

export interface Level {
  popularity: number;
  isLevelUp: boolean;
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
  points: number;
}

export interface Features {
  inGamePosition: InGamePosition;
  specialFoot: string;
  topSpeed: number;
  height: number;
  weight: number;
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

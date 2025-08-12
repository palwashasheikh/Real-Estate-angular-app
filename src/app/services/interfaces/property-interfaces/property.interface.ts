export interface GetProperty {
  message: string;
  data: SingleProperty;
}
export interface SingleProperty {
  level: Level;
  statistics: Statistics;
  isActive: boolean;
  user: string;
  teamName: string;
  teamBio: string;
  logo: string;
  cover: string;
  city: string;
  awards: any[];
  createdAt: string;
  updatedAt: string;
  id: string;
  players: Player | any;
  matches: any[];
}

export interface Level {
  popularity: number;
  points: number;
}

export interface Statistics {
  matches: Matches;
  tournaments: number;
  goals: number;
  goalsAgainst: number;
  yellowCards: number;
  redCards: number;
  cleanSheets: number;
}

export interface Matches {
  played: number;
  won: number;
  draw: number;
  loss: number;
}

export interface Player {
  level: Level2;
  features: Features;
  statistics: Statistics2;
  isActive: boolean;
  phoneNumber: string;
  role: string;
  fullName: string;
  picture: string;
  nickName: any;
  dateOfBirth: any;
  isMale: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Level2 {
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

export interface Statistics2 {
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

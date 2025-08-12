export interface VideoManagement {
  message: string;
  data: Data;
}

export interface Data {
  docs: Video[];
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

export interface Video {
  thumbnail: string;
  tournament: Tournament;
  player?: Player;
  type: string;
  url: string;
  videoDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Tournament {
  sponsors: Sponsors;
  title: string;
  status: string;
  tournamentType: string;
  thumbnail: string;
  location: string;
  ageGroup: string;
  entryFees: string;
  enrollmentStartsFrom: string;
  enrollmentEndsAt: string;
  startsFrom: string;
  endsAt: string;
  isForMales: boolean;
  isActive: boolean;
  formalities: Formality[];
  awards: Award[];
  committees: Committee[];
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Sponsors {
  platinum: Platinum[];
  gold: Gold[];
  silver: Silver[];
}

export interface Platinum {
  _id: string;
  icon: string;
  type: string;
}

export interface Gold {
  _id: string;
  icon: string;
  type: string;
}

export interface Silver {
  _id: string;
  icon: string;
  type: string;
}

export interface Formality {
  _id: string;
  key: string;
  document: string;
}

export interface Award {
  _id: string;
  label: string;
  icon: string;
  prize: string;
}

export interface Committee {
  _id: string;
  avatar: string;
  name: string;
  bio: string;
  position: string;
}

export interface Player {
  level: Level;
  features: Features;
  statistics: Statistics;
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

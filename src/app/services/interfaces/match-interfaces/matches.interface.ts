export interface MatchManagement {
  message: string;
  data: Data;
}

export interface Data {
  docs: Match[];
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

export interface Match {
  tournament: Tournament;
  teamA: TeamA;
  teamB: TeamB;
  timeline: Timeline[];
  matchDate: string;
  matchLocation: string;
  matchDuration: string;
  matchStartTime: string;
  matchEndTime: string;
  matchStatus: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  isActive: boolean;
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

export interface TeamA {
  team: Team;
  lineUp: any;
  score: number;
  _id: string;
}

export interface Team {
  level: Level;
  statistics: Statistics;
  user: string;
  teamName: string;
  teamBio: string;
  logo: string;
  cover: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  id: string;
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

export interface TeamB {
  team: Team2;
  lineUp: any;
  score: number;
  _id: string;
}

export interface Team2 {
  level: Level2;
  statistics: Statistics2;
  user: string;
  teamName: string;
  teamBio: string;
  logo: string;
  cover: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Level2 {
  popularity: number;
  points: number;
}

export interface Statistics2 {
  matches: Matches2;
  tournaments: number;
  goals: number;
  goalsAgainst: number;
  yellowCards: number;
  redCards: number;
  cleanSheets: number;
}

export interface Matches2 {
  played: number;
  won: number;
  draw: number;
  loss: number;
}

export interface Timeline {
  time: string;
  type: string;
  player: string;
  notes: string;
  _id: string;
}

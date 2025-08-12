export interface GetMatch {
  message: string;
  data: SingleMatch;
}
export interface SingleMatch {
  isActive: boolean;
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
  evaluation: any[];
  id: string;
  players: Player2[];
}

export interface Tournament {
  title: string;
  id: string;
}

export interface TeamA {
  team: Team;
  lineUp: any;
  score: number;
  _id: string;
}

export interface Team {
  level: Level;
  teamName: string;
  logo: string;
  id: string;
  lineUp: any;
}

export interface Level {
  popularity: number;
  points: number;
}

export interface TeamB {
  team: Team2;
  lineUp: any;
  score: number;
  _id: string;
}

export interface Team2 {
  level: Level2;
  teamName: string;
  logo: string;
  id: string;
  lineUp: any;
}

export interface Level2 {
  popularity: number;
  points: number;
}

export interface Timeline {
  time: string;
  type: string;
  player: Player;
  notes: string;
  _id: string;
}

export interface Player {
  fullName: string;
  picture: string;
  nickName: any;
  id: string;
}

export interface Player2 {
  team: string;
  player: Player3;
  requestedBy: string;
  playerJoinRequestAt: string;
  playerJoinRequestAcceptedAt: string;
  playerResignedAt: any;
  isPlayerParticipating: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Player3 {
  level: Level3;
  phoneNumber: string;
  fullName: string;
  picture: string;
  id: string;
}

export interface Level3 {
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

export interface GetTournament {
  message: string;
  data: SingleTournament;
}

export interface SingleTournament {
  sponsors: Sponsors;
  title: string;
  status: string;
  tournamentType: string;
  thumbnail: string;
  location: string;
  locationUrl: string;
  ageGroup: string;
  entryFees: string;
  totalRegisteredPlayers: number;
  totalLineUpPlayers: number;
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
  matches: Match[];
  statistics: Statistics;
  teams: any[];
  fixture: any;
  team: any;
}

export interface Sponsors {
  gold: Gold[];
  silver: Silver[];
  platinum: Platinum[];
}

export interface Gold {
  label: string;
  icon: string;
  url: string;
  _id: string;
}

export interface Silver {
  label: string;
  icon: string;
  url: string;
  _id: string;
}

export interface Platinum {
  label: string;
  icon: string;
  url: string;
  _id: string;
}

export interface Formality {
  key: string;
  document: string;
  _id: string;
}

export interface Award {
  label: string;
  icon: string;
  prize: string;
  _id: string;
}

export interface Committee {
  avatar: string;
  name: string;
  bio: string;
  position: string;
  _id: string;
}

export interface Match {
  teamA: TeamA;
  teamB: TeamB;
  id: string;
}

export interface TeamA {
  team: Team;
  score: number;
}

export interface Team {
  teamName: string;
  logo: string;
  id: string;
}

export interface TeamB {
  team: Team2;
  score: number;
}

export interface Team2 {
  teamName: string;
  logo: string;
  id: string;
}

export interface Statistics {
  goals: any[];
  assists: any[];
  menOfTheMatch: any[];
}

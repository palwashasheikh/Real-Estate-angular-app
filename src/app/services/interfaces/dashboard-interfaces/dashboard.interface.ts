import { User } from "../user-interfaces/users.interface";

export interface Dashboard {
  message: string;
  data: Data;
}

export interface Data {
  users: number;
  requests: number;
  properties: number;
  reports: number;
  stats: Stat[];
  topPlayers: User[];
}

export interface Stat {
  x: string;
  y: number;
}

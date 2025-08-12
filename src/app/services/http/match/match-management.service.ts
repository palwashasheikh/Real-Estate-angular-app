import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
import { MatchManagement } from "../../interfaces/match-interfaces/matches.interface";
import {
  GetMatch,
  SingleMatch,
} from "../../interfaces/match-interfaces/match.interface";
@Injectable({
  providedIn: "root",
})
export class MatchService {
  constructor(private http: HttpService) {}
  create(payload?: any): Observable<any> {
    return this.http
      .postWithAuth(`auth/match-management/`, payload)
      .pipe(map((response) => response as any));
  }
  update(id: string, payload?: any): Observable<any> {
    return this.http
      .put(`auth/match-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
  activity(id: string, payload?: any): Observable<any> {
    return this.http
      .put(`auth/match-management/${id}/activity`, payload)
      .pipe(map((response) => response as any));
  }
  evaluation(id: string, payload?: any): Observable<any> {
    return this.http
      .put(`auth/match-management/${id}/evaluation`, payload)
      .pipe(map((response) => response as any));
  }
  delete(payload?: any): Observable<any> {
    return this.http
      .delete(`auth/match-management/delete`, payload)
      .pipe(map((response) => response as any));
  }
  list(payload?: any): Observable<MatchManagement> {
    return this.http
      .get(`auth/match-management/`, payload)
      .pipe(map((response) => response as MatchManagement));
  }
  get(id: string, payload?: any): Observable<GetMatch> {
    return this.http
      .get(`auth/match-management/${id}`, payload)
      .pipe(map((response) => response as GetMatch));
  }
}

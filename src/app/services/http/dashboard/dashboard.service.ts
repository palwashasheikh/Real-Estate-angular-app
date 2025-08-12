import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
import { Dashboard } from "../../interfaces/dashboard-interfaces/dashboard.interface";
@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpService) {}
  index(payload?: any): Observable<Dashboard> {
    return this.http
      .get(`auth/dashboard/`, payload)
      .pipe(map((response) => response as Dashboard));
  }
}

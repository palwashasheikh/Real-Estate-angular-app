import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
@Injectable({
  providedIn: "root",
})
export class MisleadingReportService {
  constructor(private http: HttpService) {}
  delete(payload?: any): Observable<any> {
    return this.http
      .delete(`auth/misleading-report-management`, payload)
      .pipe(map((response) => response as any));
  }
  list(payload?: any): Observable<any> {
    return this.http
      .get(`auth/misleading-report-management`, payload)
      .pipe(map((response) => response as any));
  }
  get(id: string, payload?: any): Observable<any> {
    return this.http
      .get(`auth/misleading-report-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
}

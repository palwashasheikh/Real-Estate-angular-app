import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private http: HttpService) {}
  create(payload?: any): Observable<any> {
    return this.http
      .postWithAuth(`auth/notification-management/`, payload)
      .pipe(map((response) => response as any));
  }
  update(id: string, payload?: any): Observable<any> {
    return this.http
      .put(`auth/notification-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
  delete(payload?: any): Observable<any> {
    return this.http
      .delete(`auth/notification-management/`, payload)
      .pipe(map((response) => response as any));
  }
  list(payload?: any): Observable<any> {
    return this.http
      .get(`auth/notification-management/`, payload)
      .pipe(map((response) => response as any));
  }
  get(id: string, payload?: any): Observable<any> {
    return this.http
      .get(`auth/notification-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
}

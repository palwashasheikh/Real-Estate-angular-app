import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
import { UserManagement } from "../../interfaces/user-interfaces/users.interface";
import { GetUser } from "../../interfaces/user-interfaces/user.interface";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpService) {}
  create(payload?: any): Observable<any> {
    return this.http
      .postWithAuth(`auth/user-management/`, payload)
      .pipe(map((response) => response as any));
  }
  update(id: string, payload?: any): Observable<any> {
    return this.http
      .put(`auth/user-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
  delete(payload?: any): Observable<any> {
    return this.http
      .delete(`auth/user-management/`, payload)
      .pipe(map((response) => response as any));
  }
  list(payload?: any): Observable<UserManagement> {
    return this.http
      .get(`auth/user-management/`, payload)
      .pipe(map((response) => response as UserManagement));
  }
  get(id: string, payload?: any): Observable<GetUser> {
    return this.http
      .get(`auth/user-management/${id}`, payload)
      .pipe(map((response) => response as GetUser));
  }
}

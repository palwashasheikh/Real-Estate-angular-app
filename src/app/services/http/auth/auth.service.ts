import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Login } from "../../interfaces/auth-interfaces/login.interface";
import { AuthGeneral } from "../../interfaces/auth-interfaces/general.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpService,
    private router: Router,
    private toast: MatSnackBar
  ) {}

  login(payload?: any): void {
    const subscriber = this.http
      .post("login", payload)
      .pipe(map((response) => response as Login));
    subscriber.subscribe((response) => {
      if (response.data) {
        this.http.setToken(response.data);
        if (this.http.verifyToken()) {
          this.router.navigate(["dashboard"]);
        }
      }
    });
  }

  forgotPassword(payload?: any): void {
    const subscriber = this.http
      .post("forgot-password", payload)
      .pipe(map((response) => response as AuthGeneral));
    subscriber.subscribe((response) => {
      response.data
        ? this.router.navigate(["authentication/reset-password"])
        : this.toast.open(response.message, "X", {
            duration: 2000,
            verticalPosition: "top",
          });
    });
  }

  resetPassword(id: string, payload?: any): void {
    const subscriber = this.http
      .patch(`reset-password/${id}`, payload)
      .pipe(map((response) => response as AuthGeneral));
    subscriber.subscribe((response) => {
      if (response.data) {
        this.toast.open(response.message);
        this.router.navigate(["authentication/login"]);
      } else {
        this.toast.open(response.message, "X", {
          duration: 2000,
          verticalPosition: "top",
        });
      }
    });
  }
  changePassword(payload?: any): void {
    const subscriber = this.http
      .patch("auth/change-password", payload)
      .pipe(map((response) => response as AuthGeneral));
    subscriber.subscribe((response) => {
      this.toast.open(response.message, "X", {
        duration: 2000,
        verticalPosition: "top",
      });
    });
  }
  logout(): void {
    const subscriber = this.http
      .delete("auth/logout")
      .pipe(map((response) => response as AuthGeneral));
    subscriber.subscribe((response) => {
      if (response.data) {
        this.http.removeToken();
        if (!this.http.verifyToken()) {
          this.router.navigate(["/authentication/logout"]);
        }
      }
    });
  }
  //ADMIN
  create(payload?: any): Observable<any> {
    return this.http
      .postWithAuth(`auth/admin/`, payload)
      .pipe(map((response) => response as any));
  }
  update(id: string, payload?: any): Observable<any> {
    return this.http
      .patch(`auth/admin/${id}`, payload)
      .pipe(map((response) => response as any));
  }
  delete(id: string, payload?: any): Observable<any> {
    return this.http
      .delete(`auth/admin/${id}`, payload)
      .pipe(map((response) => response as any));
  }
  list(payload?: any): Observable<any> {
    return this.http
      .get(`auth/admin/`, payload)
      .pipe(map((response) => response as any));
  }
  get(id: string, payload?: any): Observable<any> {
    return this.http
      .get(`auth/admin/${id}`, payload)
      .pipe(map((response) => response as any));
  }
  notifications(payload?: any): Observable<any> {
    return this.http
      .get(`auth/admin/notifications/`, payload)
      .pipe(map((response) => response as any));
  }
}

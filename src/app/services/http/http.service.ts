import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Admin } from "../interfaces/auth-interfaces/login.interface";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private errorMessages: any = {
    404: "Request Not Found On Server",
    403: "Access Denied",
  };
  private declare authKey: string;
  private declare baseUrl: string;
  private declare accessToken: String;
  constructor(
    private route: Router,
    private client: HttpClient,
    private toast: MatSnackBar
  ) {
    this.authKey = environment.authKey;
    this.baseUrl = environment.baseUrl;
  }

  get(endPoint: string, params?: any): Observable<any> {
    const data = {
      params,
      headers: { "x-locale": "en", ...this.getAuthHeader() },
    };
    return this.client
      .get(this.baseUrl + endPoint, data)
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }

  post(endPoint: string, payload?: any): Observable<any> {
    return this.client
      .post(this.baseUrl + endPoint, payload, {
        headers: new HttpHeaders({
          "content-type": "application/json; charset=utf-8",
          "x-locale": "en",
        }),
      })
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }

  postWithAuth(endPoint: string, payload?: any): Observable<any> {
    return this.client
      .post(this.baseUrl + endPoint, payload, {
        headers: { "x-locale": "en", ...this.getAuthHeader() },
      })
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }

  put(endPoint: string, payload?: any): Observable<any> {
    return this.client
      .put(this.baseUrl + endPoint, payload, {
        headers: { "x-locale": "en", ...this.getAuthHeader() },
      })
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }

  patch(endPoint: string, payload?: any): Observable<any> {
    return this.client
      .patch(this.baseUrl + endPoint, payload, {
        headers: { "x-locale": "en", ...this.getAuthHeader() },
      })
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }

  delete(endPoint: string, params?: any): Observable<any> {
    const data = {
      body: params,
      params,
      headers: { "x-locale": "en", ...this.getAuthHeader() },
    };
    return this.client
      .delete(this.baseUrl + endPoint, data)
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }

  verifyToken(): boolean {
    const token = localStorage.getItem(this.authKey);
    if (!token) {
      return false;
    }
    const item: Admin = JSON.parse(atob(token));
    if (!item.id) {
      localStorage.removeItem(this.authKey);
      return false;
    }
    return true;
  }

  getAdmin(): Admin | null {
    const token = localStorage.getItem(this.authKey);
    if (!token) {
      return null;
    }
    const item: Admin = JSON.parse(atob(token));
    return item;
  }

  setToken(token: any): void {
    this.accessToken = token.token;
    localStorage.setItem(this.authKey, btoa(JSON.stringify(token)));
  }

  removeToken(): boolean {
    localStorage.clear();
    return true;
  }
  private errorHandler(response: any) {
    if (response.status === 401) {
      this.removeToken();
      this.route.navigate(["auth"]);
    }
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message: string = error[key];
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    return throwError(() => {
      if (message === "<") {
        const messageError: string = this.errorMessages[response.status];
        message = messageError ? messageError : "ERROR";
      }
      this.toast.open(`${response.status}: ${message}`, "X", {
        duration: 2000,
        verticalPosition: "top",
      });
      return error;
    });
  }

  private getAuthHeader(): { [header: string]: string | string[] } {
    const auth = localStorage.getItem(this.authKey) ?? null;
    if (auth) {
      const token: Admin = JSON.parse(atob(auth));
      return {
        "x-access-token": `${token.token ?? this.accessToken}`,
      };
    }
    return {};
  }
}

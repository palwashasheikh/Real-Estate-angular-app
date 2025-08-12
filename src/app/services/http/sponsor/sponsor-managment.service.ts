import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
import { SponsorManagement } from "../../interfaces/sponsor-interface/sponsors.interface";
import { CreateSponsor } from "../../interfaces/sponsor-interface/create-sponsor.interface";
import { UpdateModel } from "../../interfaces/general-interfaces/update.interface";
@Injectable({
  providedIn: "root",
})
export class SponsorService {
  constructor(private http: HttpService) {}
  create(payload?: any): Observable<CreateSponsor> {
    return this.http
      .postWithAuth(`auth/sponsor-management/`, payload)
      .pipe(map((response) => response as CreateSponsor));
  }
  update(id: string, payload?: any): Observable<any> {
    return this.http
      .put(`auth/sponsor-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
  delete(payload?: any): Observable<UpdateModel> {
    return this.http
      .delete(`auth/sponsor-management`, payload)
      .pipe(map((response) => response as UpdateModel));
  }
  list(payload?: any): Observable<SponsorManagement> {
    return this.http
      .get(`auth/sponsor-management/`, payload)
      .pipe(map((response) => response as SponsorManagement));
  }
  get(id: string, payload?: any): Observable<any> {
    return this.http
      .get(`auth/sponsor-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
}

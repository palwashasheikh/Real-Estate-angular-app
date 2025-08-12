import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
import { UpdateModel } from "../../interfaces/general-interfaces/update.interface";
import { PropertyManagement } from "../../interfaces/property-interfaces/properties.interface";
import { GetProperty } from "../../interfaces/property-interfaces/property.interface";
@Injectable({
  providedIn: "root",
})
export class PropertyService {
  constructor(private http: HttpService) {}
  create(payload?: any): Observable<any> {
    return this.http
      .postWithAuth(`auth/property-management/`, payload)
      .pipe(map((response) => response as any));
  }
  update(id: string, payload?: any): Observable<UpdateModel> {
    return this.http
      .put(`auth/property-management/${id}`, payload)
      .pipe(map((response) => response as UpdateModel));
  }
  updateStatus(id: string, payload?: any): Observable<UpdateModel> {
    return this.http
      .patch(`auth/property-management/status/${id}`, payload)
      .pipe(map((response) => response as UpdateModel));
  }
  delete(payload?: any): Observable<UpdateModel> {
    return this.http
      .delete(`auth/property-management`, payload)
      .pipe(map((response) => response as UpdateModel));
  }
  list(payload?: any): Observable<PropertyManagement> {
    return this.http
      .get(`auth/property-management/`, payload)
      .pipe(map((response) => response as PropertyManagement));
  }
  get(id: string, payload?: any): Observable<GetProperty> {
    return this.http
      .get(`auth/property-management/${id}`, payload)
      .pipe(map((response) => response as GetProperty));
  }
}

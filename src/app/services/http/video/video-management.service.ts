import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpService } from "../http.service";
import { VideoManagement } from "../../interfaces/video-interfaces/videos.interface";
@Injectable({
  providedIn: "root",
})
export class VideoService {
  constructor(private http: HttpService) {}
  create(payload?: any): Observable<any> {
    return this.http
      .postWithAuth(`auth/video-management/`, payload)
      .pipe(map((response) => response as any));
  }
  update(id: string, payload?: any): Observable<any> {
    return this.http
      .put(`auth/video-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
  delete(payload?: any): Observable<any> {
    return this.http
      .delete(`auth/video-management`, payload)
      .pipe(map((response) => response as any));
  }
  list(payload?: any): Observable<VideoManagement> {
    return this.http
      .get(`auth/video-management/`, payload)
      .pipe(map((response) => response as VideoManagement));
  }
  get(id: string, payload?: any): Observable<any> {
    return this.http
      .get(`auth/video-management/${id}`, payload)
      .pipe(map((response) => response as any));
  }
}

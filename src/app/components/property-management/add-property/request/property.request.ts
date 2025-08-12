import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { PropertyService } from "src/app/services/http/property/property-management.service";

@Injectable({
  providedIn: "root",
})
export class PropertyRequest {
  constructor(
    private formBuilder: FormBuilder,
    private toast: MatSnackBar,
    private propertyService: PropertyService,
    private route: Router
  ) {}
  init(team?: any) {
    return this.formBuilder.group({
      teamName: [team?.teamName || "", [Validators.required]],
      teamBio: [team?.teamBio || "", [Validators.required]],
      user: [team?.user || "", [Validators.required]],
      city: [team?.city || "", [Validators.required]],
      players: [
        team?.players.map((item: any) => item?.id) || "",
        [Validators.required],
      ],
      logo: ["", team?.logo ? [] : [Validators.required]],
      cover: ["", team?.cover ? [] : [Validators.required]],
      isActive: [team?.isActive.toString()],
      statistics: this.formBuilder.group({
        matches: this.formBuilder.group({
          played: [team?.statistics?.matches?.played || 0],
          won: [team?.statistics?.matches?.won || 0],
          draw: [team?.statistics?.matches?.draw || 0],
          loss: [team?.statistics?.matches?.loss || 0],
        }),
        tournaments: [team?.statistics?.tournaments || 0],
        goals: [team?.statistics?.goals || 0],
        goalsAgainst: [team?.statistics?.goalsAgainst || 0],
        yellowCards: [team?.statistics?.yellowCards || 0],
        redCards: [team?.statistics?.redCards || 0],
        cleanSheets: [team?.statistics?.cleanSheets || 0],
      }),
    });
  }
  deleteProperty(event: any, ids: string[], activate: boolean = false) {
    this.propertyService.delete({ ids, activate }).subscribe((res) => {
      this.toast.open(res.message, "X", {
        duration: 2000,
        verticalPosition: "top",
      });
      event.emit(true);
    });
  }
  updatePropertyStatus(event: any, id: string, status: string) {
    this.propertyService.updateStatus(id, { status }).subscribe((res) => {
      console.log(res);
      this.toast.open(res.message, "X", {
        duration: 2000,
        verticalPosition: "top",
      });
      //event.emit(true);
    });
  }
  getProperty(id: string) {
    return this.propertyService.get(id);
  }
  submit(form: FormGroup, team: any) {
    if (form.valid) {
      const payload = new FormData();
      payload.append("teamName", form.get("teamName")?.value);
      payload.append("teamBio", form.get("teamBio")?.value);
      payload.append("user", form.get("user")?.value);
      payload.append("city", form.get("city")?.value);
      payload.append("logo", form.get("logo")?.value);
      payload.append("cover", form.get("cover")?.value);
      form.get("players")?.value.forEach((item: any) => {
        payload.append("players[]", item);
      });
      const stats = form.get("statistics")?.value;
      payload.append("statistics['matches']['played']", stats.matches.player);
      payload.append("statistics['matches']['won']", stats.matches.won);
      payload.append("statistics['matches']['loss']", stats.matches.loss);
      payload.append("statistics['matches']['draw']", stats.matches.draw);
      payload.append("statistics['tournaments']", stats.tournaments);
      payload.append("statistics['goals']", stats.goals);
      payload.append("statistics['goalsAgainst']", stats.goalsAgainst);
      payload.append("statistics['redCards']", stats.redCards);
      payload.append("statistics['yellowCards']", stats.yellowCards);
      payload.append("statistics['cleanSheets']", stats.cleanSheets);
      payload.append("isActive", form.get("isActive")?.value);
      let operation = null;
      if (!team) {
        operation = this.propertyService.create(payload);
      } else {
        operation = this.propertyService.update(team.id, payload);
      }
      operation.subscribe((res) => {
        if (res.data) {
          this.toast.open(res.message, "X", {
            duration: 2000,
            verticalPosition: "top",
          });
          this.route.navigate(["/team-management"]);
        }
      });
    } else {
      form.markAllAsTouched();
      this.toast.open("Incomplete Submission", "X", {
        duration: 2000,
        verticalPosition: "top",
      });
    }
  }
}

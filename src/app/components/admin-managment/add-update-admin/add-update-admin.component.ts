import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AdminRequest } from "./request/admin.request";
import { MatchService } from "src/app/services/http/match/match-management.service";
import { MatchManagement } from "src/app/services/interfaces/match-interfaces/matches.interface";

@Component({
  selector: "app-add-update-admin",
  templateUrl: "./add-update-admin.component.html",
  styleUrls: ["./add-update-admin.component.scss"],
})
export class AddUpdateAdminComponent {
  declare adminForm: any;
  declare matches: MatchManagement;
  constructor(
    public dialogRef: MatDialogRef<AddUpdateAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminRequest: AdminRequest,
    private matchService: MatchService
  ) {
    this.adminForm = this.adminRequest.init(this.data);
    if (this?.data?.role?.name == "coordinator") {
      this.getMatches();
    }
  }
  close() {
    this.dialogRef.close(true);
  }
  getRole(role: any) {
    if (role == "coordinator") {
      this.getMatches();
    }
  }
  getMatches(page: number = 1, searchTxt?: string): void {
    let payload: any = { limit: 100, page: page };
    if (searchTxt) {
      payload = { ...payload, searchTxt: searchTxt };
    }
    this.matchService.list(payload).subscribe((res) => {
      this.matches = res;
    });
  }
  submit() {
    this.adminRequest.submit(this.adminForm, this.data);
  }
}

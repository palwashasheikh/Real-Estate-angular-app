import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ChangePasswordRequest } from "./request/change-password.request";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent {
  declare changePasswordForm: any;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private changePasswordRequest: ChangePasswordRequest
  ) {
    this.changePasswordForm = this.changePasswordRequest.init();
  }
  close() {
    this.dialogRef.close(true);
  }

  submit() {
    this.changePasswordRequest.submit(this.changePasswordForm,this.dialogRef);
  }
}

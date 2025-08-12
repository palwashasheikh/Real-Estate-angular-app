import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "src/app/services/http/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminRequest {
  constructor(
    private formBuilder: FormBuilder,
    private toast: MatSnackBar,
    private adminService: AuthService,
    private matDialog: MatDialog
  ) {}

  init(admin?: any) {
    return this.formBuilder.group({
      fullName: [admin?.fullName || "", [Validators.required]],
      email: [admin?.email, [Validators.required]],
      role: [admin?.role?.name || "", [Validators.required]],
      permission: [admin?.role?.permission || ""],
      password: [Date.now().toString(), [Validators.required]],
    });
  }
  submit(form: FormGroup, admin: any) {
    if (form.valid) {
      let operation = null;
      if (!admin) {
        operation = this.adminService.create(form.value);
      } else {
        operation = this.adminService.update(admin.id, form.value);
      }
      operation.subscribe((res) => {
        if (res.data) {
          this.toast.open(res.message, "X", {
            duration: 2000,
            verticalPosition: "top",
          });
          this.matDialog.closeAll();
          window.location.reload();
        }
      });
      form.reset();
    } else {
      form.markAllAsTouched();
      this.toast.open("Incomplete Submission", "X", {
        duration: 2000,
        verticalPosition: "top",
      });
    }
  }
}

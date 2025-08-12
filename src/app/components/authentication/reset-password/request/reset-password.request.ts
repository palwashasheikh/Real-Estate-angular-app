import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "src/app/services/http/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class ResetPasswordRequest {
  constructor(
    private formBuilder: FormBuilder,
    private toast: MatSnackBar,
    private authService: AuthService
  ) {}

  init() {
    return this.formBuilder.group({
      code: ["", [Validators.required, Validators.minLength(25)]],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmedPassword: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  submit(form: FormGroup) {
    if (form.valid) {
      this.authService.resetPassword(form.get("code")?.value, form.value);
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

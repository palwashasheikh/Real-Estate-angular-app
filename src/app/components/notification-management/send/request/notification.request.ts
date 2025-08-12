import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotificationService } from "src/app/services/http/notification/notification-management.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NotificationRequest {
  constructor(
    private formBuilder: FormBuilder,
    private toast: MatSnackBar,
    private notificationService: NotificationService,
    private route: Router
  ) {}

  init() {
    return this.formBuilder.group({
      user: ["", [Validators.required]],
      title: ["", [Validators.required]],
      message: ["", [Validators.required]],
      type: ["", [Validators.required]],
    });
  }
  deleteNotification(ids: string[]) {
    this.notificationService.delete({ ids }).subscribe((res) => {
      this.toast.open(res.message, "X", {
        duration: 2000,
        verticalPosition: "top",
      });
    });
  }
  getNotification(id: string) {
    return this.notificationService.get(id);
  }
  submit(form: FormGroup, notification: any = null) {
    if (form.valid) {
      let operation = null;
      if (!notification) {
        operation = this.notificationService.create(form.value);
      } else {
        operation = this.notificationService.update(
          notification.id,
          form.value
        );
      }
      operation.subscribe((res) => {
        if (res.data) {
          this.toast.open(res.message, "X", {
            duration: 2000,
            verticalPosition: "top",
          });
          //this.route.navigate(["/notifications"]);
          window.location.reload();
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

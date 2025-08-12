import { Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "src/app/services/http/user/user-management.service";
import { Router } from "@angular/router";
import {
  History,
  SingleUser,
} from "src/app/services/interfaces/user-interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserRequest {
  constructor(
    private formBuilder: FormBuilder,
    private toast: MatSnackBar,
    private userService: UserService,
    private route: Router
  ) {}
  init(user?: SingleUser, attributes?: History) {
    const formGroup = this.formBuilder.group({
      fullName: [user?.fullName || "", [Validators.required]],
      picture: [user?.picture ? [Validators.required] : []],
      phoneNumber: [user?.phoneNumber || 0, [Validators.required]],
      nickName: [user?.nickName || "", [Validators.required]],
      dateOfBirth: [user?.dateOfBirth || "", [Validators.required]],
      isMale: [user?.isMale.toString() || "", [Validators.required]],
      specialFoot: [user?.features.specialFoot || "", [Validators.required]],
      shortPosition: [
        user?.features.inGamePosition.shortPosition || "",
        [Validators.required],
      ],
      position: [
        user?.features.inGamePosition.position || "",
        [Validators.required],
      ],
      height: [user?.features.height || "", [Validators.required]],
      weight: [user?.features.weight || "", [Validators.required]],
      topSpeed: [user?.features.topSpeed || ""],
      level: [attributes?.value || ""],
      attributes: this.formBuilder.array([]),
      isActive: [user?.isActive?.toString()],
    });
    const attributesForm = formGroup.get("attributes") as FormArray;
    attributes?.attributes?.map((item) => {
      attributesForm.push(this.formBuilder.group(item));
    });
    return formGroup;
  }
  deleteUser(event: any, ids: string[], activate: boolean = false) {
    this.userService.delete({ ids, activate }).subscribe((res) => {
      this.toast.open(res.message, "X", {
        duration: 2000,
        verticalPosition: "top",
      });
      event.emit(true);
    });
  }
  getUser(id: string) {
    return this.userService.get(id);
  }

  submit(form: FormGroup, user: SingleUser) {
    if (form.valid) {
      const payload = new FormData();
      payload.append("fullName", form.get("fullName")?.value);
      payload.append("picture", form.get("picture")?.value);
      payload.append("phoneNumber", form.get("phoneNumber")?.value);
      payload.append("nickName", form.get("nickName")?.value);
      payload.append("dateOfBirth", form.get("dateOfBirth")?.value);
      payload.append("isMale", form.get("isMale")?.value);
      payload.append("specialFoot", form.get("specialFoot")?.value);
      payload.append("shortPosition", form.get("shortPosition")?.value);
      payload.append("position", form.get("position")?.value);
      payload.append("height", form.get("height")?.value);
      payload.append("weight", form.get("weight")?.value);
      payload.append("topSpeed", form.get("topSpeed")?.value);
      payload.append("level", form.get("level")?.value);
      form.get("attributes")?.value.forEach((item: any, index: number) => {
        payload.append(`attributes[${index}][key]`, item.key);
        payload.append(`attributes[${index}][label]`, item.label);
        payload.append(`attributes[${index}][level]`, `lvl ${item.progress}`);
        payload.append(`attributes[${index}][progress]`, item.progress);
        payload.append(`attributes[${index}][points]`, item.points);
      });
      payload.append("isActive", form.get("isActive")?.value);
      let operation = null;
      if (!user) {
        operation = this.userService.create(payload);
      } else {
        operation = this.userService.update(user.id, payload);
      }
      operation.subscribe((res) => {
        if (res.data) {
          this.toast.open(res.message, "X", {
            duration: 2000,
            verticalPosition: "top",
          });
          this.route.navigate(["/user-management"]);
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

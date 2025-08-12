import { Component, OnInit } from "@angular/core";
import { CustomizerSettingsService } from "../customizer-settings/customizer-settings.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "src/app/services/http/auth/auth.service";
import { AddUpdateAdminComponent } from "./add-update-admin/add-update-admin.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Admin } from "src/app/services/interfaces/auth-interfaces/login.interface";

@Component({
  selector: "app-admin-managment",
  templateUrl: "./admin-managment.component.html",
  styleUrls: ["./admin-managment.component.scss"],
})
export class AdminManagmentComponent implements OnInit {
  searchTxt: String = "";
  declare user: any;
  declare admins: any;
  checkedAdmins: string[] = [];

  declare addUpdateAdmin: MatDialogRef<AddUpdateAdminComponent>;
  constructor(
    public dialog: MatDialog,
    public themeService: CustomizerSettingsService,
    private adminService: AuthService,
    private toast: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getAdmins();
  }

  openCreateAdminDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    admin?: Admin
  ): void {
    this.addUpdateAdmin = this.dialog.open(AddUpdateAdminComponent, {
      width: "600px",
      enterAnimationDuration,
      exitAnimationDuration,
      data: admin,
    });
  }
  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
  deleteAdmins(admin?: any): void {
    if (admin) {
      if (
        confirm(
          "Are you sure to delete " + admin.fullName ||
            admin.nickName ||
            "this Admin" + "?"
        )
      ) {
        this.adminService
          .delete(admin.id, { ids: [admin.id] })
          .subscribe((res) => {
            this.toast.open(res.message, "X", {
              duration: 2000,
              verticalPosition: "top",
            });
            window.location.reload();
          });
      }
    }
  }
  addToChecked(event: any): void {
    if (event.checked) {
      this.checkedAdmins.push(event.source.value);
    } else {
      this.checkedAdmins.splice(event.source.value, 1);
    }
  }

  getAdmins(page: number = 1, searchTxt?: string): void {
    let payload: any = { limit: 12, page: page };
    if (searchTxt) {
      payload = { ...payload, searchTxt: searchTxt };
    }
    this.adminService.list(payload).subscribe((res) => {
      this.admins = res;
    });
  }

  filter(event: any): void {
    if (event.target.value) {
      this.getAdmins(1, event.target.value);
    } else {
      this.getAdmins();
    }
  }
  refresh(check: Boolean): void {
    if (check) {
      this.getAdmins();
    }
  }
}

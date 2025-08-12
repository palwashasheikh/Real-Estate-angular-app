import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { MatDialog } from "@angular/material/dialog";
import { UserRequest } from "../add-user/request/user.request";
import { User } from "src/app/services/interfaces/user-interfaces/users.interface";

@Component({
  selector: "app-user-grid",
  templateUrl: "./user-grid.component.html",
  styleUrls: ["./user-grid.component.scss"],
})
export class UserGridComponent {
  @Input() users: User[];
  @Output() componentRefresh = new EventEmitter<Boolean>();
  checkedUsers: string[] = [];
  constructor(
    public dialog: MatDialog,
    public themeService: CustomizerSettingsService,
    private userRequest: UserRequest
  ) {}

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
  deleteUsers(user?: User, activate?: boolean): void {
    if (user) {
      if (
        confirm(
          `Are you sure you want to ${user.isActive ? "Hold" : "Activate"} '${
            user.fullName || user.phoneNumber
          }' this user?`
        )
      ) {
        this.userRequest.deleteUser(this.componentRefresh, [user.id], activate);
      }
    }
    if (!user && this.checkedUsers.length) {
      if (confirm("Are you sure to you want to delete all these users ? ")) {
        this.userRequest.deleteUser(this.componentRefresh, this.checkedUsers);
      }
    }
  }
  addToChecked(event: any): void {
    if (event.checked) {
      this.checkedUsers.push(event.source.value);
    } else {
      this.checkedUsers.splice(event.source.value, 1);
    }
  }
}

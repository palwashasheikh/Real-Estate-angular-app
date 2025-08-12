import { Component } from "@angular/core";
import { SendComponent } from "./send/send.component";
import { MatDialog } from "@angular/material/dialog";
import { NotificationService } from "src/app/services/http/notification/notification-management.service";
import { NotificationManagement } from "src/app/services/interfaces/notification-interface/notifications.interface";
import { UserService } from "src/app/services/http/user/user-management.service";
import { UserManagement } from "src/app/services/interfaces/user-interfaces/users.interface";

@Component({
  selector: "app-misleading-report-management",
  templateUrl: "./notification-management.component.html",
  styleUrls: ["./notification-management.component.scss"],
})
export class NotificationManagementComponent {
  searchTxt: String = "";
  declare notifications: NotificationManagement;
  private playerService: UserService;
  declare players: UserManagement;
  constructor(
    public dialog: MatDialog,
    private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.getNotifications();
  }
  openSendNotificationDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(SendComponent, {
      width: "600px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  getNotifications(page: number = 1, searchTxt?: string): void {
    let payload: any = { limit: 12, page: page };
    if (searchTxt) {
      payload = { ...payload, searchTxt: searchTxt };
    }
    this.notificationService.list(payload).subscribe((res) => {
      this.notifications = res;
    });
  }

  filter(event: any): void {
    if (event.target.value) {
      this.getNotifications(1, event.target.value);
    } else {
      this.getNotifications();
    }
  }
  refresh(check: Boolean): void {
    if (check) {
      this.getNotifications();
    }
  }
}

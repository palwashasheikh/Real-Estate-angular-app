import { NotificationRequest } from "./request/notification.request";
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { UserService } from "src/app/services/http/user/user-management.service";
import { UserManagement } from "src/app/services/interfaces/user-interfaces/users.interface";

@Component({
  selector: "app-send",
  templateUrl: "./send.component.html",
  styleUrls: ["./send.component.scss"],
})
export class SendComponent {
  declare players: any;
  declare sendNotificationForm: any;

  constructor(
    public dialogRef: MatDialogRef<SendComponent>,
    private playerService: UserService,
    private notificationRequest: NotificationRequest
  ) {
    this.sendNotificationForm = this.notificationRequest.init();
    this.getPlayers();
  }
  close() {
    this.dialogRef.close(true);
  }

  getPlayers(page: number = 1): void {
    let payload: any = { limit: 103, page: page, type: "notification" };
    this.playerService.list(payload).subscribe((res) => {
      this.players = res;
    });
  }
  submit() {
    this.notificationRequest.submit(this.sendNotificationForm);
  }
}

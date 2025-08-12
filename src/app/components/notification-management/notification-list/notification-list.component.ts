import { Component, Input } from "@angular/core";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { Notification } from "src/app/services/interfaces/notification-interface/notifications.interface";
import { NotificationRequest } from "../send/request/notification.request";

@Component({
  selector: "app-notification-list",
  templateUrl: "./notification-list.component.html",
  styleUrls: ["./notification-list.component.scss"],
})
export class NotificationListComponent {
  @Input() notifications: Notification[];
  declare checkedNotifications: String[];
  constructor(
    public themeService: CustomizerSettingsService,
    private notificationRequest: NotificationRequest
  ) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
  deleteNotifications(notification: Notification): void {
    if (
      confirm(
        "Are you sure to delete " + notification.title + " type notification?"
      )
    ) {
      this.notificationRequest.deleteNotification([notification.id]);
    }
  }
  addToChecked(event: any): void {
    if (event.checked) {
      this.checkedNotifications.push(event.source.value);
    } else {
      this.checkedNotifications.splice(event.source.value, 1);
    }
  }
}

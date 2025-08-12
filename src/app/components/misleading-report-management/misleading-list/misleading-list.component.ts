import { Component, Input } from "@angular/core";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { Notification } from "src/app/services/interfaces/notification-interface/notifications.interface";
import { MisleadingReport } from "src/app/services/interfaces/misleading-report/misleading-reports.interface";

@Component({
  selector: "app-misleading-list",
  templateUrl: "./misleading-list.component.html",
  styleUrls: ["./misleading-list.component.scss"],
})
export class MisleadingListComponent {
  @Input() misleadingReports: MisleadingReport[];
  declare checkedNotifications: String[];
  constructor(public themeService: CustomizerSettingsService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
  addToChecked(event: any): void {
    if (event.checked) {
      this.checkedNotifications.push(event.source.value);
    } else {
      this.checkedNotifications.splice(event.source.value, 1);
    }
  }
}

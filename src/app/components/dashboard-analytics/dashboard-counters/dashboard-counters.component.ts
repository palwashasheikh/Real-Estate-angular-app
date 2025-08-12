import { Component, Input } from "@angular/core";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { Dashboard } from "src/app/services/interfaces/dashboard-interfaces/dashboard.interface";

@Component({
  selector: "app-dashboard-counters",
  templateUrl: "./dashboard-counters.component.html",
  styleUrls: ["./dashboard-counters.component.scss"],
})
export class DashboardCountersComponent {
  @Input() declare dashboard: Dashboard | null;
  constructor(public themeService: CustomizerSettingsService) {}

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
}

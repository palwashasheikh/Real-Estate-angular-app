import { Component, Input } from "@angular/core";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { Dashboard } from "src/app/services/interfaces/dashboard-interfaces/dashboard.interface";

@Component({
  selector: "app-top-players",
  templateUrl: "./top-players.component.html",
  styleUrls: ["./top-players.component.scss"],
})
export class TopPlayersComponent {
  @Input() dashboard: Dashboard | null;
  constructor(public themeService: CustomizerSettingsService) {}

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
}

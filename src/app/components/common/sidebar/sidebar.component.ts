import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ToggleService } from "../header/toggle.service";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { HttpService } from "src/app/services/http/http.service";
import { Admin } from "src/app/services/interfaces/auth-interfaces/login.interface";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;
  isToggled = false;
  declare admin: Admin | null;

  constructor(
    private toggleService: ToggleService,
    public themeService: CustomizerSettingsService,
    private httpService: HttpService,
    private cdr: ChangeDetectorRef
  ) {
    this.toggleService.isToggled$.subscribe((isToggled) => {
      this.isToggled = isToggled;
    });
  }
  ngOnInit(): void {
    this.admin = this.httpService.getAdmin();
    console.log(this.admin);

    this.cdr.detectChanges();
  }

  toggle() {
    this.toggleService.toggle();
  }

  toggleSidebarTheme() {
    this.themeService.toggleSidebarTheme();
  }

  toggleHideSidebarTheme() {
    this.themeService.toggleHideSidebarTheme();
  }
}

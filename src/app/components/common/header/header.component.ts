import { HttpService } from "./../../../services/http/http.service";
import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import { ToggleService } from "./toggle.service";
import { DatePipe } from "@angular/common";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { ChangePasswordComponent } from "../../authentication/change-password/change-password.component";
import { MatDialog } from "@angular/material/dialog";
import { Admin } from "src/app/services/interfaces/auth-interfaces/login.interface";
import { AuthService } from "src/app/services/http/auth/auth.service";
import { NotificationManagement } from "src/app/services/interfaces/notification-interface/notifications.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  declare admin: Admin | null;
  declare notifications: NotificationManagement;
  currentDate: Date = new Date();
  formattedDate: any = this.datePipe.transform(
    this.currentDate,
    "dd MMMM yyyy"
  );
  isToggled = false;
  constructor(
    public dialog: MatDialog,
    private toggleService: ToggleService,
    private datePipe: DatePipe,
    public themeService: CustomizerSettingsService,
    private httpService: HttpService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.toggleService.isToggled$.subscribe((isToggled) => {
      this.isToggled = isToggled;
    });
  }
  ngOnInit(): void {
    this.admin = this.httpService.getAdmin();
    this.cdr.detectChanges();
  }

  logout() {
    this.authService.logout();
  }
  toggleTheme() {
    this.themeService.toggleTheme();
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

  toggleCardBorderTheme() {
    this.themeService.toggleCardBorderTheme();
  }

  toggleHeaderTheme() {
    this.themeService.toggleHeaderTheme();
  }

  toggleCardBorderRadiusTheme() {
    this.themeService.toggleCardBorderRadiusTheme();
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
  getNotifications(page: number = 1, searchTxt?: string): void {
    let payload: any = { limit: 20, page: page };
    if (searchTxt) {
      payload = { ...payload, searchTxt: searchTxt };
    }
    this.authService.notifications(payload).subscribe((res) => {
      this.notifications = res;
    });
  }

  openChangePasswordDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ChangePasswordComponent, {
      width: "600px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

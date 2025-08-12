import { Component } from "@angular/core";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { LoginRequest } from "./request/login.request";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  hide = true;
  declare loginForm: any;
  constructor(
    public themeService: CustomizerSettingsService,
    private loginRequest: LoginRequest
  ) {
    this.loginForm = this.loginRequest.init();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleCardBorderTheme() {
    this.themeService.toggleCardBorderTheme();
  }

  toggleCardBorderRadiusTheme() {
    this.themeService.toggleCardBorderRadiusTheme();
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  submit() {
    this.loginRequest.submit(this.loginForm);
  }
}

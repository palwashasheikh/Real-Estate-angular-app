import { Component } from "@angular/core";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { ForgotPasswordRequest } from "./request/forgot-password.request";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent {
  declare forgotPasswordForm: any;
  constructor(
    public themeService: CustomizerSettingsService,
    private forgotPasswordRequest: ForgotPasswordRequest
  ) {
    this.forgotPasswordForm = this.forgotPasswordRequest.init();
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
    this.forgotPasswordRequest.submit(this.forgotPasswordForm);
  }
}

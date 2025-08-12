import { ResetPasswordRequest } from "./request/reset-password.request";
import { Component, OnInit } from "@angular/core";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  declare resetPasswordForm: any;
  hide = true;
  constructor(
    public themeService: CustomizerSettingsService,
    private resetPasswordRequest: ResetPasswordRequest
  ) {
    this.resetPasswordForm = this.resetPasswordRequest.init();
  }

  ngOnInit(): void {}
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
    this.resetPasswordRequest.submit(this.resetPasswordForm);
  }
}

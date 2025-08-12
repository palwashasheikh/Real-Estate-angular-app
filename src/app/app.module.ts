import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MatMenuModule } from "@angular/material/menu";
import { StickyNavModule } from "ng2-sticky-nav";
import { FullCalendarModule } from "@fullcalendar/angular";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { NgxEditorModule } from "ngx-editor";
import { CarouselModule } from "ngx-owl-carousel-o";
import { MatCardModule } from "@angular/material/card";
import { NgScrollbarModule } from "ngx-scrollbar";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxGaugeModule } from "ngx-gauge";
import { GaugeModule } from "angular-gauge";
import { NgChartsModule } from "ng2-charts";
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { ColorPickerModule } from "ngx-color-picker";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidebarComponent } from "./components/common/sidebar/sidebar.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { NotFoundComponent } from "./components/common/not-found/not-found.component";
import { InternalErrorComponent } from "./components/common/internal-error/internal-error.component";
import { ResetPasswordComponent } from "./components/authentication/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./components/authentication/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { LogoutComponent } from "./components/authentication/logout/logout.component";
import { ConfirmMailComponent } from "./components/authentication/confirm-mail/confirm-mail.component";
import { UserManagementComponent } from "./components/user-management/user-management.component";
import { PropertyManagementComponent } from "./components/property-management/property-management.component";
import { NotificationManagementComponent } from "./components/notification-management/notification-management.component";
import { DashboardCountersComponent } from "./components/dashboard-analytics/dashboard-counters/dashboard-counters.component";
import { DashboardAnalyticsComponent } from "./components/dashboard-analytics/dashboard-analytics.component";
import { GraphicalAnalysisComponent } from "./components/dashboard-analytics/graphical-analysis/graphical-analysis.component";
import { TopPlayersComponent } from "./components/dashboard-analytics/top-players/top-players.component";
import { UserGridComponent } from "./components/user-management/user-grid/user-grid.component";
import { PropertyGridComponent } from "./components/property-management/property-grid/property-grid.component";
import { NotificationListComponent } from "./components/notification-management/notification-list/notification-list.component";
import { AddUserComponent } from "./components/user-management/add-user/add-user.component";
import { ChangePasswordComponent } from "./components/authentication/change-password/change-password.component";
import { CustomizerSettingsComponent } from "./components/customizer-settings/customizer-settings.component";
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from "ngx-ui-loader";
import { PaginationComponent } from "./components/common/pagination/pagination.component";
import { ImageCropperModule } from "ngx-image-cropper";
import { AdminManagmentComponent } from "./components/admin-managment/admin-managment.component";
import { AddUpdateAdminComponent } from "./components/admin-managment/add-update-admin/add-update-admin.component";
import { MisleadingReportManagementComponent } from "./components/misleading-report-management/misleading-report-management.component";
import { MisleadingListComponent } from "./components/misleading-report-management/misleading-list/misleading-list.component";
import { SendComponent } from "./components/notification-management/send/send.component";

@NgModule({
  declarations: [
    MisleadingReportManagementComponent,
    MisleadingListComponent,
    CustomizerSettingsComponent,
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    InternalErrorComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    LoginComponent,
    LogoutComponent,
    ConfirmMailComponent,
    UserManagementComponent,
    PropertyManagementComponent,
    NotificationManagementComponent,
    DashboardCountersComponent,
    DashboardAnalyticsComponent,
    GraphicalAnalysisComponent,
    TopPlayersComponent,
    UserGridComponent,
    PropertyGridComponent,
    NotificationListComponent,
    AddUserComponent,
    ChangePasswordComponent,
    PaginationComponent,
    AdminManagmentComponent,
    AddUpdateAdminComponent,
    SendComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgApexchartsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgScrollbarModule,
    StickyNavModule,
    FormsModule,
    FullCalendarModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxEditorModule,
    DragDropModule,
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule.forRoot({
      bgsColor: "#000066",
      bgsPosition: POSITION.centerCenter,
      bgsSize: 40,
      bgsType: SPINNER.rectangleBounce, // background spinner type
      fgsType: SPINNER.chasingDots, // foreground spinner type
      pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
      pbThickness: 5, // progress bar thickness
    }),
    CdkAccordionModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    NgxGaugeModule,
    GaugeModule.forRoot(),
    NgChartsModule,
    NgxMatTimepickerModule,
    QuillModule.forRoot(),
    NgxDropzoneModule,
    ColorPickerModule,
    ImageCropperModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

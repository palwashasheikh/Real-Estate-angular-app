import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MisleadingReportService } from "src/app/services/http/misleading-report/misleading-report-management.service";
import { MisleadingReportManagement } from "src/app/services/interfaces/misleading-report/misleading-reports.interface";
@Component({
  selector: "app-misleading-report-management",
  templateUrl: "./misleading-report-management.component.html",
  styleUrls: ["./misleading-report-management.component.scss"],
})
export class MisleadingReportManagementComponent {
  searchTxt: String = "";
  declare reports: MisleadingReportManagement;
  constructor(
    public dialog: MatDialog,
    private misleadingReportService: MisleadingReportService
  ) {}
  ngOnInit(): void {
    this.getReports();
  }
  getReports(page: number = 1, searchTxt?: string): void {
    let payload: any = { limit: 12, page: page };
    if (searchTxt) {
      payload = { ...payload, searchTxt: searchTxt };
    }
    this.misleadingReportService.list(payload).subscribe((res) => {
      this.reports = res;
    });
  }

  filter(event: any): void {
    if (event.target.value) {
      this.getReports(1, event.target.value);
    } else {
      this.getReports();
    }
  }
  refresh(check: Boolean): void {
    if (check) {
      this.getReports();
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/services/http/dashboard/dashboard.service";
import { Dashboard } from "src/app/services/interfaces/dashboard-interfaces/dashboard.interface";
@Component({
  selector: "app-dashboard-analytics",
  templateUrl: "./dashboard-analytics.component.html",
  styleUrls: ["./dashboard-analytics.component.scss"],
})
export class DashboardAnalyticsComponent implements OnInit {
  declare dashboard: Dashboard;
  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.getDashboard();
  }
  getDashboard(): void {
    this.dashboardService.index().subscribe((res) => {
      if (res.data) {
        this.dashboard = res;
      }
    });
  }
}

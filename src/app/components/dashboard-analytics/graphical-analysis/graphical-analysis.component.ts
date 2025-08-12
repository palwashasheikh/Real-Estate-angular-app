import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { an } from "@fullcalendar/core/internal-common";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: any;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  colors: any;
};

@Component({
  selector: "app-graphical-analysis",
  templateUrl: "./graphical-analysis.component.html",
  styleUrls: ["./graphical-analysis.component.scss"],
})
export class GraphicalAnalysisComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  @Input() stats: any;
  public chartOptions: Partial<ChartOptions>;

  constructor() {}
  ngOnInit(): void {
    if (this.stats) {
      this.chartOptions = {
        series: [
          {
            name: "Users",
            data: this.stats.map((item: any) => item.y),
          },
        ],
        chart: {
          height: 410,
          type: "area",
          toolbar: {
            show: true,
          },
        },
        colors: ["#392276", "#00ff94"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 3,
          curve: "smooth",
        },
        legend: {
          offsetY: 3,
          position: "top",
          fontSize: "14px",
          horizontalAlign: "center",
          labels: {
            colors: "#5B5B98",
          },
        },
        yaxis: {
          tickAmount: 4,
          labels: {
            style: {
              colors: "#a9a9c8",
              fontSize: "14px",
            },
          },
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          labels: {
            trim: false,
            style: {
              colors: "#a9a9c8",
              fontSize: "14px",
            },
          },
          categories: this.stats.map((item: any) => item.x) ?? [],
        },
        tooltip: {
          y: {
            formatter: function (val: any) {
              return val + " Total";
            },
          },
        },
        grid: {
          show: true,
          borderColor: "#EDEFF5",
          strokeDashArray: 5,
        },
      };
    }
  }
}

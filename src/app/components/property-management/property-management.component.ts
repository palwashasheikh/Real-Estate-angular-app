import { Component, OnInit } from "@angular/core";
import { PropertyService } from "src/app/services/http/property/property-management.service";
import { PropertyManagement } from "src/app/services/interfaces/property-interfaces/properties.interface";

@Component({
  selector: "app-property-management",
  templateUrl: "./property-management.component.html",
  styleUrls: ["./property-management.component.scss"],
})
export class PropertyManagementComponent implements OnInit {
  searchTxt: String = "";
  declare properties: PropertyManagement;
  constructor(private propertyService: PropertyService) {}
  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(page: number = 1, searchTxt?: string): void {
    let payload: any = { limit: 12, page: page };
    if (searchTxt) {
      payload = { ...payload, searchTxt: searchTxt };
    }
    this.propertyService.list(payload).subscribe((res) => {
      this.properties = res;
    });
  }

  filter(event: any): void {
    if (event.target.value) {
      this.getProperties(1, event.target.value);
    } else {
      this.getProperties();
    }
  }
  refresh(check: Boolean): void {
    if (check) {
      this.getProperties();
    }
  }
}

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CustomizerSettingsService } from "../../customizer-settings/customizer-settings.service";
import { Property } from "src/app/services/interfaces/property-interfaces/properties.interface";
import { PropertyRequest } from "../add-property/request/property.request";
@Component({
  selector: "app-property-grid",
  templateUrl: "./property-grid.component.html",
  styleUrls: ["./property-grid.component.scss"],
})
export class PropertyGridComponent {
  @Input() properties: Property[];
  @Output() componentRefresh = new EventEmitter<Boolean>();
  checkedProperties: String[] = [];
  constructor(
    public dialog: MatDialog,
    public themeService: CustomizerSettingsService,
    private propertyRequest: PropertyRequest
  ) {}

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
  deleteProperties(property: Property, activate?: boolean): void {
    if (
      confirm(
        `Are you sure to ${
          property.isActive ? "activate" : "delete"
        } this property '${property.title.en}' `
      )
    ) {
      this.propertyRequest.deleteProperty(
        this.componentRefresh,
        [property.id],
        activate
      );
    }
  }
  UpdateStatus(property: Property, status: string): void {
    console.log(status);

    if (
      confirm(
        `Are you sure you want to change status to ${status} for this property '${property.title.en}' `
      )
    ) {
      this.propertyRequest.updatePropertyStatus(
        this.componentRefresh,
        property.id,
        status
      );
    }
  }
  addToChecked(event: any): void {
    if (event.checked) {
      this.checkedProperties.push(event.source.value);
    } else {
      this.checkedProperties.splice(event.source.value, 1);
    }
  }
}

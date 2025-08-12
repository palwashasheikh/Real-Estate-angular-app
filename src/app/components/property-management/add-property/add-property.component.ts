import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "src/app/services/http/user/user-management.service";
import { PropertyRequest } from "./request/property.request";

@Component({
  selector: "app-add-property",
  templateUrl: "./add-property.component.html",
  styleUrls: ["./add-property.component.scss"],
})
export class AddPropertyComponent implements OnInit {
  declare teamForm: any;
  declare team: any;
  declare players: any;
  declare coverChangedEvent: any;
  declare logoChangedEvent: any;
  declare croppedCover: any;
  declare croppedLogo: any;
  constructor(
    private teamRequest: PropertyRequest,
    private playerService: UserService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.teamForm = this.teamRequest.init();
    this.getPlayers();
    this.getTeam();
  }
  getTeam(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.teamRequest.getProperty(id).subscribe((res) => {
        if (res.data) {
          this.team = res.data;
          this.teamForm = this.teamRequest.init(this.team);
        }
      });
    }
  }
  onLogoChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.logoChangedEvent = event;
      this.teamForm.patchValue({
        logo: file,
      });
    }
  }
  onCoverChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.coverChangedEvent = event;
      this.teamForm.patchValue({
        cover: file,
      });
    }
  }

  logoCropped(event: ImageCroppedEvent) {
    this.croppedLogo = this.sanitizer.bypassSecurityTrustUrl(
      event.objectUrl ?? ""
    );
    this.teamForm.patchValue({
      logo: event.blob,
    });
  }
  coverCropped(event: ImageCroppedEvent) {
    this.croppedCover = this.sanitizer.bypassSecurityTrustUrl(
      event.objectUrl ?? ""
    );
    this.teamForm.patchValue({
      cover: event.blob,
    });
  }
  getPlayers(page: number = 1, searchTxt?: string): void {
    let payload: any = { limit: 103, page: page };
    if (searchTxt) {
      payload = { ...payload, searchTxt: searchTxt };
    }
    this.playerService.list(payload).subscribe((res: any) => {
      this.players = res;
    });
  }
  submit() {
    this.teamRequest.submit(this.teamForm, this.team);
  }
}

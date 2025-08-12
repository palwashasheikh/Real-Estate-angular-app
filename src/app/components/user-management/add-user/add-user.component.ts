import { UserRequest } from "./request/user.request";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ImageCroppedEvent, LoadedImage } from "ngx-image-cropper";
import { DomSanitizer } from "@angular/platform-browser";
import { SingleUser } from "src/app/services/interfaces/user-interfaces/user.interface";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  declare playerForm: any;
  declare user: SingleUser;
  declare imageChangedEvent: any;
  declare croppedImage: any;
  declare activeAttributes: any;
  constructor(
    private userRequest: UserRequest,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.getPlayer();
  }
  getPlayer(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.playerForm = this.userRequest.init();
    if (id) {
      this.userRequest.getUser(id).subscribe((res) => {
        if (res.data) {
          this.user = res.data;
          this.activeAttributes = res.data.level.history.filter(
            (item) => item.isActive
          )[0];
          this.playerForm = this.userRequest.init(
            this.user,
            this.activeAttributes
          );
        }
      });
    }
  }
  onPictureChange(event: any) {
    if (event.target.files.length > 0) {
      this.imageChangedEvent = event;
      const file = event.target.files[0];
      this.playerForm.patchValue({
        picture: file,
      });
    }
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
      event.objectUrl ?? ""
    );
    this.playerForm.patchValue({
      picture: event.blob,
    });
  }
  submit() {
    this.userRequest.submit(this.playerForm, this.user);
  }
}

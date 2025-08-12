import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/http/user/user-management.service";
import { UserManagement } from "src/app/services/interfaces/user-interfaces/users.interface";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
})
export class UserManagementComponent implements OnInit {
  searchTxt: String = "";
  declare user: any;
  declare users: UserManagement;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(page: number = 1, searchTxt?: string): void {
    let payload: any = { limit: 12, page: page };
    if (searchTxt) {
      payload = { ...payload, searchTxt: searchTxt };
    }
    this.userService.list(payload).subscribe((res) => {
      this.users = res;
    });
  }
  filter(event: any): void {
    if (event.target.value) {
      this.getUsers(1, event.target.value);
    } else {
      this.getUsers();
    }
  }
  refresh(check: Boolean): void {
    if (check) {
      this.getUsers();
    }
  }
}

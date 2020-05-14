import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { USER_COLS } from 'src/app/globals';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  getAllUsersubscription$: Subscription;
  addUserubscription$: Subscription;
  updateUserubscription$: Subscription;
  deleteUserubscription$: Subscription;

  // data to be sent to the table
  columns: object = USER_COLS;
  data = [];

  // open modal
  isModal: boolean = false;

  constructor(
    private _userService: UserService,
    private _alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userService.getAllUsers().subscribe(
      (res) => {
        if (res.status) {
          this.data = [];
          this.data = res['data'];
        }
      }, (err) => { }
    );
  }

  onActionClick({ type, payload }) {
    switch (type) {
      case 'add':
        this.addUserubscription$ = this._userService.addUser(payload).subscribe(
          (res) => {
            this._alertService.sendMessage({ status: "success", message: res.message });
            this.getAllUsers();
          }, (err) => {
            this._alertService.sendMessage({ status: "danger", message: err.error.message });
          }
        );
        break;
      case 'edit':
        this.updateUserubscription$ = this._userService.updateUser(payload).subscribe(
          (res) => {
            this._alertService.sendMessage({ status: "success", message: res.message });
            this.getAllUsers();
          }, (err) => {
            this._alertService.sendMessage({ status: "danger", message: err.error.message });
          }
        );
        break;
      case 'delete':
        this.deleteUserubscription$ = this._userService.deleteUser(payload).subscribe(
          (res) => {
            this._alertService.sendMessage({ status: "success", message: res.message });
            this.getAllUsers();
          }, (err) => {
            this._alertService.sendMessage({ status: "danger", message: err.error.message });
          }
        );
        break;
    }
  }

  onCancel(ev) {
    this.isModal = false;
  }

  onSubmit(ev) {
    this.isModal = false;
  }

  ngOnDestroy() {
    if (this.getAllUsersubscription$) {
      this.getAllUsersubscription$.unsubscribe();
    } if (this.addUserubscription$) {
      this.addUserubscription$.unsubscribe();
    } if (this.updateUserubscription$) {
      this.updateUserubscription$.unsubscribe();
    } if (this.deleteUserubscription$) {
      this.deleteUserubscription$.unsubscribe();
    }
  }

}

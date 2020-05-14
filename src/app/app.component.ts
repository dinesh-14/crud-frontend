import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from './shared/services/alert.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud';

  private _success = new Subject<string>();
  successMessage: string;
  alertType: string = '';

  constructor(
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    // close alert
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
    this._alertService.alert$.subscribe(result => {
      if (result) {
        if (result.status == "warning") {
          this.alertType = 'warning';
        } else if (result.status == "success") {
          this.alertType = 'success';
        } else {
          this.alertType = 'danger';
        }
        this._success.next(result.message);
      }
    });
  }
}

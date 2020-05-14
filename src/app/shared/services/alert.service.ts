import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSource = new BehaviorSubject<any>(null);
  alert$ = this.alertSource.asObservable();

  constructor() { }

  sendMessage(data: any) {
    this.alertSource.next(data);
  }
}

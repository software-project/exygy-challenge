import { Injectable } from '@angular/core';
import { Notification } from './notification';
import { Subject } from 'rxjs/index';

@Injectable()
export class NotificationService {
  private notificationsSource = new Subject<Notification>();

  constructor() { }

  notify(notification: Notification) {
    this.notificationsSource.next(notification);
  }

  getNotifications() {
    return this.notificationsSource.asObservable();
  }
}

import {Component, OnInit, Input} from '@angular/core';
import {Notification} from './notification';

@Component({
  selector: 'app-notifications-item',
  templateUrl: './notifications-item.component.html'
})
export class NotificationsItemComponent implements OnInit {
  @Input() public notification: Notification;

  constructor() { }

  ngOnInit() {
  }

}

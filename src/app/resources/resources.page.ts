import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage {
  messages = [];
  constructor() { }

  ionViewWillEnter() {
    this.messages.push(`${new Date().toLocaleTimeString()} Entered View`);
  }

  ionViewWillLeave() {
    this.messages.push(`${new Date().toLocaleTimeString()} Left View`);
  }
}

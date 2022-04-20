import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage {
  messages = [];
  constructor() { }

  ionViewWillEnter() {
    this.messages.push(`${new Date().toLocaleTimeString()} Entered View`);
  }

  ionViewWillLeave() {
    this.messages.push(`${new Date().toLocaleTimeString()} Left View`);
  }

}

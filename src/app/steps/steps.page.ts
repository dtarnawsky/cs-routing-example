import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage {
  messages = [];
  constructor() { }

  ionViewWillEnter() {
    this.messages.push(`${new Date().toLocaleTimeString()} Entered View`);
  }

  ionViewWillLeave() {
    this.messages.push(`${new Date().toLocaleTimeString()} Left View`);
  }
}

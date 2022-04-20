import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage {
  messages = [];
  constructor() { }

  ionViewWillEnter() {
    this.messages.push(`${new Date().toLocaleTimeString()} Entered View`);
  }

  ionViewWillLeave() {
    this.messages.push(`${new Date().toLocaleTimeString()} Left View`);
  }
}

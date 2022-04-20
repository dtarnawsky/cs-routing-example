import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  messages = [];
  constructor() { }

  ionViewWillEnter() {
    this.messages.push(`${new Date().toLocaleTimeString()} Entered View`);
  }

  ionViewWillLeave() {
    this.messages.push(`${new Date().toLocaleTimeString()} Left View`);
  }
}

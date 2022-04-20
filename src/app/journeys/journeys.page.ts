import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.page.html',
  styleUrls: ['./journeys.page.scss'],
})
export class JourneysPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    alert('I Entered Journeys');
  }

  ionViewWillLeave() {
    alert('I Left Journeys');
  }

}

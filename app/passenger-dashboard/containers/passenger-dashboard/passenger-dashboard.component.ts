import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
      <div>
        <h3>Airline passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [ngClass]="{'checked-in': passenger.checkedIn}"
          ></span>
            {{ i }}: {{ passenger.fullname }}
            <p>{{ passenger | json }}</p>
            <div class="date">
              Check in date:
              {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
            </div>
            <div class="children">
              Children: {{ passenger.children?.length || 0 }}
            </div>
          </li>
        </ul>
      </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() {}

  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullname: 'Alain',
      checkedIn: true,
      checkInDate: 1490842000000,
      children: null
    }, {
      id: 4,
      fullname: 'Chuck',
      checkedIn: false,
      children: [
        {
          name: 'Lil Chuck',
          age: 3
        }, {
          name: 'Junior',
          age: 8
        }
      ]
    }, {
      id: 8,
      fullname: 'Herb',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    }, {
      id: 12,
      fullname: 'Annie',
      checkedIn: false,
      children: [
        {
          name: 'Annies Girl',
          age: 5
        }
      ]
    }];
  }
}
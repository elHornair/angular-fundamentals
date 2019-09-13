import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
      <div>
        <passenger-count
          [items]="passengers"
        >
        </passenger-count>
        <div
          *ngFor="let passenger of passengers;"
        >
          {{ passenger.fullname }}
        </div>
        <passenger-detail
          *ngFor="let passenger of passengers;"
          [detail]="passenger"
          (edit)="handleEdit($event)"
          (remove)="handleRemove($event)"
        >
        </passenger-detail>
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

  handleEdit(eventData: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === eventData.id) {
        passenger = Object.assign({}, passenger, eventData);
      }

      return passenger;
    });
  }

  handleRemove(eventData: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== eventData.id;
    });
  }
}
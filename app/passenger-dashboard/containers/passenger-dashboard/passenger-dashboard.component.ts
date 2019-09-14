import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

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
          (view)="handleView($event)"
          (edit)="handleEdit($event)"
          (remove)="handleRemove($event)"
        >
        </passenger-detail>
      </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
  ) {}

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data)
    ;
  }

  handleEdit(eventData: Passenger) {
    this.passengerService
      .updadePassenger(eventData)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === eventData.id) {
            passenger = Object.assign({}, passenger, eventData);
          }

          return passenger;
        });
      });
  }

  handleRemove(eventData: Passenger) {
    this.passengerService
      .removePassenger(eventData)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== eventData.id;
        });
      });
  }

  handleView(eventData: Passenger) {
    this.router.navigate(['/passengers', eventData.id]);
  }
}
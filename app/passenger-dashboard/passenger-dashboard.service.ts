import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[]   {
    return [{
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
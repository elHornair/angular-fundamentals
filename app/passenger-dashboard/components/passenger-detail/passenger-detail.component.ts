import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span
        class="status"
        [ngClass]="{'checked-in': detail.checkedIn}"
      ></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="handleNameChange(name.value)"
          #name
        >
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="handleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="handleRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  handleNameChange(value: string) {
    this.detail.fullname = value;
  }

  handleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  handleRemove() {
    this.remove.emit(this.detail);
  }
}

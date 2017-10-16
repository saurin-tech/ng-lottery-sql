import { Component, OnInit } from '@angular/core';
import { Shift } from './shift';
import { ShiftService } from '../services/shift.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {
  isShiftOpen:Observable<boolean>;

  shiftLive$:any;

  constructor(private shiftService: ShiftService, public shift:Shift) { }

  ngOnInit() {
    //this.isShiftOpen = this.getShift().subscribe(shift => this.shift.active = shift.active);
    this.shiftLive$ = this.shiftService.checkShiftStatus();
  }

  getShift(){
    return this.shiftService.checkShiftStatus().subscribe(shift => this.shift = shift);
  }

  openShift(){
    console.log("Open shift Button clicked!");
    this.shiftLive$ = this.shiftService.openShift();
  }

  closeShift(){
    console.log("Close Shift Button clicked!");
    this.shiftLive$ = this.shiftService.closeShift();
  }

}

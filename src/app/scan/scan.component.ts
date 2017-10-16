import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { SettingsService } from '../services/settings.service';
import { Settings } from '../settings/settings';
import { ShiftService } from '../services/shift.service';
import { ScanService } from '../services/scan.service';
import { ScanTicket } from './scan-ticket';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  rForm: FormGroup;
  rFormClose: FormGroup;
  openTicket: ScanTicket = this.scanTicket;
  closeTicket: ScanTicket = this.scanTicket;
  openingTicketNumber:number;
  closingTicketNumber:number;
  shiftLive$;  
  gameNumberSize:number;
  bookNumberSize:number;

  constructor(private fb: FormBuilder, private settingsService: SettingsService,
    private settings: Settings, private app: AppComponent, private shiftService:ShiftService,
    private scanService: ScanService, private scanTicket:ScanTicket) {
    this.rForm = fb.group({
      'ticket':[null, Validators.compose([Validators.required, Validators.min(0)])]      
    })
    this.rFormClose = fb.group({
      'ticketClose':[null, Validators.compose([Validators.required, Validators.min(0)])]      
    })
   }

  ngOnInit(){
    //this.settings = this.app.getSettings();
    this.shiftLive$ = this.shiftService.checkShiftStatus();
    this.settingsService.settings$.subscribe(res => { 
      this.settings = res;
    });
  }

  onSubmitOpen(openTicket){
    this.gameNumberSize = this.settings.numberOfDigitsInGameNumber;
    this.bookNumberSize = this.settings.numberOfDigitsInBookNumber;
    console.log("Game Number size: " + this.gameNumberSize);
    console.log("Book Number size: " + this.bookNumberSize);
    this.openTicket.bookNumber = +openTicket.ticket.substr(this.gameNumberSize, this.bookNumberSize);
    this.openTicket.openingTicketNumber = +openTicket.ticket.substr(this.gameNumberSize + this.bookNumberSize,3);
    this.scanService.openScanTicket(this.openTicket);
    this.rForm.reset();
  }

  onSubmitClose(closeTicket){
    this.gameNumberSize = this.settings.numberOfDigitsInGameNumber;
    this.bookNumberSize = this.settings.numberOfDigitsInBookNumber;
    console.log("Game Number size: " + this.gameNumberSize);
    console.log("Book Number size: " + this.bookNumberSize);
    console.log(closeTicket.ticketClose);
    this.closeTicket.bookNumber = +closeTicket.ticketClose.substr(this.gameNumberSize, this.bookNumberSize);
    console.log("Book Number: " + this.closeTicket.bookNumber);
    this.closeTicket.closingTicketNumber = +closeTicket.ticketClose.substr(this.gameNumberSize + this.bookNumberSize,3);
    console.log("Closing Ticket Number: " + this.closeTicket.closingTicketNumber);
    console.log(this.closeTicket);
    this.scanService.closeScanTicket(this.closeTicket);
    this.rForm.reset();
  }

}

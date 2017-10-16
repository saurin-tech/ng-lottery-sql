import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ScanTicket } from '../scan/scan-ticket';

@Injectable()
export class ScanService {

  constructor(private httpClient:HttpClient) { }

  openScanTicket(ticket:ScanTicket): void{
    this.httpClient.post('/api/scanticket/openingticket', ticket )
     .subscribe(res => {console.log(res);
     },
   err => {
     console.log(err);
   });
  }

  closeScanTicket(ticket:ScanTicket): void{
    this.httpClient.put('/api/scanticket/closingticket', ticket )
     .subscribe(res => {console.log(res);
     },
   err => {
     console.log(err);
   });
  }
}

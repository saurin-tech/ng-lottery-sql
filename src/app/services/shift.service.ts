import { Injectable } from '@angular/core';
import { Shift } from '../shift/shift';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

@Injectable()
export class ShiftService {

  constructor(private shift:Shift, private httpClient:HttpClient,
              private http:Http ) { this.checkShiftStatus();}

  checkShiftStatus():Observable<Shift>{
    return this.httpClient.get<Shift>('/api/shift/isopen')
      .do((data) => {
        this.shift = data;
        console.log(this.shift);
      }).catch((err) => {
        console.log('make sure to handle this error');
       return Observable.throw(err);
    });
      
    //return Promise.resolve(this.shift);
  }

  openShift():Observable<Shift>{
    return this.httpClient.get<Shift>('/api/shift/open');
  }

  closeShift():Observable<Shift>{
    return this.httpClient.get<Shift>('/api/shift/close');
  }

  get getShift():Promise<Shift>{
    return Promise.resolve(this.shift);
  }
  
}

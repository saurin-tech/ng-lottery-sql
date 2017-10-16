import { Injectable } from '@angular/core';
import { Settings } from '../settings/settings';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingsService{

  settingsFromServer:Settings;

  private settingsSource = new BehaviorSubject(null);
  settings$ = this.settingsSource.asObservable().filter(e => !!e); //this prevents the initial null value from being sent

  constructor(private httpClient: HttpClient, private settings: Settings,
              private http:Http) { this.init(); this.loadSettings();}


   init(){
    this.httpClient.get<Settings>('/api/settings/1')
      .subscribe((data) => {
        this.settingsFromServer = data;
        console.log(this.settings);
      },
    error => {
      console.error('Something went wrong!');
    });
   }

   loadSettings() {
    this.http.get('/api/settings/1').map(r => r.json()).subscribe(this.settingsSource);
  }

  // get _settingsFromServer() {
  //   return this.settingsFromServer;
  // }
  // set _settingsFromServer(value) {
  //   this.settingsFromServer = value;
  // }

   getSettings():Settings{
     return this.settings;
   }

  //  httpSettingsService():Observable<Settings>{
  //   return this.http.get('/api/settings/1')
  //     .map((response) => <any>response.json())
  //     .catch(this.handleError);
  // }

  private handleError(error: Response) {
    return Observable.throw(error.json() || 'Server error');
  }

   setStoreSettings(setting:Settings): void{
     this.httpClient.post('/api/settings', setting )
      .subscribe(res => {console.log(res);
      },
    err => {
      console.log(err);
    });
   }

}

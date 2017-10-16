import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { Settings } from './settings/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  settings$: any;

  constructor(private settingsService: SettingsService, public settings: Settings){ }

  ngOnInit(){
    //this.settings = this.settingsService.getSettings();
    //setTimeout(()=>  this.settings = this.settingsService.getSettings(), 1500);
    //this.settings$ = this.settingsService.httpSettingsService();
    //console.log("Logging settings from the server: " + this.settingsService.settingsFromServer);
    //this.settings$ = this.settingsService.httpSettingsService().subscribe(result => 
    // {this.settingsService.settingsFromServer = result}, error => { console.log("error trying to set settings")});
    this.settingsService.settings$.subscribe(res => {console.log(res)});
  }

  getSettings(){
    return this.settings;
  }

  

}

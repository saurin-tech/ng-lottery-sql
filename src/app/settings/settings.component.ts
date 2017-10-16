import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Settings } from './settings';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  settings$:any;

  checked = true;
  constructor(private fb: FormBuilder, private settings: Settings,
    private settingsService: SettingsService) { 
    this.rForm = fb.group({
      'storeName': [null, Validators.required],
      'digitsGameNumber':[null, Validators.compose([Validators.required, Validators.min(0)])],
      'digitsBookNumber':[null, Validators.compose([Validators.required, Validators.min(0)])],
      'email':[null, Validators.compose([Validators.required, Validators.email])],
      'ascending':[null,Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.settings$ = this.settingsService.settings$;
  }
  
  rForm: FormGroup;
  post: any;
  storeName:string= '';
  digitsGameNumber:number;
  digitsBookNumber:number;
  ascending:boolean;


  onSubmit(post){
    console.log(post);
    this.settings.storeName = post.storeName;
    this.settings.numberOfDigitsInGameNumber = +post.digitsGameNumber;
    this.settings.numberOfDigitsInBookNumber = +post.digitsBookNumber;
    this.settings.ascendingOrder = post.ascending;
    this.settings.email = post.email;
    console.log(this.settings);

    this.settingsService.setStoreSettings(this.settings);
  }

}

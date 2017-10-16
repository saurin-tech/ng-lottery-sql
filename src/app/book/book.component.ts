import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from './book';
import { SettingsService } from '../services/settings.service';
import { Settings } from '../settings/settings';
import { BookService } from '../services/book.service';
import { AppComponent } from '../app.component';
import { ShiftService } from '../services/shift.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  shiftLive$;

  constructor(private fb: FormBuilder, private settingsService: SettingsService,
              private settings: Settings, private bookService: BookService, 
              private app: AppComponent, private shiftService: ShiftService) { 
    this.rForm = fb.group({
      'bookName': [null, Validators.required],
      'price':[null, Validators.compose([Validators.required, Validators.min(0)])],
      'maxNumber':[null, Validators.compose([Validators.required, Validators.min(0)])],
      'wholeNumber':[null,Validators.compose([Validators.required])]      
    })
  }

  ngOnInit() {
    this.shiftLive$ = this.shiftService.checkShiftStatus();
    this.settingsService.settings$.subscribe(res => { 
      this.settings = res;
    });
  }

  rForm: FormGroup;
  post: Book;

  gameNumberSize:number;
  bookNumberSize:number;
  

  onSubmit(post){
    this.gameNumberSize = this.settings.numberOfDigitsInGameNumber;
    this.bookNumberSize = this.settings.numberOfDigitsInBookNumber;
    this.post = post;
    this.post.gameNumber = +this.post.wholeNumber.substr(0,this.gameNumberSize);
    this.post.bookNumber = +this.post.wholeNumber.substr(this.gameNumberSize, this.bookNumberSize);
    this.bookService.saveBook(this.post);
    this.rForm.reset();
  }

}

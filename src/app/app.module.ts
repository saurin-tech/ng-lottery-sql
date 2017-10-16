import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, 
          MdTabsModule, MdIconModule, MdSidenavModule,
          MdInputModule, MdCheckboxModule, MdTooltipModule, MdGridListModule } from '@angular/material';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { routes } from './app.routes';
import { SettingsComponent } from './settings/settings.component';
import { BookComponent } from './book/book.component';
import { ShiftComponent } from './shift/shift.component';
import { ScanComponent } from './scan/scan.component';
import { Settings } from './settings/settings';
import { SettingsService } from './services/settings.service';
import { Book } from './book/book';
import { BookService } from './services/book.service';
import { ShiftService } from './services/shift.service';
import { Shift } from './shift/shift';
import { ScanService } from './services/scan.service';
import { ScanTicket } from './scan/scan-ticket';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    SettingsComponent,
    BookComponent,
    ShiftComponent,
    ScanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule, 
    MdCardModule, 
    MdMenuModule, 
    MdToolbarModule, 
    MdIconModule,
    MdSidenavModule,
    MdTabsModule,
    MdInputModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdGridListModule,
    routes
  ],
  providers: [Settings, SettingsService, BookService, Book, ShiftService, Shift, ScanService, ScanTicket],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShiftComponent } from './shift/shift.component';
import { BookComponent } from './book/book.component';
import { SettingsComponent } from './settings/settings.component';
import { ScanComponent } from './scan/scan.component';

export const router: Routes = [
    { path: 'book', component: BookComponent},
    { path: 'shift', component: ShiftComponent},
    { path: 'scan', component: ScanComponent},
    { path: 'about', component: AboutComponent },
    { path: 'settings', component: SettingsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
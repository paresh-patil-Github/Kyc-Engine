import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { DocumentsComponent } from './features/documents/documents.component';
import { LogoutComponent } from './features/logout/logout.component';
import { ReportsComponent } from './features/reports/reports.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'profile' , component: ProfileComponent },
    {path: 'documents', component:DocumentsComponent},
    {path : 'logout', component:LogoutComponent},
    {path : 'reports', component:ReportsComponent}
];


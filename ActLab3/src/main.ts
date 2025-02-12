import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomepageComponent } from './app/homepage/homepage.component';
import { UserProfileComponent } from './app/user-profile/user-profile.component';
import { ContactFormComponent } from './app/contact-form/contact-form.component';

// Define routes
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: '**', redirectTo: '' } // Redirect to homepage if route not found
];

// Bootstrap the application with routing
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
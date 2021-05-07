import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { TemplateComponent } from './components/dashboard/template/template.component';
import { SidebarComponent } from './components/dashboard/template/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { HeaderComponent } from './components/dashboard/template/header/header.component';
import { BookingsComponent } from './components/dashboard/main/bookings/bookings.component';
import { BooksummaryComponent } from './components/dashboard/main/booksummary/booksummary.component';
import { CalenderComponent } from './components/dashboard/main/calender/calender.component';
import { GuestComponent } from './components/dashboard/guest/guest.component';
import { GuestsummaryComponent } from './components/dashboard/guest/guestsummary/guestsummary.component';
import { ReservationComponent } from './components/dashboard/reservation/reservation.component';
import { AddreservationComponent } from './components/dashboard/reservation/addreservation/addreservation.component';
import { SingleguestComponent } from './components/dashboard/reservation/singleguest/singleguest.component';
import { SinglereservationComponent } from './components/dashboard/reservation/singlereservation/singlereservation.component';
import { AllguestComponent } from './components/dashboard/guest/allguest/allguest.component';




// export const routes: Routes = []
const routes:Routes=[
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"admin",
    component:TemplateComponent,
    canActivate:[AuthService],
    children:[
      {
        path:"",
        component:MainComponent
      },
      {
        path:"booking",
        component:BookingsComponent
      },
      {
        path:"reservations",
        component:GuestComponent,
        children:[
          {
            path:"single/:id",component:SinglereservationComponent
          }
        ]
      },
      {
        path:"add-reservation",
        component:AddreservationComponent
      },
      {
        path:"guests",
        component:AllguestComponent
      }

    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    SidebarComponent,
    DashboardComponent,
    HeaderComponent,
    BookingsComponent,
    BooksummaryComponent,
    MainComponent,
    CalenderComponent,
    GuestComponent,
    GuestsummaryComponent,
    ReservationComponent,
    AddreservationComponent,
    SingleguestComponent,
    SinglereservationComponent,
    AllguestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

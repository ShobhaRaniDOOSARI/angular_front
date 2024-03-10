import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavigComponent } from './side-navig/side-navig.component';
import { BodyComponent } from './body/body.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'events',
  component: EventsComponent
  },
  {
    path:'members',
    component: MemberComponent
  },
  {
    path:'**',
    component : HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    EventsComponent,
    HeaderComponent,
    FooterComponent,
    SideNavigComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

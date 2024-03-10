import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  events : Event[] = [];
  constructor(private eventService:EventService){}

  ngOnInit(): void {
      this.eventService.getEvents().subscribe(
        data => {
        console.log(data);
        this.events = data;
      });
  }

}

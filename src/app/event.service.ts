import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = "http://localhost:8080/fta/events";

  constructor(private http : HttpClient) { }

  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.baseUrl);
  }
}
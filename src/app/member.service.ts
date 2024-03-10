import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { Member } from './member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = "http://localhost:8080/fta/members";

  constructor(private http : HttpClient) { }

  getMembers():Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl);
  
  }
}

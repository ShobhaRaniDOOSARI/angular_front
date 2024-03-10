import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{

   members: Member[] = [];
  constructor(private memberService:MemberService){}

  ngOnInit(): void {
      this.memberService.getMembers().subscribe(
        data => {
        console.log(data);
        this.members = data;
      }
      );
    }
  
}

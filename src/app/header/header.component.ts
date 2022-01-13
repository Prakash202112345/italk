import { AfterViewInit, Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit{


  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,) {
   }

  
 
  notificationList = [
    {
      avatar : "assets/images/user-1.jpeg",
      name: "Olivia",
      lastMessage : "Hey robin, this seems like a great start 😃.",
      lastSeen: "now"
    },
    {
      avatar : "assets/images/user-2.jpg",
      name: "Alexander",
      lastMessage : "I'll be send the mail soon.",
      lastSeen: "1hr ago"
    },
    {
      avatar : "assets/images/user-3.jpg",
      name: "Sophia Richi",
      lastMessage : "Thanks, how about an 🍦?",
      lastSeen: "2hr ago"
    },
    {
      avatar : "assets/images/user-4.jpg",
      name: "Ethan Malson",
      lastMessage : "Wohoo 🎧",
      lastSeen: "4hr ago"
    },
    {
      avatar : "assets/images/user-5.jpg",
      name: "William",
      lastMessage : "okay please tell me the state of velco",
      lastSeen: "10min ago"
    }
  ];

  showFiller = false;
  status: boolean = false;

  notification(){
    this.status = !this.status;
  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }
  openmenu(){
    this.parentFun.emit();
   }

}

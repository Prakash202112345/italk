import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedItem=0;

  users = [
    {
      avatar : "assets/images/user-1.jpeg",
      name: "Olivia",
      lastMessage : "Hey robin, this seems like a great start 😃.",
      date : "19 Jan, 2018",
      time : "03:49 pm",
      replies : "20",
      response : "290/300"
    },
    {
      avatar : "assets/images/user-2.jpg",
      name: "Alexander",
      lastMessage : "I'll be send the mail soon.",
      date : "19 Jan, 2018",
      time : "03:40 pm",
      replies : "14",
      response : "120/149"
    },
    {
      avatar : "assets/images/user-3.jpg",
      name: "Sophia Richi",
      lastMessage : "Thanks, how about an 🍦?",
      date : "19 Jan, 2018",
      time : "03:39 pm",
      replies : "11",
      response : "100/119"
    },
    {
      avatar : "assets/images/user-4.jpg",
      name: "Ethan Malson",
      lastMessage : "Wohoo 🎧",
      date : "18 Jan, 2018",
      time : "10:30 am",
      replies : "05",
      response : "123/180"
    },
    {
      avatar : "assets/images/user-5.jpg",
      name: "William",
      lastMessage : "okay please tell me the state of velco",
      date : "18 Jan, 2018",
      time : "08:10 am",
      replies : "10",
      response : "169/190"
    }
  ];
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


}

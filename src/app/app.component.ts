import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideBarService } from './sidenav/sidemenu.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'italk';
  mode = new FormControl('over');
  @ViewChild('sidenav',{static: true}) sidenav!: MatSidenav;

  constructor(){}

  

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sidenav!.toggle();
  }
  parentFun(){
    this.sidenav!.toggle();
}

 
}

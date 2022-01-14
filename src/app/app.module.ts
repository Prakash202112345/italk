import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SideBarService } from './sidenav/sidemenu.service';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';


@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule ,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule,
  ],
  providers: [
    SideBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

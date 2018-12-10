import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FriendService } from './services/friend.service';
import { LoginService } from './services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FriendService, LoginService,JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

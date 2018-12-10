import { Component, OnInit } from '@angular/core';
import { FriendModel } from './models/friend.model';
import { UserModel } from './models/user.model';
import { FriendService } from './services/friend.service';
import { LoginService } from './services/login.service';
import { UserHelper } from './helpers/user.helper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'friends';
  friend: FriendModel = new FriendModel();
  user: UserModel = new UserModel();
  listFriend: FriendModel[] = new Array<FriendModel>();
  listFriendNear: any[];
  step: string;
  userHelper: UserHelper = new UserHelper();
  latitude: number;
  longitude: number;
  inLogin: boolean;
  messageTokenExpire: string;
  constructor(private friendService: FriendService, private loginService: LoginService) {

  }

  ngOnInit() {
    this.user.accessKey = "123@321";
    this.user.userId = "Admin";
    this.step = "Login";
    this.inLogin = false;
  }

  async loadFriends() {
    this.listFriend = await this.friendService.get();
  }

  async login() {
    this.inLogin = true;
    let info = await this.loginService.login(this.user);
    if (info.authenticated) {
      this.userHelper.refreshToken(info.accessToken);
      this.step = "Connected"
      this.loadFriends();
    }
    this.inLogin = false;
  }

  async createUser() {
    try {
      await this.friendService.create(this.friend);
      this.loadFriends();
    } catch (e) {
      if (e.status == 401) {
        this.step = "Login";
        this.messageTokenExpire = "Sessão expirou, por favor entre novamente.";
      }
    }
  }

  async check() {
    try {
      this.listFriendNear = await this.friendService.check(this.latitude, this.longitude);
      console.log(this.listFriendNear);
    }
    catch (e) {
      if (e.status == 401) {
        this.step = "Login";
        this.messageTokenExpire = "Sessão expirou, por favor entre novamente.";
      }
    }

  }

}

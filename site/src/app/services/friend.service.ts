import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FriendModel } from '../models/friend.model';
import { UserHelper } from '../helpers/user.helper';

@Injectable()
export class FriendService {
    authToken;
    url: string = environment.urlApi;
    userHelper: UserHelper = new UserHelper();
    constructor(private _http: HttpClient) { }

    async get(): Promise<any> {
        return await this._http.get<any>(`${this.url}friend`,this.userHelper.createHeaders()).toPromise();
    }

    async create(friend: FriendModel): Promise<any> {
        return await this._http.post<any>(`${this.url}friend`, friend,this.userHelper.createHeaders()).toPromise();
    }  
    
    async check(latitude: number, longitude:number): Promise<any> {
        return await this._http.get<any>(`${this.url}friend/check/${latitude}/${longitude}`,this.userHelper.createHeaders()).toPromise();
    }
}
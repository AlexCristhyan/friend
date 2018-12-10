import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserHelper } from '../helpers/user.helper';

@Injectable()
export class LoginService {
    userHelper: UserHelper = new UserHelper();
    authToken;
    constructor(private _http: HttpClient) { }

    async login(user:any): Promise<any> {
        const url = `${environment.urlApi}login`
        return await this._http.post<any>(url, user).toPromise();
    }
}
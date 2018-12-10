import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders } from '@angular/common/http';


export class UserHelper {
    jwt: JwtHelperService = new JwtHelperService('token-admin');
    userDecoded: any;
    authToken: any;
    constructor() { }

    loadToken() {
        const token = localStorage.getItem('token-user');
        this.authToken = token;
    }

    createHeaders(): any {
        this.loadToken();
        const headers = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer '+this.authToken
            })
        }
        return headers;
    }

    refreshToken(accessToken){
        localStorage.removeItem('token-user');
        localStorage.setItem('token-user', accessToken);
    }
  
}

export class UserModel {
    userId: string;
    accessKey: string;

    constructor() {
        this.userId = '';
        this.accessKey = '';
    }

    loadModel(response: any) {
        this.userId = response.userId;
        this.accessKey = response.userId;
    }
}

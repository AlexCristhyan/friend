export class FriendModel {
    id: number;
    name: string;
    latitude: number;
    longitude: number;

    constructor() {
        this.name = '';
        this.latitude = 0;
        this.longitude = 0;
    }

    loadModel(response: any) {
        this.id = response.id;
        this.latitude = response.latitude;
        this.longitude = response.longitude;
        this.name = response.name;
    }
}

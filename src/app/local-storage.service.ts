import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public readonly firstTime: boolean;

    public constructor() {
        this.firstTime = window.localStorage.getItem("firstTime") === null;
        if (this.firstTime)
            window.localStorage.setItem("firstTime", "n");
    }
}

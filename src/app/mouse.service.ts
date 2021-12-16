import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
    public mouseX = 0;
    public mouseY = 0;

    public constructor() {
        document.addEventListener("mousemove", e => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeseven-banner',
    templateUrl: './homeseven-banner.component.html',
    styleUrls: ['./homeseven-banner.component.scss']
})
export class HomesevenBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}
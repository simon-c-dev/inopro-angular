import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import { HammerModule } from '@angular/platform-browser';

@Component({
    selector: 'app-service-details-page-two',
    templateUrl: './service-details-page-two.component.html',
    styleUrls: ['./service-details-page-two.component.scss']
})
export class ServiceDetailsPageTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    oneAtATime = true;

    homeSlides: OwlOptions = {
        items: 1,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 10000,
        animateIn: `fadeIn`,
        animateOut: `fadeOut`,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>'
        ]
    }
}

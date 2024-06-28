import {Component, OnChanges, OnInit} from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import { HttpClient } from '@angular/common/http';
import {Button, ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-geolocation',
  standalone: true,
    imports: [
        Button,
        DialogModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        RouterLink,
    ],
  templateUrl: './geolocation.component.html',
  styleUrl: './geolocation.component.scss'
})

export class GeolocationComponent implements OnInit{

    visible: boolean = false;

    constructor(private readonly geolocation$: GeolocationService, private http: HttpClient) {}

    trackPosition(): void {
        this.geolocation$.subscribe(position =>
        {
            const url = this.getUrl(position.coords.latitude, position.coords.longitude);

            this.http.get<any>(url).subscribe(data => {
                this.visible = data.countryCode !== "CA";
            });
        });
    }

    getUrl(latitude: number, longitude: number): string {
        return 'http://api.geonames.org/countryCodeJSON?lat=' + latitude + '&lng=' + longitude + '&username=simoncdev';
    }

    closeDialog(){
        this.visible = false;
    }

    ngOnInit(){
        this.trackPosition();
    }
}



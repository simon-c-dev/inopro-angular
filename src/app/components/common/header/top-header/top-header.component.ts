import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco'

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

    siteLanguage = "English";
    languageList = [
        {code: 'en', name: 'English'},
        {code: 'fr', name: 'French'},
    ]


    constructor(public router: Router,private service: TranslocoService) {}


    ngOnInit(): void {}

    changeSiteLanguage(language: string): void {
        this.service.setActiveLang(language);

        if(language === 'fr'){
            console.log("Switched to french.");
        }else if(language === 'en'){
            console.log("Switched to english.");
        }else{
            console.log("Something is wrong.");
        }

        // @ts-ignore
        this.siteLanguage = this.languageList.find(f => f.code === language).label;
    }

}

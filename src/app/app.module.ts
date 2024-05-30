import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from "./components/pages/home/home.component";
import { HomeBannerComponent} from "./components/pages/home/home-banner/home-banner.component";
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { DentistsComponent } from './components/common/dentists/dentists.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { AboutComponent } from './components/common/about/about.component';
import { AppointmentComponent } from './components/common/appointment/appointment.component';
import { CallUsComponent } from './components/common/call-us/call-us.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TopHeaderComponent } from './components/common/header/top-header/top-header.component';
import { MiddleHeaderComponent } from './components/common/header/middle-header/middle-header.component';
import { NavbarComponent } from './components/common/header/navbar/navbar.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { ApprovedVaccineComponent } from './components/common/approved-vaccine/approved-vaccine.component';
import { ContactInfoComponent } from './components/common/contact-info/contact-info.component';
import { ServiceDetailsPageOneComponent } from './components/pages/service-details-page-one/service-details-page-one.component';
import { ServiceDetailsPageTwoComponent } from './components/pages/service-details-page-two/service-details-page-two.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import {ContactPageComponent} from "./components/pages/contact-page/contact-page.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HomeBannerComponent,
        ContactPageComponent,
        NotFoundComponent,
        FooterComponent,
        DentistsComponent,
        FeaturesComponent,
        AboutComponent,
        AppointmentComponent,
        CallUsComponent,
        WhyChooseUsComponent,
        PartnerComponent,
        HeaderComponent,
        TopHeaderComponent,
        MiddleHeaderComponent,
        NavbarComponent,
        SubscribeComponent,
        ApprovedVaccineComponent,
        ContactInfoComponent,
        ServiceDetailsPageOneComponent,
        ServiceDetailsPageTwoComponent,
        ComingSoonPageComponent,
        AboutPageOneComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        FormsModule,
        NgxPaginationModule,
        HttpClientModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

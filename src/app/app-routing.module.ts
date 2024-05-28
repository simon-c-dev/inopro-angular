import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { AboutPageThreeComponent } from './components/pages/about-page-three/about-page-three.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { AppointmentPageComponent } from './components/pages/appointment-page/appointment-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageOneComponent } from './components/pages/contact-page-one/contact-page-one.component';
import { ContactPageThreeComponent } from './components/pages/contact-page-three/contact-page-three.component';
import { ContactPageTwoComponent } from './components/pages/contact-page-two/contact-page-two.component';
import { DentistDetailsPageComponent } from './components/pages/dentist-details-page/dentist-details-page.component';
import { DentistsPageComponent } from './components/pages/dentists-page/dentists-page.component';
import { DoctorsPageComponent } from './components/pages/doctors-page/doctors-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { HomeDemoEightComponent } from './components/pages/home-demo-eight/home-demo-eight.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoSevenComponent } from './components/pages/home-demo-seven/home-demo-seven.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HowVaccinesWorkPageComponent } from './components/pages/how-vaccines-work-page/how-vaccines-work-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PortfolioDetailsPageComponent } from './components/pages/portfolio-details-page/portfolio-details-page.component';
import { PortfolioPageComponent } from './components/pages/portfolio-page/portfolio-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { RegisterForVaccinePageComponent } from './components/pages/register-for-vaccine-page/register-for-vaccine-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ServiceDetailsPageOneComponent } from './components/pages/service-details-page-one/service-details-page-one.component';
import { ServiceDetailsPageTwoComponent } from './components/pages/service-details-page-two/service-details-page-two.component';
import { ServicesPageFiveComponent } from './components/pages/services-page-five/services-page-five.component';
import { ServicesPageFourComponent } from './components/pages/services-page-four/services-page-four.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageSixComponent } from './components/pages/services-page-six/services-page-six.component';
import { ServicesPageThreeComponent } from './components/pages/services-page-three/services-page-three.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'index-4', component: HomeDemoFourComponent},
    {path: 'index-5', component: HomeDemoFiveComponent},
    {path: 'index-6', component: HomeDemoSixComponent},
    {path: 'index-7', component: HomeDemoSevenComponent},
    {path: 'index-8', component: HomeDemoEightComponent},
    {path: 'about-us', component: AboutPageOneComponent},
    {path: 'about-us-2', component: AboutPageTwoComponent},
    {path: 'about-us-3', component: AboutPageThreeComponent},
    {path: 'dentists', component: DentistsPageComponent},
    {path: 'doctors', component: DoctorsPageComponent},
    {path: 'dentist-details', component: DentistDetailsPageComponent},
    {path: 'portfolio', component: PortfolioPageComponent},
    {path: 'portfolio-details', component: PortfolioDetailsPageComponent},
    {path: 'services', component: ServicesPageOneComponent},
    {path: 'services-2', component: ServicesPageTwoComponent},
    {path: 'services-3', component: ServicesPageThreeComponent},
    {path: 'services-4', component: ServicesPageFourComponent},
    {path: 'services-5', component: ServicesPageFiveComponent},
    {path: 'services-6', component: ServicesPageSixComponent},
    {path: 'service-details', component: ServiceDetailsPageOneComponent},
    {path: 'service-details-2', component: ServiceDetailsPageTwoComponent},
    {path: 'appointment', component: AppointmentPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'how-vaccines-work', component: HowVaccinesWorkPageComponent},
    {path: 'register-for-vaccine', component: RegisterForVaccinePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact-us', component: ContactPageOneComponent},
    {path: 'contact-us-2', component: ContactPageTwoComponent},
    {path: 'contact-us-3', component: ContactPageThreeComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
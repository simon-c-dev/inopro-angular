import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component'
import { HomeComponent} from "./components/pages/home/home.component";
import { ContactPageComponent} from "./components/pages/contact-page/contact-page.component";
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ServiceDetailsPageTwoComponent } from './components/pages/service-details-page-two/service-details-page-two.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutPageOneComponent},
    {path: 'service-details-2', component: ServiceDetailsPageTwoComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

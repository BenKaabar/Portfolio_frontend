import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { ResumeComponent } from './components/resumecomponents/resume/resume.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeExperienceComponent } from './components/resumecomponents/resume-experience/resume-experience.component';
import { ResumeEducationComponent } from './components/resumecomponents/resume-education/resume-education.component';
import { ResumeSkillsComponent } from './components/resumecomponents/resume-skills/resume-skills.component';
import { ResumeAboutMeComponent } from './components/resumecomponents/resume-about-me/resume-about-me.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { LoginComponent } from './components/dashboard/login/login.component';
import { DashboardWorkComponent } from './components/dashboard/dashboard-work/dashboard-work.component';
import { DashboardContactComponent } from './components/dashboard/dashboard-contact/dashboard-contact.component';
import { CommonModule } from '@angular/common';
import { DashboardResumeEducationComponent } from './components/dashboard/dashboard-resume-education/dashboard-resume-education.component';
import { DashboardResumeExperienceComponent } from './components/dashboard/dashboard-resume-experience/dashboard-resume-experience.component';
import { HttpInterceptorInterceptor } from './interceptor/http-interceptor.interceptor';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SkeletonLoaderComponent } from './shared/skeleton-loader/skeleton-loader.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    ResumeComponent,
    WorkComponent,
    ContactComponent,
    ResumeExperienceComponent,
    ResumeEducationComponent,
    ResumeSkillsComponent,
    ResumeAboutMeComponent,
    WorkDetailsComponent,
    LoginComponent,
    DashboardWorkComponent,
    DashboardContactComponent,
    DashboardResumeEducationComponent,
    DashboardResumeExperienceComponent,
    PageNotFoundComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: HttpInterceptorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

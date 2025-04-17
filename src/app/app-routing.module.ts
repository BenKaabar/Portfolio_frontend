import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resumecomponents/resume/resume.component';
import { ResumeExperienceComponent } from './components/resumecomponents/resume-experience/resume-experience.component';
import { ResumeEducationComponent } from './components/resumecomponents/resume-education/resume-education.component';
import { ResumeSkillsComponent } from './components/resumecomponents/resume-skills/resume-skills.component';
import { ResumeAboutMeComponent } from './components/resumecomponents/resume-about-me/resume-about-me.component';
import { WorkComponent } from './components/work/work.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { LoginComponent } from './components/dashboard/login/login.component';
import { DashboardContactComponent } from './components/dashboard/dashboard-contact/dashboard-contact.component';
import { DashboardResumeExperienceComponent } from './components/dashboard/dashboard-resume-experience/dashboard-resume-experience.component';
import { DashboardResumeEducationComponent } from './components/dashboard/dashboard-resume-education/dashboard-resume-education.component';
import { DashboardWorkComponent } from './components/dashboard/dashboard-work/dashboard-work.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "Home", component:HomeComponent},
  {path: "Services", component:ServiceComponent},
  {path: "Contact", component:ContactComponent},
  {path: "Work", component:WorkComponent},
  {path: "WorkDetail", component:WorkDetailsComponent},
  {path: "Login", component:LoginComponent},
  {path: "DashboardContact", component:DashboardContactComponent, canActivate: [AuthGuard]},
  {path: "DashboardWork", component:DashboardWorkComponent, canActivate: [AuthGuard]},
  {path: "DashboardEducation", component:DashboardResumeEducationComponent, canActivate: [AuthGuard]},
  {path: "DashboardExperience", component:DashboardResumeExperienceComponent, canActivate: [AuthGuard]},
  {path: "Resume", component:ResumeComponent, children:[
    {path: "Experience", component:ResumeExperienceComponent},
    {path: "Education", component:ResumeEducationComponent},
    {path: "Skills", component:ResumeSkillsComponent},
    {path: "AboutMe", component:ResumeAboutMeComponent},
    {path: '', redirectTo: '/Education', pathMatch: 'full' }
  ]},
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

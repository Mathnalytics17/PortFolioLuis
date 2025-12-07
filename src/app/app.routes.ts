import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/aboutme/aboutme.component';
import { CvComponent } from './pages/cv/cv.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    {

        path:'',
        component: HomeComponent
    },
  
     {
        path:'about-me',
        component:AboutMeComponent
    },
     {
        path:'cv',
        component:CvComponent
    },
     {
        path:'projects',
        component:ProjectsComponent
    },
     {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'**',
        redirectTo:''
    }
];

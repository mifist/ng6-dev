import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Dev
import { FormGroupComponent } from './dev/form-group/form-group.component';
import { TestFormComponent } from './dev/test-form/test-form.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  // pages
  { path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  } ,
  { path: 'dashboard',
    component:  DashboardComponent
  },
  { path: 'not-found',
    component: NotFoundComponent
  },
  //dev
  { path: 'test-form',
    component: TestFormComponent
  },
  { path: 'form-group',
    component: FormGroupComponent
  },
  // end
  { path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

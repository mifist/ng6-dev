import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// Header
import { MenuComponent } from './header/menu/menu.component';
import { SearchComponent } from './header/search/search.component';
import { BrandComponent } from './header/brand/brand.component';
import { DropdownComponent } from './header/menu/dropdown/dropdown.component';
import { NavigationComponent } from './header/navigation/navigation.component';
// Dev
import { FormGroupComponent } from './dev/form-group/form-group.component';
import { TestFormComponent } from './dev/test-form/test-form.component';


@NgModule({
	declarations: [
		AppComponent,
		// pages
		HomeComponent,
		NotFoundComponent,
		DashboardComponent,
		MenuComponent,
		SearchComponent,
		BrandComponent,
		DropdownComponent,
		FormGroupComponent,
		TestFormComponent,
		NavigationComponent,

	],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

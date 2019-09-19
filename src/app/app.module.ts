import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { FoodComponent } from './components/food/food.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { StartImageComponent } from './components/start-image/start-image.component';
import { TextImageComponent } from './components/text-image/text-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkoutComponent,
    FoodComponent,
    AboutComponent,
    HomeComponent,
    StartImageComponent,
    TextImageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

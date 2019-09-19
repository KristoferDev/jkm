import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'workout',
    loadChildren: () =>
      import('./components/workout/workout.module').then(
        mod => mod.WorkoutModule
      )
  },
  {
    path: 'food',
    loadChildren: () =>
      import('./components/food/food.module').then(mod => mod.FoodModule)
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

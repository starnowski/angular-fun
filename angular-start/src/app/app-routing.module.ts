import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSelectExampleComponent } from './ng-select-example/ng-select-example.component';
import { SelectScrollExampleComponent } from './select-scroll-example/select-scroll-example.component';

const routes: Routes = [
  { path: 'first-component', component: FirstRouteComponent },
  { path: 'second-component', component: SecondRouteComponent },
  { path: 'ng-select-example-component', component: NgSelectExampleComponent },
  { path: 'select-scroll-example', component: SelectScrollExampleComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

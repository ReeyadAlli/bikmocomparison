import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComparisonComponent } from './service-comparison/service-comparison.component';
import { PartsComparisonComponent } from './parts-comparison/parts-comparison.component';
import { NewBikeComparisonComponent } from './new-bike-comparison/new-bike-comparison.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'service-comparison',
    component: ServiceComparisonComponent,
    data: { title: 'Service Comparison' }
  },
  {
    path: 'parts-comparison',
    component: PartsComparisonComponent,
    data: { title: 'Parts Comparison' }
  },
  {
    path: 'new-bike-comparison',
    component: NewBikeComparisonComponent,
    data: { title: 'New Comparison' }
  },
  { path: '',
    redirectTo: 'service-comparison',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class BikeComparisonRouterModule {}

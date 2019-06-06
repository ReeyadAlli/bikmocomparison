import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { BikeComparisonRouterModule } from './router.module';

// Custom Components
import { AppComponent } from './app.component';
import { BikeComparisonMaterialModule } from './bike-comparison-material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartsComparisonComponent } from './parts-comparison/parts-comparison.component';
import { ServiceComparisonComponent } from './service-comparison/service-comparison.component';
import { NewBikeComparisonComponent } from './new-bike-comparison/new-bike-comparison.component';

@NgModule({
  declarations: [
  AppComponent,
  ServiceComparisonComponent,
  PartsComparisonComponent,
  NewBikeComparisonComponent,
  PageNotFoundComponent],
  imports: [
    BrowserModule,
    BikeComparisonRouterModule,
    BikeComparisonMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

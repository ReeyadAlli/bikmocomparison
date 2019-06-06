import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikmo-comparison';
  comparisonLinks = [
    { path: 'service-comparison', label: 'Service' },
    { path: 'parts-comparison', label: 'Parts' },
    { path: 'new-comparison', label: 'New Bike' }
  ];
}

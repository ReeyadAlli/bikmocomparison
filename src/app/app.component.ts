import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikmo-comparison';
  comparisonLinks = [
    { path: 'service-comparison', label: 'Service', icon: 'autorenew'},
    { path: 'parts-comparison', label: 'Parts', icon: 'settings'},
    { path: 'new-bike-comparison', label: 'New Bike', icon: 'motorcycle'}
  ];
}

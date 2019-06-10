import { Component, OnInit } from '@angular/core';
import { BikeServiceModel } from '../Models/BikeService';
import { Provider } from '../Models/Provider';
@Component({
  selector: 'app-service-comparison',
  templateUrl: './service-comparison.component.html',
  styleUrls: ['./service-comparison.component.css']
})
export class ServiceComparisonComponent implements OnInit {
  loading = true;
  availableServices: BikeServiceModel[];

  constructor() {
    const evans  = new Provider('Evans', 'https://www.thehive-network.com/wp-content/uploads/2017/07/logo-EvansCycles-full.jpg');
    const halfords  = new Provider('Halfords', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Halfords_logo.svg/241px-Halfords_logo.svg.png');

    this.availableServices = [
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', halfords),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', halfords),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', evans),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', evans),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', halfords),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', evans),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', halfords),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', halfords),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', halfords),
      new BikeServiceModel('Bronze - Entry Level', 'Gold', '£100', 'Entry level service', halfords),
    ];
   }

  ngOnInit() {
    setTimeout((_ = this) => {_.loading = false; }, 4000);
  }

}

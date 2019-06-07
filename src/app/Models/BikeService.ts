import { Provider } from './Provider';
export class BikeServiceModel {
  name: string;
  level: string;
  cost: string;

  provider: Provider;
  locationName: string;
  geoLocation: string;
  description: string;

  constructor(name: string, level: string, cost: string,  description: string, provider: Provider) {
    this.name = name;
    this.level = level;
    this.cost = cost;
    this.provider = provider;
    this.description = description;
  }
}

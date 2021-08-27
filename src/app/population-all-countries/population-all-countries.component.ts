import { Component, Input } from '@angular/core';
import { PopulationService } from '../population.service';

@Component({
  selector: 'population-all-countries',
  templateUrl: './population-all-countries.component.html',
  styleUrls: ['./population-all-countries.component.css']
})
export class PopulationAllCountriesComponent {
  constructor(private _api: PopulationService) {}

  totalPopulation = 0;
  countries = [];

  ngOnInit(): void {
    this._api.getLargestPopulation().subscribe(data => {
      this.countries = [...data.body.countries.slice(0, 20)];
    });
  }
}

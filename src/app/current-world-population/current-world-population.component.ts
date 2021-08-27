import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopulationService } from '../population.service';

@Component({
  selector: 'current-world-population',
  templateUrl: './current-world-population.component.html',
  styleUrls: ['./current-world-population.component.css']
})
export class CurrentWorldPopulationComponent {
  constructor(
    private _api: PopulationService
  ) {}

  totalPopulation = 0;

  ngOnInit(): void {
    this._api.getPopulation().subscribe(data => {
      this.totalPopulation = data.body.world_population;
    });
  }
}

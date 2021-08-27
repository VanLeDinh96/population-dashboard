import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentWorldPopulationComponent } from './current-world-population/current-world-population.component';
import { LargestPopulationComponent } from './largest-population/largest-population.component';
import { PopulationAllCountriesComponent } from './population-all-countries/population-all-countries.component';

const routes: Routes = [
  {
    path: 'current-world-population',
    component: CurrentWorldPopulationComponent,
  },
  {
    path: 'largest-population',
    component: LargestPopulationComponent,
  },
  {
    path: 'population-all-countries',
    component: PopulationAllCountriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

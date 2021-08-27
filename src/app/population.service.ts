import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  constructor(private http: HttpClient) {}

  urlPopulation = 'https://world-population.p.rapidapi.com/worldpopulation';
  urlLargestPopulation =
    'https://world-population.p.rapidapi.com/allcountriesname';

  getPopulation(): Observable<any> {
    return this.http.get<any>(this.urlPopulation, {
      headers: {
        'x-rapidapi-host': 'world-population.p.rapidapi.com',
        'x-rapidapi-key': 'e66e232d7cmshc1b666e29e3d803p1846ebjsnd4e0a3ac621e'
      }
    });
  }

  getLargestPopulation(): Observable<any> {
    return this.http.get<any>(this.urlLargestPopulation, {
      headers: {
        'x-rapidapi-host': 'world-population.p.rapidapi.com',
        'x-rapidapi-key': 'e66e232d7cmshc1b666e29e3d803p1846ebjsnd4e0a3ac621e'
      }
    });
  }
}

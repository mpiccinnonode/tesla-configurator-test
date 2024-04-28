import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car-model.model';

@Injectable({
  providedIn: 'root',
})
export class ModelsProxyService {
  private readonly _modelsEndpoint = '/models';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this._modelsEndpoint);
  }
}

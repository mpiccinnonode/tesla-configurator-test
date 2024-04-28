import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigOptions } from '../models/config-options.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsProxyService {
  private readonly _optionsBaseEndpoint = '/options';

  constructor(private http: HttpClient) {}

  getAll(modelCode: string): Observable<ConfigOptions> {
    return this.http.get<ConfigOptions>(
      `${this._optionsBaseEndpoint}/${modelCode}`,
    );
  }
}

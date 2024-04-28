import { Injectable, signal } from '@angular/core';
import { Selection } from '../models/selection.model';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  defaultValue: Selection = {
    carModel: undefined,
    color: undefined,
  };

  currentSelection = signal<Selection>({ ...this.defaultValue });

  constructor() {}
}

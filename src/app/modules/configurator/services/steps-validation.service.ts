import { computed, Injectable } from '@angular/core';
import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root',
})
export class StepsValidationService {
  stepOneValid = computed<boolean>(() => {
    const { carModel, color } = this.selectionService.currentSelection();
    return !!carModel && !!color;
  });

  stepTwoValid = computed<boolean>(() => {
    const { config } = this.selectionService.currentSelection();
    return !!config;
  });

  constructor(private selectionService: SelectionService) {}
}

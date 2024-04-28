import { computed, Injectable } from '@angular/core';
import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root',
})
export class StepsValidationService {
  stepOneValid = computed(() => {
    const { carModel, color } = this.selectionService.currentSelection();
    return !!carModel && !!color;
  });

  constructor(private selectionService: SelectionService) {}
}
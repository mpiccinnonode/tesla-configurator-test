import { Component, computed } from '@angular/core';
import { SelectionService } from '../../services/selection.service';
import { CarModel } from '../../models/car-model.model';
import { Color } from '../../models/color.model';

@Component({
  selector: 'configuration-image',
  standalone: true,
  imports: [],
  templateUrl: './configuration-image.component.html',
  styleUrl: './configuration-image.component.scss',
})
export class ConfigurationImageComponent {
  carModel = computed<CarModel | undefined>(
    () => this.selectionService.currentSelection().carModel,
  );
  color = computed<Color | undefined>(
    () => this.selectionService.currentSelection().color,
  );

  imageSourceURI = computed<string>(
    () => `assets/${this.carModel()?.code}/${this.color()?.code}.jpg`,
  );

  constructor(private selectionService: SelectionService) {}
}

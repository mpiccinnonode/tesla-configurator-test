import { Component, computed } from '@angular/core';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'configuration-image',
  standalone: true,
  imports: [],
  templateUrl: './configuration-image.component.html',
  styleUrl: './configuration-image.component.scss',
})
export class ConfigurationImageComponent {
  carModel = computed(() => this.selectionService.currentSelection().carModel);
  color = computed(() => this.selectionService.currentSelection().color);

  imageSourceURI = computed(
    () => `assets/${this.carModel()?.code}/${this.color()?.code}.jpg`,
  );

  constructor(private selectionService: SelectionService) {}
}

import { Component, computed, DestroyRef, OnInit, signal } from '@angular/core';
import { ModelsProxyService } from '../../services/models-proxy.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CarModel } from '../../models/car-model.model';
import { FormsModule } from '@angular/forms';
import { SelectionService } from '../../services/selection.service';
import { Color } from '../../models/color.model';
import { ConfigurationImageComponent } from '../configuration-image/configuration-image.component';

@Component({
  selector: 'app-model-and-color',
  standalone: true,
  imports: [FormsModule, ConfigurationImageComponent],
  templateUrl: './model-and-color.component.html',
  styleUrl: './model-and-color.component.scss',
})
export class ModelAndColorComponent implements OnInit {
  carModel?: CarModel;
  color?: Color;

  carModels = signal<CarModel[]>([]);
  colors = computed<Color[]>(() => this._selectedCarModel()?.colors ?? []);

  private _selectedCarModel = computed<CarModel | undefined>(() => {
    this.carModel = this.selectionService.currentSelection().carModel;
    return this.carModel;
  });

  constructor(
    private modelsProxyService: ModelsProxyService,
    private selectionService: SelectionService,
    private destroyRef: DestroyRef,
  ) {
    this.color = this.selectionService.currentSelection()?.color;
  }

  ngOnInit(): void {
    this._fetchModels();
  }

  updateSelectedCarModel(): void {
    this.color = undefined;
    this.selectionService.currentSelection.set({
      ...this.selectionService.defaultValue,
      carModel: this.carModel,
    });
  }

  updateSelectedColor(): void {
    this.selectionService.currentSelection.update((value) => ({
      ...value,
      color: this.color,
    }));
  }

  private _fetchModels() {
    this.modelsProxyService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items) => this.carModels.set(items));
  }
}

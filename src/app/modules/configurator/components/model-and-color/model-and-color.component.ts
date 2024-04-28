import { Component, computed, DestroyRef, OnInit } from '@angular/core';
import { ModelsProxyService } from '../../services/models-proxy.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CarModel } from '../../models/car-model.model';
import { FormsModule } from '@angular/forms';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-model-and-color',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './model-and-color.component.html',
  styleUrl: './model-and-color.component.scss',
})
export class ModelAndColorComponent implements OnInit {
  carModels: CarModel[] = [];
  carModel?: CarModel;

  selectedCarModel = computed<CarModel | undefined>(() => {
    this.carModel = this.selectionService.currentSelection().carModel;
    return this.carModel;
  });

  constructor(
    private modelsProxyService: ModelsProxyService,
    private selectionService: SelectionService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchModels();
  }

  updateSelectedCarModel(): void {
    this.selectionService.currentSelection.update((value) => ({
      ...value,
      carModel: this.carModel,
    }));
  }

  private _fetchModels() {
    this.modelsProxyService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items) => (this.carModels = items));
  }
}

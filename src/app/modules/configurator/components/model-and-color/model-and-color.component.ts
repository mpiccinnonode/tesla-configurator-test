import { Component, DestroyRef, OnInit } from '@angular/core';
import { ModelsProxyService } from '../../services/models-proxy.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CarModel } from '../../models/car-model.model';

@Component({
  selector: 'app-model-and-color',
  standalone: true,
  imports: [],
  templateUrl: './model-and-color.component.html',
  styleUrl: './model-and-color.component.scss',
})
export class ModelAndColorComponent implements OnInit {
  carModels: CarModel[] = [];

  constructor(
    private modelsProxyService: ModelsProxyService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchModels();
  }

  private _fetchModels() {
    this.modelsProxyService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items) => (this.carModels = items));
  }
}

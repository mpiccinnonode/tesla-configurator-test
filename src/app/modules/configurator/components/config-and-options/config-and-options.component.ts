import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { ConfigOptionsProxyService } from '../../services/config-options-proxy.service';
import { SelectionService } from '../../services/selection.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConfigurationImageComponent } from '../configuration-image/configuration-image.component';
import { ConfigOptions } from '../../models/config-options.model';
import { FormsModule } from '@angular/forms';
import { Config } from '../../models/config.model';
import { SelectComparatorHelper } from '../../helpers/select-comparator.helper';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-config-and-options',
  standalone: true,
  imports: [ConfigurationImageComponent, FormsModule, CurrencyPipe],
  templateUrl: './config-and-options.component.html',
  styleUrl: './config-and-options.component.scss',
})
export class ConfigAndOptionsComponent implements OnInit {
  configOptions = signal<ConfigOptions | undefined>(undefined);

  config?: Config;
  towHitch = false;
  yoke = false;

  protected readonly selectComparatorHelper = SelectComparatorHelper;

  constructor(
    private configOptionsProxyService: ConfigOptionsProxyService,
    private selectionService: SelectionService,
    private destroyRef: DestroyRef,
  ) {
    this.config = this.selectionService.currentSelection()?.config;
    this.towHitch = this.selectionService.currentSelection()?.towHitch;
    this.yoke = this.selectionService.currentSelection()?.yoke;
  }

  ngOnInit(): void {
    this._fetchOptions();
  }

  updateConfigSelection(): void {
    this.towHitch = false;
    this.yoke = false;
    this.updateTotalSelection();
  }

  updateTotalSelection(): void {
    this.selectionService.currentSelection.update((value) => ({
      ...value,
      config: this.config,
      towHitch: this.towHitch,
      yoke: this.yoke,
    }));
  }

  private _fetchOptions(): void {
    const carCode = this.selectionService.currentSelection().carModel?.code;
    if (carCode) {
      this.configOptionsProxyService
        .getAll(carCode)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((res) => this.configOptions.set(res));
    }
  }
}

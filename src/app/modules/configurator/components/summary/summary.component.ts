import { Component, computed } from '@angular/core';
import { SelectionService } from '../../services/selection.service';
import { Selection } from '../../models/selection.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  currentSelection = computed<Selection>(() =>
    this.selectionService.currentSelection(),
  );

  totalPrice = computed<number>(() => {
    const colorPrice = this.currentSelection().color?.price ?? 0;
    const configPrice = this.currentSelection().config?.price ?? 0;
    const towPrice = this.currentSelection().towHitch ? this.optionalPrice : 0;
    const yokePrice = this.currentSelection().yoke ? this.optionalPrice : 0;
    return colorPrice + configPrice + towPrice + yokePrice;
  });

  protected readonly optionalPrice = 1000;

  constructor(private selectionService: SelectionService) {}
}

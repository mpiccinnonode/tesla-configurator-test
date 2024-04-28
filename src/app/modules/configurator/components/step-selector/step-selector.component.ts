import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-step-selector',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './step-selector.component.html',
  styleUrl: './step-selector.component.scss',
})
export class StepSelectorComponent {}

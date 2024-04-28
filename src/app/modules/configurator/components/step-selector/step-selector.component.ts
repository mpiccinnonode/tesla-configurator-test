import { Component, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StepsValidationService } from '../../services/steps-validation.service';

@Component({
  selector: 'app-step-selector',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './step-selector.component.html',
  styleUrl: './step-selector.component.scss',
})
export class StepSelectorComponent {
  stepOneValid = computed(() => this.stepsValidationService.stepOneValid());

  constructor(private stepsValidationService: StepsValidationService) {}
}

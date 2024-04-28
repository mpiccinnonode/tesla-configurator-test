import { Component, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StepsValidationService } from '../../services/steps-validation.service';
import { ConfigurationImageComponent } from '../configuration-image/configuration-image.component';

@Component({
  selector: 'app-step-selector',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ConfigurationImageComponent],
  templateUrl: './step-selector.component.html',
  styleUrl: './step-selector.component.scss',
})
export class StepSelectorComponent {
  stepOneValid = computed<boolean>(() =>
    this.stepsValidationService.stepOneValid(),
  );
  stepTwoValid = computed<boolean>(() =>
    this.stepsValidationService.stepTwoValid(),
  );

  constructor(private stepsValidationService: StepsValidationService) {}
}

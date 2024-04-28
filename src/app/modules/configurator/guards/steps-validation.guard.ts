import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { StepsValidationService } from '../services/steps-validation.service';

export const stepOneValidationGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const stepsValidationService = inject(StepsValidationService);
  const router = inject(Router);
  return (
    stepsValidationService.stepOneValid() || router.parseUrl('configurator')
  );
};

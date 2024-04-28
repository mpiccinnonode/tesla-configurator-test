import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StepSelectorComponent } from './components/step-selector/step-selector.component';
import { ModelAndColorComponent } from './components/model-and-color/model-and-color.component';
import { ConfigAndOptionsComponent } from './components/config-and-options/config-and-options.component';
import {
  stepOneValidationGuard,
  stepTwoValidationGuard,
} from './guards/steps-validation.guard';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: StepSelectorComponent,
    children: [
      {
        path: 'model',
        component: ModelAndColorComponent,
      },
      {
        path: 'config',
        component: ConfigAndOptionsComponent,
        canActivate: [stepOneValidationGuard],
      },
      {
        path: 'summary',
        component: SummaryComponent,
        canActivate: [stepTwoValidationGuard],
      },
      {
        path: '',
        redirectTo: 'model',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguratorRoutingModule {}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StepSelectorComponent } from './components/step-selector/step-selector.component';
import { ModelAndColorComponent } from './components/model-and-color/model-and-color.component';

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

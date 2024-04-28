import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StepSelectorComponent } from './components/step-selector/step-selector.component';

const routes: Routes = [
  {
    path: '',
    component: StepSelectorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguratorRoutingModule {}

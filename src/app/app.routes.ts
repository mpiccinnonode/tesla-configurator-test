import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'configurator',
    loadChildren: () =>
      import('./modules/configurator/configurator.module').then(
        (m) => m.ConfiguratorModule,
      ),
  },
  {
    path: '',
    redirectTo: 'configurator',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'configurator',
  },
];

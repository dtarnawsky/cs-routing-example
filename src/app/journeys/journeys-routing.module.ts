import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneysPage } from './journeys.page';

const routes: Routes = [
  {
    path: '',
    component: JourneysPage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('../overview/overview.module').then(m => m.OverviewPageModule)
      },
      {
        path: 'steps',
        loadChildren: () => import('../steps/steps.module').then(m => m.StepsPageModule)
      },
      {
        path: 'resources',
        loadChildren: () => import('../resources/resources.module').then(m => m.ResourcesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneysPageRoutingModule {}

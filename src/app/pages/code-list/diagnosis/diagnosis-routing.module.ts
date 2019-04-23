import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DiagnosisComponent} from './diagnosis.component';
import {DiagnosisTableComponent} from './table/diagnosis-table.component';

const routes: Routes = [{
  path: '',
  component: DiagnosisComponent,
  children: [{
    path: 'diagnosis-table',
    component: DiagnosisTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosisRoutingModule { }

export const routedComponents = [
  DiagnosisComponent,
  DiagnosisTableComponent,
];


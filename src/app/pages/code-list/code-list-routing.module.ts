import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeListComponent } from './code-list.component';

const routes: Routes = [{
  path: '',
  component: CodeListComponent,
  children: [
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CodeListRoutingModule {

}

export const routedComponents = [
  CodeListComponent,
];

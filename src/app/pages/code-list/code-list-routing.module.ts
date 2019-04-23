import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeListComponent } from './code-list.component';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [{
  path: '',
  component: CodeListComponent,
  children: [{
    path: 'diagnosis',
    component: DiagnosisComponent,
  } ,
    {
     path: 'product',
     component: ProductComponent,
    }],
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
  ProductComponent,
  DiagnosisComponent,
];

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CodeListRoutingModule, routedComponents } from './code-list-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CodeListRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CodeListModule { }

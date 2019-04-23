import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CodeListRoutingModule, routedComponents } from './code-list-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    CodeListRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CodeListModule { }

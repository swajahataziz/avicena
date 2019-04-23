import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';

import {ThemeModule} from '../../../@theme/theme.module';
import {DiagnosisRoutingModule, routedComponents} from './diagnosis-routing,module';

@NgModule({
  imports: [
    ThemeModule,
    DiagnosisRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class DiagnosisModule { }

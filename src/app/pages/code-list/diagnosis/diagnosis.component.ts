import {Component, OnDestroy} from '@angular/core';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-diagnosis',
  template: '<router-outlet></router-outlet>',
})
export class DiagnosisComponent  {
}

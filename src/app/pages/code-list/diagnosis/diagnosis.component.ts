import {Component, OnDestroy} from '@angular/core';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-diagnosis',
  styleUrls: ['./diagnosis.component.scss'],
  templateUrl: './diagnosis.component.html',
})
export class DiagnosisComponent implements OnDestroy {

  private alive = true;

  ngOnDestroy() {
    this.alive = false;
  }
}

import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {

  settings = {
    columns: {
      status: {
        title: 'Status',
        type: 'string',
      },
      sourceCode: {
        title: 'Source Code',
        type: 'string',
      },
      sourceTerm: {
        title: 'Source Term',
        type: 'string',
      },
      codeText: {
        title: 'Code Text',
        type: 'string',
      },
      frequency: {
        title: 'Frequency',
        type: 'number',
      },
      match: {
        title: 'Match Score',
        type: 'number',
      },
      conceptId: {
        title: 'Concept Id',
        type: 'string',
      },
      conceptName: {
      conceptName: {
        title: 'Concept Name',
        type: 'string',
      },
      conceptCode: {
        title: 'Concept Code',
        type: 'string',
      },
      conceptClass: {
        title: 'Concept Class',
        type: 'number',
      },
      codingSystem: {
        title: 'Coding System',
        type: 'string',
      },
      notes: {
        title: 'Notes',
        type: 'string',
      },
    },
  }};

  source: LocalDataSource = new LocalDataSource();
  private rowData: Object;

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  rowSelect(event): void {
    this.rowData = event.data.toString(); // TODO: add method for making use of data
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupEditorComponent } from './popup-editor/popup-editor.component';
import { ButtonRendererComponent } from './button-renderer.component';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css'],
})
export class Lab2Component {
  columnDefs = [
    { field: 'item', headerName: 'Item' },
    { field: 'sequence', headerName: 'Sequence' },
    {
      headerName: 'Operation',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.openPopupEditor.bind(this),
        label: 'Edit',
      },
    },
  ];

  frameworkComponents = {
    buttonRenderer: ButtonRendererComponent,
  };

  tableData = [
    {
      item: '12345K',
      sequence: '12345K-01,12345K-02,12345K-03,12345K-04,12345K-05',
    },
    {
      item: '23456L',
      sequence: '23456L-01,23456L-02,23456L-03,23456L-04,23456L-05',
    },
    {
      item: '34567M',
      sequence: '34567M-01,34567M-02,34567M-03,34567M-04,34567M-05',
    },
    {
      item: '45678N',
      sequence: '45678N-01,45678N-02,45678N-03,45678N-04,45678N-05',
    },
    {
      item: '56789O',
      sequence: '56789O-01,56789O-02,56789O-03,56789O-04,56789O-05',
    },
    {
      item: '67890P',
      sequence: '67890P-01,67890P-02,67890P-03,67890P-04,67890P-05',
    },
    {
      item: '78901Q',
      sequence: '78901Q-01,78901Q-02,78901Q-03,78901Q-04,78901Q-05',
    },
    {
      item: '89012R',
      sequence: '89012R-01,89012R-02,89012R-03,89012R-04,89012R-05',
    },
    {
      item: '90123S',
      sequence: '90123S-01,90123S-02,90123S-03,90123S-04,90123S-05',
    },
    {
      item: '01234T',
      sequence: '01234T-01,01234T-02,01234T-03,01234T-04,01234T-05',
    },
  ];

  constructor(private dialog: MatDialog) {}

  openPopupEditor(params: any) {
    this.dialog.open(PopupEditorComponent, {
      data: params.data,
    });
  }
}

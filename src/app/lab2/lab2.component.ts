import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupEditorComponent } from './popup-editor/popup-editor.component';
import { ButtonRendererComponent } from './button-renderer.component';
import { GridOptions } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css'],
})
export class Lab2Component {
  columnDefs = [
    { field: 'item', headerName: 'Item', width: 100 },
    { field: 'sequence', headerName: 'Sequence', width: 400 },
    {
      headerName: 'Operation',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: (rowData: any) => this.openPopupEditor(rowData),
        label: 'Edit',
      },
      width: 80,
    },
  ];

  gridOptions: GridOptions = {
    rowHeight: 40,
  };
  private gridApi;

  frameworkComponents = {
    buttonRenderer: ButtonRendererComponent,
  };

  tableData = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.tableData = [
      { item: '12345K', sequence: '12345K-01,12345K-02,12345K-03' },
      { item: '23456L', sequence: '23456L-01,23456L-04,23456L-05' },
      { item: '34567M', sequence: '34567M-01,34567M-02,34567M-03,34567M-05' },
      { item: '45678N', sequence: '45678N-02,45678N-03,45678N-04' },
      { item: '56789O', sequence: '56789O-03,56789O-04,56789O-05' },
      { item: '67890P', sequence: '67890P-01,67890P-03,67890P-05' },
      { item: '78901Q', sequence: '78901Q-01,78901Q-02,78901Q-03,78901Q-04' },
      { item: '89012R', sequence: '89012R-01,89012R-05' },
      { item: '90123S', sequence: '90123S-04' },
      { item: '01234T', sequence: '01234T-02,01234T-03,01234T-05' },
    ];
  }

  onGridReady(params: any) {
    this.gridOptions = params.api;
    this.gridApi = params.api;
    this.autoSizeColumns();
  }

  autoSizeColumns() {
    const allColumnIds: string[] = [];
    this.columnDefs.forEach((columnDef) => {
      allColumnIds.push(columnDef.field || columnDef.headerName);
    });
  }

  openPopupEditor(rowData: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = rowData.data;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.position = { left: '100px', top: '0px' };
    dialogConfig.autoFocus = false;

    // Pass dialogConfig as the only argument
    const dialogRef = this.dialog.open(PopupEditorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.tableData.findIndex(
          (row) => row.item === result.item
        );
        if (index > -1) {
          this.tableData[index] = result;
        }
        this.gridApi.setRowData(this.tableData);
      }
    });
  }
}

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button
      type="button"
      class="btn btn-primary"
      (click)="onClick($event)"
    >
      <i class="fas fa-pen"></i>
    </button>
  `
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  onClick(event: any): void {
    this.params.onClick(this.params);
  }

  refresh(params: any): boolean {
    return false;
  }
}
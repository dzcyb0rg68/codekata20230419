import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupEditorComponent } from './popup-editor.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PopupEditorComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [PopupEditorComponent],
})
export class PopupEditorModule {}

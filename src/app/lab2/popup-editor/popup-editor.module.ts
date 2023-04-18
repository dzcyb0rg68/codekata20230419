import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopupEditorComponent } from './popup-editor.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PopupEditorComponent],
  imports: [CommonModule, FormsModule, MatDialogModule],
  exports: [PopupEditorComponent],
})
export class PopupEditorModule {}

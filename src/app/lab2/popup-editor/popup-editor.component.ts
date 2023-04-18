import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-editor',
  templateUrl: './popup-editor.component.html',
  styleUrls: ['./popup-editor.component.css']
})
export class PopupEditorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
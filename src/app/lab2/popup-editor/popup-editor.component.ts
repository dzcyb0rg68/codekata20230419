import { Component, Inject, OnInit, ElementRef } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-editor',
  templateUrl: './popup-editor.component.html',
  styleUrls: ['./popup-editor.component.css'],
})
export class PopupEditorComponent implements OnInit {
  sequences: { value: string; checked: boolean }[] = [];
  private readonly dialogRef: MatDialogRef<PopupEditorComponent>;
  private readonly triggerElementRef: ElementRef;
  constructor(
    dialogRef: MatDialogRef<PopupEditorComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { item: string; sequence: string; trigger: ElementRef }
  ) {
    this.triggerElementRef = data.trigger;
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
    matDialogConfig.position = {
      left: `${rect.left}px`,
      top: `${rect.bottom - 100}px`,
    };
    this.dialogRef.updatePosition(matDialogConfig.position);
    this.sequences = this.data.sequence.split(',').map((seq) => ({
      value: seq,
      checked: true,
    }));
    console.log('rect.left', rect.left);
  }

  save() {
    // Convert the sequences array back into a string
    const sequenceString = this.sequences
      .filter((seq) => seq.checked)
      .map((seq) => seq.value)
      .join(',');
    this.dialogRef.close({ item: this.data.item, sequence: sequenceString });
  }

  cancel() {
    this.dialogRef.close();
  }
}

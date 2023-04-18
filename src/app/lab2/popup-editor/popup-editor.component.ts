import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-editor',
  templateUrl: './popup-editor.component.html',
  styleUrls: ['./popup-editor.component.css'],
})
export class PopupEditorComponent implements OnInit {
  sequences: { value: string; checked: boolean }[] = [];

  constructor(
    public dialogRef: MatDialogRef<PopupEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: string; sequence: string }
  ) {}

  ngOnInit(): void {
    this.sequences = this.data.sequence.split(',').map((seq) => ({
      value: seq,
      checked: true,
    }));
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

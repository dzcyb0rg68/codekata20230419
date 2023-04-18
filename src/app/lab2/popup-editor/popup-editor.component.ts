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
  listOfSeq: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<PopupEditorComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { item: string; sequence: string }
  ) {}

  ngOnInit(): void {
    if (this.data.item != '') {
      for (let i = 1; i < 6; i++) {
        let seq = '';
        seq = this.data.item + '-0' + i;
        this.listOfSeq.push(seq);
      }
    }

    this.listOfSeq.forEach((x) => {
      if (this.data.sequence.includes(x)) {
        this.sequences.push({
          value: x,
          checked: true,
        });
      } else {
        this.sequences.push({
          value: x,
          checked: false,
        });
      }
    });
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

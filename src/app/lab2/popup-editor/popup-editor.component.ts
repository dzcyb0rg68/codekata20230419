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
    @Inject(MAT_DIALOG_DATA) public data: { item: string; sequence: string }
  ) {}

  ngOnInit(): void {
    // console.log('Data recieved from Lab2Component: ', this.data);

    // prepare the check box list
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

    // console.log('Data after pareparation: ', this.sequences);

    // this is what sequences would look like
    // [
    //   {value: "12345K-01", checked: true},
    //   {value: "12345K-02", checked: true},
    //   {value: "12345K-03", checked: true},
    //   {value: "12345K-04", checked: false},
    //   {value: "12345K-05", checked: false,
    // ];
  }

  save() {
    // What we want to send back to the Lab2Component after editing:
    // {item: "12345K", sequence: "12345K-01,12345K-02"}

    // Challenge: Convert the sequences array back into a string
    // hint: use filter(), map(), and join() methods on this.sequences
    const sequenceString: string = '';

    this.dialogRef.close({ item: this.data.item, sequence: sequenceString });
  }

  cancel() {
    this.dialogRef.close();
  }
}

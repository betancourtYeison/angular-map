import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dialog-edit-marker",
  templateUrl: "./dialog-edit-marker.component.html",
  styleUrls: ["./dialog-edit-marker.component.css"]
})
export class DialogEditMarkerComponent {
  formData: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogEditMarkerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formData = this._formBuilder.group({
      title: data.title,
      description: data.description
    });
  }

  saveMarker() {
    this.dialogRef.close(this.formData.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

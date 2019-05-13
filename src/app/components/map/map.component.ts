import { Component, OnInit } from "@angular/core";
import { Marker } from "src/app/classes/marker.class";
import { MatSnackBar } from "@angular/material";
import { MatDialog } from "@angular/material";
import { DialogEditMarkerComponent } from "../marker/dialog-edit-marker/dialog-edit-marker.component";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];

  lat: number = 3.4032776;
  lng: number = -76.5285164;

  constructor(private _matSnackBar: MatSnackBar, public _matDialog: MatDialog) {
    const MARKERS = localStorage.getItem("markers");
    if (MARKERS) {
      this.markers = JSON.parse(MARKERS);
    }
  }

  ngOnInit() {}

  addMarker(event) {
    const COORDS: { lat: number; lng: number } = event.coords;
    const NEW_MARKER = new Marker(COORDS.lat, COORDS.lng);
    this.markers.push(NEW_MARKER);
    this.saveStorage();
    this._matSnackBar.open("Marcador agregado", "Cerrar", { duration: 3000 });
  }

  removeMarker(index) {
    this.markers.splice(index, 1);
    this.saveStorage();
    this._matSnackBar.open("Marcador borrado", "Cerrar", { duration: 3000 });
  }

  removeAllMarkers() {
    this.markers = [];
    this.saveStorage();
    this._matSnackBar.open("Se han borrado todos los marcadores", "Cerrar", {
      duration: 3000
    });
  }

  saveStorage() {
    localStorage.setItem("markers", JSON.stringify(this.markers));
  }

  openDialog(marker: Marker) {
    const DIALOG_REF = this._matDialog.open(DialogEditMarkerComponent, {
      width: "250px",
      data: marker
    });

    DIALOG_REF.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      marker.title = result.title;
      marker.description = result.description;
      this.saveStorage();
      this._matSnackBar.open("Se ha actualizado el marcador", "Cerrar", {
        duration: 3000
      });
    });
  }
}

// export class Marker {
//   constructor(public lat: number, public lng: number) {}
// }

export class Marker {
  public lat: number;
  public lng: number;

  public title: string = "Sin Título";
  public description: string = "Sin Descripción";

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

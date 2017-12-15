export class Vessel {
  constructor (mmsi, rs, name) {
    this.mmsi = mmsi
    this.rs = rs
    this.name = name
    Object.freeze(this.mmsi)
    Object.freeze(this.rs)
    Object.freeze(this.name)
  }
}

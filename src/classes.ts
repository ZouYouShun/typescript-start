export interface Point {
  x: number;
  y: number;
}
export class PointModel {

  get x() { return this._x; }
  // when set x value, draw the point.
  set x(value) {
    this._x = value;
    this.draw();
  }

  get y(): number { return this._y; }
  // when set x value, draw the point.
  set y(value: number) {
    this._y = value;
    this.draw();
  }

  private _x: number;
  private _y: number;

  constructor({ x, y }: Point) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(this.x, this.y);
  }

  distance({ x, y }: Point) {
    return Math.sqrt(
      Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)
    );
  }
}

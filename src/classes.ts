interface Point {
  x: number;
  y: number;
}

export let drawPoint = (point: Point) => {
  // ...
  return 0;
}

export let getDistance = (pointA: Point, pointB: Point) => {
  // ...
}

drawPoint({
  x: 1,
  y: 2
});

// Seems there are highly related, so we can use Class to group.


class PointModel {

  public get x() {
    return this._x;
  }
  public set x(value) {
    this._x = value;
  }
  private _x: number;


  y: number;

  constructor(parameters) {

  }

  draw() {

  }

  distance() {

  }
}

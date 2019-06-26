import { Point } from "./classes";

export function nomal(message: string) {
  console.log(message);
}

export const variable = function (message: string) {
  console.log(message);
}

export const arrow = (message: string) => {
  console.log(message);
}

export let drawPoint = ({ x, y }: Point) => {
  console.log(x, y);
}

export let getDistance = ({ x: x1, y: y1 }: Point, { x: x2, y: y2 }: Point) => {
  return Math.sqrt(
    Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
  );
}

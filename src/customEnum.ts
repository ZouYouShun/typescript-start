export function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

export const Direction = strEnum([
  'North',
  'South',
  'East',
  'West'
])

export type Direction = keyof typeof Direction;


console.log(Direction.East);
console.log(Direction.South);
console.log(Direction.East);
console.log(Direction.West);

const a = {
  a: 1,
  b: 2
};

export type myType = typeof a;


export type myKeyType = keyof typeof a;


type Icon =
  'star' |
  'exit';

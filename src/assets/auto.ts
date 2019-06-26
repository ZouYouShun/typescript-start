// you can copy the example.json data and using cmd+shift+p and
// >JSON to TS:Convert from clipboard, that will auto generate the below interface.
interface RootObject {
  array: number[];
  boolean: boolean;
  color: string;
  null?: any;
  number: number;
  object: Object;
  string: string;
  go: Go;
}

interface Go {
  b: string;
  c: number;
}

interface Object {
  a: string;
  c: string;
  e: string;
}

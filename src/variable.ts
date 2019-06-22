
function doSomethingVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Var Finally: ' + i);
}

function doSomethingLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Let Finally: ' + i);
}

let count = 5;
// const count = 5;
count = 6;

doSomethingVar();
doSomethingLet();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] | Array<number> = [1, 2, 3, 4]; //, '2'
let f: any[] = [1, true, 'a', false];

let backgroundColor = Color.Blue;
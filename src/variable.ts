let a: number;
let b: boolean;
let c: string;
let d: any;
let f: any[] = [1, true, 'a', false];
let g: string | number;

// when set g is a number
g = 10;

// the type of g is number, currently
g;

// when set g is a string
g = '123';
// the type of g is string!!! smart typescript.
g;

let file: File | number;


if (file instanceof File) {
  // we can using file API with the current file
  file
}
// the file is not file type.
file;

let e: number[] | number;
// e.
if (e instanceof Array) {
  // the e is an array
  e;
}

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
  // the i can't find
  console.log('Let Finally: ' + i);
}

doSomethingVar();
doSomethingLet();


const abc = () => ({
  abc: '123'
})

type abc = ReturnType<typeof abc>

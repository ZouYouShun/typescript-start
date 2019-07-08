import { ExampleModel } from './assets/auto';

export function generics<T>(value: T) {
  return value;
}

const data = {
  a: 1,
  b: 2
};

type ValueType = typeof data;

generics<ValueType>({
  a: 1,
  b: 2,
})

// example2
export const getJSON = <T>(url: string, config?: {
  headers?: { [key: string]: string },
}): Promise<T> => {
  const fetchConfig = ({
    method: 'GET',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...(config.headers || {})
  });
  return fetch(url, fetchConfig)
    .then<T>(response => response.json());
}

getJSON<ExampleModel>('./assets/example.json').then(x => {
  console.log(x.array);
})


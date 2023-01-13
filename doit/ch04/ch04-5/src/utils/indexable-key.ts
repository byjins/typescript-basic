export type keyValueType = {
  [key: string]: string;
};

export const makeObject = (key: string, value: string): keyValueType => ({
  [key]: value,
});

console.log(makeObject('name', 'Jack')); // { name: 'Jack' }

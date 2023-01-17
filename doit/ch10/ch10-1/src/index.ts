import { IValuable, Valuable } from './utils/IValuable';

export const printValue = <T>(o: IValuable<T>): void => console.log(o.value);

printValue(new Valuable(1));
printValue(new Valuable(true));
printValue(new Valuable('hello'));

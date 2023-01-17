import { Valuable } from '../../../ch10-1/src/utils/IValuable';
import { printValue } from './../../../ch10-1/src/index';
printValue(new Valuable(1));
printValue(new Valuable({ value: true }));

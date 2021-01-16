/* eslint-disable @typescript-eslint/no-explicit-any */
import { keys, merge, reduce, type } from 'ramda';

interface AnyObject {
  [key: string]: any;
}

const isArray = (o: AnyObject | Array<any>): o is Array<any> =>
  type(o) === 'Array';

export const deepReplaceInObject = (
  currentValue: string | number | null | undefined,
  newValue: string | number | null | undefined,
  objectToReplaceIn: AnyObject
): typeof objectToReplaceIn => {
  if (isArray(objectToReplaceIn)) {
    return reduce(
      (array: any[], value) => {
        const keyType = type(value);
        if (keyType === 'Object' || keyType === 'Array') {
          return [...array, deepReplaceInObject(currentValue, newValue, value)];
        } else if (value === currentValue) {
          return [...array, newValue];
        }
        return [...array, value];
      },
      [],
      objectToReplaceIn
    );
  } else {
    return reduce(
      (o: Record<string, unknown>, key) => {
        const value = objectToReplaceIn[key];
        const keyType = type(value);
        if (keyType === 'Object' || keyType === 'Array') {
          return merge(o, {
            [key]: deepReplaceInObject(currentValue, newValue, value)
          });
        } else if (value === currentValue) {
          return merge(o, { [key]: newValue });
        }
        return merge(o, { [key]: value });
      },
      {},
      keys(objectToReplaceIn)
    );
  }
};

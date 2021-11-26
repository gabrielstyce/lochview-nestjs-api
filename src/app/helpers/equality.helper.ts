import { Equality } from '../core/shared/models/equality.model';

export class EqualityHelper {
  public static equals(value) {
    return obj => {
      const key = obj.key;

      if (key instanceof Equality) {
        return key.equals(value);
      }

      return key === value;
    };
  }
}

import { Equality } from '../core/shared/models/equality.model';

export class EqualityHelper {
  public static equals(value) {
    return obj => {
      if (obj instanceof Equality) {
        return obj.equals(value);
      }

      return (<any>obj).key === value;
    };
  }
}
